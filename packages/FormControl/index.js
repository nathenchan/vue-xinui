import FormControl from '../Form/src/FormControl.vue'

// 单组件引入时需提供install方法给Vue.use单独注册
FormControl.install = function(Vue){
	Vue.component(FormControl.name,FormControl)
}

export default FormControl