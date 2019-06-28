import '../src/examples.scss';
import '../../src/xinui.scss';

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../components/App.vue'
import Index from '../components/Index.vue'
import Loading from '../components/Loading.vue'
import Button from '../components/Button.vue'
import Dialog from '../components/Dialog.vue'
import SlideVerify from '../components/SlideVerify.vue'
import Upload from '../components/Upload.vue'
import SourceCode from '../components/common/SourcePage.vue'
import Ring from '../components/Ring.vue'

import xinui from '../../src/index.js'
// import { XButton } from '../../src/index.js'
// Vue.use(XButton)

Vue.use(xinui)
Vue.use(VueRouter)

Vue.component(SourceCode.name,SourceCode)

const routes = [
	{ path:'/', component:Index },
	{ path:'/button', component:Button },
	{ path:'/loading', component:Loading },
	{ path:'/dialog', component:Dialog },
	{ path:'/slide_verify', component:SlideVerify },
	{ path:'/upload', component:Upload },
	{ path:'/ring', component:Ring }
]

const router = new VueRouter({
  routes
})

new Vue({
	render:h=>h(App),
	router
}).$mount('#vue-xinui')

