<template>
	<div>
		<div class="demo-pages">
			<h3>Switch 开关</h3>
			<div class="show-page">
				<div class="demo-page">
					<x-switch v-model="switchVal" :open-value="true" :close-value="false" @change="valChange" />
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
						<td>v-model</td>
						<td>值</td>
						<td>Number,String,Boolean</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>open-value</td>
						<td>打开时的值</td>
						<td>Number,String,Boolean</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>close-value</td>
						<td>关闭时的值</td>
						<td>Number,String,Boolean</td>
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
						<td>change</td>
						<td>组件值改变时触发</td>
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
			switchVal:false
		}
	},
	methods:{
		valChange(){
			console.log(this.switchVal)
		}
	}
}
</script>
