import Loading from '../packages/Loading/index.js'
import XButton from '../packages/Button/index.js'
import Dialog from '../packages/Dialog/index.js'
import SlideVerify from '../packages/SlideVerify/index.js'
import Upload from '../packages/Upload/index.js'
import Ring from '../packages/Ring/index.js'
import CountDown from '../packages/CountDown/index.js'
import Pagination from '../packages/Pagination/index.js'
import Ximage from '../packages/Image/index.js'

var components = [
	XButton,
	Dialog,
	SlideVerify,
	Upload,
	CountDown,
	Ring,
	Pagination,
	Ximage
]

function install(Vue){
	components.forEach(component=>{
		Vue.component(component.name,component)
	})
	Vue.use(Loading)
}

if( typeof window !== undefined && window.Vue ){
	install(window.Vue)
}

export default {
	install,
	author:'nathen',
	version:'1.0.14'
}