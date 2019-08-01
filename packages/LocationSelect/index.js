import LocationSelect from './src/LocationSelect.vue'

// 单组件引入时需提供install方法给Vue.use单独注册
LocationSelect.install = function(Vue){
	Vue.component(LocationSelect.name,LocationSelect)
}

export default LocationSelect