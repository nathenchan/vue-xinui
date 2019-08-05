import FormItem from '../Form/src/FormItem.vue'

// 单组件引入时需提供install方法给Vue.use单独注册
FormItem.install = function(Vue){
	Vue.component(FormItem.name,FormItem)
}

export default FormItem