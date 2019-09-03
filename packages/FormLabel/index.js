import FormLabel from '../Form/src/FormLabel.vue'

// 单组件引入时需提供install方法给Vue.use单独注册
FormLabel.install = function(Vue){
	Vue.component(FormLabel.name,FormLabel)
}

export default FormLabel