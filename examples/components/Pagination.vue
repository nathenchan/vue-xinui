<template>
	<div>
		{{page}}
		<x-pagination :page-size="pageSize" :page.sync="page" :count="count"  />
		<!-- <button @click="pageChange">test</button> -->
	</div>
</template>

<script>
export default{
	data(){
		return {
			page:1,
			pageSize:8,
			count:110
		}
	},
	methods:{
		pageChange(){
			this.page++
		}
	}
}
</script>