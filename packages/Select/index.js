import Select from './src/Select.vue'

// 单组件引入时需提供install方法给Vue.use单独注册
Select.install = function(Vue){
	Vue.component(Select.name,Select)
}

export default Select