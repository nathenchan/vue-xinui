import Pagination from './src/Pagination.vue'

Pagination.install = function(Vue){
	Vue.component(Pagination.name,Pagination)
}

export default Pagination