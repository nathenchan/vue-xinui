<template>
	<div>
		<x-pagination :page-size="pageSize" :page.sync="page" :count="count" background  />
	</div>
</template>

<script>
export default{
	data(){
		return {
			page:1,
			pageSize:8,
			count:64
		}
	},
	methods:{
		pageChange(){
			
		}
	}
}
</script>