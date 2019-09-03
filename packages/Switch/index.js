import Switch from './src/Switch.vue'

// 单组件引入时需提供install方法给Vue.use单独注册
Switch.install = function(Vue){
	Vue.component(Switch.name,Switch)
}

export default Switch