<template>
	<div>
		<div class="demo-pages">
			<h3></h3>
			<div class="show-page">
				<div class="demo-page">
					<x-slide>
						<li v-for="(item,index) in imgData"><img :src="item.src"></li>
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
					src:'http://img4.imgtn.bdimg.com/it/u=1102601247,263564605&fm=26&gp=0.jpg'
				},
				{
					alt:'',
					src:'http://img5.imgtn.bdimg.com/it/u=3846716641,4070627816&fm=26&gp=0.jpg'
				},
				{
					alt:'',
					src:'http://img2.imgtn.bdimg.com/it/u=1794041649,1170847055&fm=26&gp=0.jpg'
				},
				{
					alt:'',
					src:'http://img1.imgtn.bdimg.com/it/u=3591372842,2390059023&fm=26&gp=0.jpg'
				}
			]
		}
	}
}
</script>

<style lang="scss">
	
</style>