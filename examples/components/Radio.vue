<template>
	<div>
		<div class="demo-pages">
			<h3>Radio 单选框</h3>
			<div class="show-page">
				<div class="demo-page">
					<x-radio value="1" :radio-model.sync="radioVal">
						<template v-slot:text >选项1</template>
					</x-radio>
					<x-radio value="2" :radio-model.sync="radioVal">
						<template v-slot:text >选项2</template>
					</x-radio>
					<x-radio value="3" :radio-model.sync="radioVal">
						<template v-slot:text >选项3</template>
					</x-radio>
				</div>
			</div>
			<source-page :tmpl="radioText"></source-page>
	    </div>
		
	    <div class="demo-pages">
			<h3>禁用状态</h3>
			<div class="show-page">
				<div class="demo-page">
					<x-radio value="a" :radio-model.sync="radioVal2" :disabled="true">
						<template v-slot:text >选项1</template>
					</x-radio>
					<x-radio value="b" :radio-model.sync="radioVal2" :disabled="true">
						<template v-slot:text >选项2</template>
					</x-radio>
				</div>
			</div>
			<source-page :tmpl="radioText2"></source-page>
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
						<td>value</td>
						<td>选项的值</td>
						<td>String|Number</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>radio-model</td>
						<td>绑定的值</td>
						<td>String|Number</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>禁用</td>
						<td>Boolean</td>
						<td>false</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import {radioText,radioText2} from '../sourcetmp/radio.js'
export default{
	data(){
		return {
			radioText,
			radioText2,
			radioVal:'1',
			radioVal2:'b'
		}
	}
}
</script>
