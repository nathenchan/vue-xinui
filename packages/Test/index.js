import Test from './src/Test.vue'

// 单组件引入时需提供install方法给Vue.use单独注册
Test.install = function(Vue){
	Vue.component(Test.name,Test)
}

export default Test