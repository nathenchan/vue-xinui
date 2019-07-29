import Checkbox from './src/Checkbox.vue'

// 单组件引入时需提供install方法给Vue.use单独注册
Checkbox.install = function(Vue){
	Vue.component(Checkbox.name,Checkbox)
}

export default Checkbox