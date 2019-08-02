import Loading from '../packages/Loading/index.js'
import XButton from '../packages/Button/index.js'
import Dialog from '../packages/Dialog/index.js'
import SlideVerify from '../packages/SlideVerify/index.js'
import Upload from '../packages/Upload/index.js'
import Ring from '../packages/Ring/index.js'
import CountDown from '../packages/CountDown/index.js'
import Pagination from '../packages/Pagination/index.js'
import Ximage from '../packages/Image/index.js'
import Input from '../packages/Input/index.js'
import Radio from '../packages/Radio/index.js'
import Checkbox from '../packages/Checkbox/index.js'
import CheckboxGroup from '../packages/CheckboxGroup/index.js'
import Select from '../packages/Select/index.js'
import Option from '../packages/Option/index.js'
import LocationSelect from '../packages/LocationSelect/index.js'
import Switch from '../packages/Switch/index.js'

var components = [
	XButton,
	Dialog,
	SlideVerify,
	Upload,
	CountDown,
	Ring,
	Pagination,
	Input,
	Radio,
	Checkbox,
	CheckboxGroup,
	Select,
	Option,
	LocationSelect,
	Switch
]

function install(Vue){
	components.forEach(component=>{
		Vue.component(component.name,component)
	})
	Vue.use(Loading)
	Vue.use(Ximage)
}

if( typeof window !== undefined && window.Vue ){
	install(window.Vue)
}

export default {
	install,
	author:'nathen',
	version:'1.0.14'
}