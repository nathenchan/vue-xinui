import '../src/examples.scss';
import '../../src/base.scss';

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
// import SvgDemo from '../components/SvgDemo.vue'
import CountDown from '../components/CountDown.vue'
import Three from '../components/Three.vue'
import Pagination from '../components/Pagination.vue'
import XImage from '../components/Image.vue'
import Input from '../components/Input.vue'
import Radio from '../components/Radio.vue'
import Checkbox from '../components/Checkbox.vue'
import Select from '../components/Select.vue'
import LocationSelect from '../components/LocationSelect.vue'
import Switch from '../components/Switch.vue'
import Form from '../components/Form.vue'
import Textarea from '../components/Textarea.vue'
import Slide from '../components/Slide.vue'
import UrlParams from '../components/UrlParams.vue'

import xinui from '../../src/index.js'
// import { XButton } from '../../src/index.js'
// Vue.use(XButton)

Vue.use(xinui)
Vue.use(VueRouter)

Vue.component(SourceCode.name,SourceCode)

const routes = [
	{ path:'/', component:Button },
	{ path:'/button', component:Button },
	{ path:'/loading', component:Loading },
	{ path:'/dialog', component:Dialog },
	{ path:'/slide_verify', component:SlideVerify },
	{ path:'/upload', component:Upload },
	{ path:'/ring', component:Ring },
	// { path:'/svg_demo',component:SvgDemo },
	{ path:'/count_down',component:CountDown },
	{ path:'/three',component:Three },
	{ path:'/pagination',component:Pagination },
	{ path:'/image',component:XImage },
	{ path:'/input',component:Input },
	{ path:'/radio',component:Radio },
	{ path:'/checkbox',component:Checkbox },
	{ path:'/select',component:Select },
	{ path:'/location_select',component:LocationSelect },
	{ path:'/switch',component:Switch },
	{ path:'/form',component:Form },
	{ path:'/textarea',component:Textarea },
	{ path:'/slide',component:Slide },
	{ path:'/url_params',component:UrlParams }
]

const router = new VueRouter({
  routes
})

new Vue({
	render:h=>h(App),
	router
}).$mount('#vue-xinui')

