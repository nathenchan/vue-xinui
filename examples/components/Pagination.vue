<template>
	<div>
		<div class="demo-pages">
			<h3>Pagination 分页</h3>
			<div class="show-page">
				<div class="demo-page">
					<x-pagination :pageSize="pageSize" :page.sync="page" :count="count" />
					<x-pagination :pageSize="pageSize2" :page.sync="page" :count="count2" @change="fetchData" />
					<x-pagination :pageSize="pageSize3" :page.sync="page" :count="count3"  />
				</div>
			</div>
			<source-page :tmpl="paginationText"></source-page>
	     </div>
	</div>
</template>

<script>
import paginationText from '../sourcetmp/pagination.js'
export default{
	data(){
		return {
			page:1,
			pageSize:5,
			pageSize2:10,
			pageSize3:15,
			count:0,
			count2:1110,
			count3:150,
			paginationText
		}
	},
	methods:{
		fetchData(page){ 
			// axios.get('/api',{
			// 	params:{ page,limit:this.pageSize2 }
			// }).then(res=>{
			// 	do something
			// })
		}
	}
}
</script>

<style lang="scss">
.x-pagination{
	margin-bottom: 40px;
}
</style>