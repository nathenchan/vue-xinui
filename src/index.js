import Loading from '../packages/Loading/index.js'
import XButton from '../packages/Button/index.js'
import Dialog from '../packages/Dialog/index.js'
import SlideVerify from '../packages/SlideVerify/index.js'
import Upload from '../packages/Upload/index.js'

var components = [
	XButton,
	Dialog,
	SlideVerify,
	Upload
]

function install(Vue){
	components.forEach(component=>{
		Vue.component(component.name,component)
	})
	Vue.use(Loading)
}

if( typeof window !== undefined && window.Vue ){
	install(components)
}

export {
	XButton,
	Dialog,
	SlideVerify,
	Upload
}

export default {
	install,
	author:'nathen'
}