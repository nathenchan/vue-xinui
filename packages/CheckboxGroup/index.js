import CheckboxGroup from './src/CheckboxGroup.vue'

// 单组件引入时需提供install方法给Vue.use单独注册
CheckboxGroup.install = function(Vue){
	Vue.component(CheckboxGroup.name,CheckboxGroup)
}

export default CheckboxGroup