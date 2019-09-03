import Slide from './src/Slide.vue'

// 单组件引入时需提供install方法给Vue.use单独注册
Slide.install = function(Vue){
	Vue.component(Slide.name,Slide)
}

export default Slide