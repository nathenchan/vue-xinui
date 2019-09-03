import Textarea from './src/Textarea.vue'

// 单组件引入时需提供install方法给Vue.use单独注册
Textarea.install = function(Vue){
	Vue.component(Textarea.name,Textarea)
}

export default Textarea