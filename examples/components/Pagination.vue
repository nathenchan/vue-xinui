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

		<div class="api-pages">
			<h3>Attributes</h3>
			<table width="100%">
				<thead>
					<tr>
						<td>参数名</td>
						<td>说明</td>
						<td>类型</td>
						<td>默认值</td>
						<td>可选值</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>pageSize</td>
						<td>一页显示的条数</td>
						<td>Number</td>
						<td>8</td>
						<td></td>
					</tr>
					<tr>
						<td>page</td>
						<td>当前页码</td>
						<td>Number</td>
						<td>1</td>
						<td></td>
					</tr>
					<tr>
						<td>count</td>
						<td>数据总数</td>
						<td>Number</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>jump</td>
						<td>是否显示跳页框</td>
						<td>Boolean</td>
						<td>true</td>
						<td></td>
					</tr>


				</tbody>
			</table>
		</div>

		<div class="api-pages">
			<h3>Events</h3>
			<table width="100%">
				<thead>
					<tr>
						<td>事件名</td>
						<td>说明</td>
						<td>类型</td>
						<td>参数</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>change</td>
						<td>page(当前页)改变时回调</td>
						<td>Function</td>
						<td>page</td>
					</tr>
				</tbody>
			</table>
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