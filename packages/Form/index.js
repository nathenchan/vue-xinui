import Form from './src/Form.vue'

// 单组件引入时需提供install方法给Vue.use单独注册
Form.install = function(Vue){
	Vue.component(Form.name,Form)
}

export default Form