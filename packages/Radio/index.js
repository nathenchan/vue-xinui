import Radio from './src/Radio.vue'

// 单组件引入时需提供install方法给Vue.use单独注册
Radio.install = function(Vue){
	Vue.component(Radio.name,Radio)
}

export default Radio