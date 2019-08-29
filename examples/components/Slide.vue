<template>
	<div>
		<div class="demo-pages">
			<h3></h3>
			<div class="show-page">
				<div class="demo-page">
					<x-slide>
						<li class="content-li" v-for="(item,index) in imgData"><img :src="item.src"></li>
					</x-slide>
				</div>
			</div>
			<!-- <source-page :tmpl=""></source-page> -->
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
						<td>src</td>
						<td>图片地址</td>
						<td>String</td>
						<td></td>
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
						<td>回调参数</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>src</td>
						<td>图片地址</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			imgData:[
				{
					alt:'',
					src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1944845135,280224577&fm=26&gp=0.jpg'
				},
				{
					alt:'',
					src:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1289981276,3794620975&fm=26&gp=0.jpg'
				},
				{
					alt:'',
					src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2871893164,592906384&fm=26&gp=0.jpg'
				},
				{
					alt:'',
					src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2868140583,532600119&fm=26&gp=0.jpg'
				},
				{
					src:'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg'
				}
			]
		}
	}
}
</script>

<style lang="scss">
.x-slide{
	width:300px;
	height:140px;
	.content-li{
		width:300px;
	}
}
</style>