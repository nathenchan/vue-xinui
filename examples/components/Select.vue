<template>
	<div>
		<div class="demo-pages">
			<h3>Select 下拉菜单</h3>
			<p class="tips">
				x-option,label为说明，value为值。
			</p>
			<div class="show-page">
				<div class="demo-page">
					<x-select v-model="value" placeholder="下拉菜单" @change="changeData">
						<x-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
					</x-select>
				</div>
			</div>
			<source-page :tmpl="selectText"></source-page>
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
						<td>select的值</td>
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
						<td>change</td>
						<td>值改变时触发</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>

	</div>
</template>

<script>
import {selectText} from '../sourcetmp/select.js'
export default{
	data(){
		return {
			selectText,
			value:'1',
			options:[
				{
					value:'1',
					label:'选项1'
				},
				{
					value:'2',
					label:'选项2'
				},
				{
					value:'3',
					label:'选项3选项3选项3选项3选项3选项3'
				}
			]
		}
	},
	methods:{
		changeData(){
			console.log(1)
		}
	}
}
</script>
