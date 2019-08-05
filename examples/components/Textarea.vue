<template>
	<div>
		<div class="demo-pages">
			<h3>Textarea 文本域</h3>
			<div class="show-page">
				<div class="demo-page">
					<x-textarea v-model="textData" max="10" min="5" @blur="blurFn" />
				</div>
			</div>
			<source-page :tmpl="TextareaText"></source-page>
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
						<td>String</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>max</td>
						<td>最大字符数</td>
						<td>String|Number</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>min</td>
						<td>最小字符数</td>
						<td>String|Number</td>
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
						<td>blur</td>
						<td>离开文本域的焦点触发</td>
						<td>event</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import {TextareaText} from '../sourcetmp/textarea.js'
export default{
	data(){
		return {
			textData:'',
			TextareaText
		}
	},
	methods:{
		blurFn(e){
			console.log(this.textData,e)
		}
	}
}
</script>
