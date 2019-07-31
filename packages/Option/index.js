import Option from '../Select/src/Option.vue'

// 单组件引入时需提供install方法给Vue.use单独注册
Option.install = function(Vue){
	Vue.component(Option.name,Option)
}

export default Option