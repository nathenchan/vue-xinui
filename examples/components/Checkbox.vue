<template>
	<div>

		<div class="demo-pages">
			<h3>checkbox 单独使用</h3>
			<p class="tips">绑定一个值val1，根据状态设为true/false</p>
			<div class="show-page">
				<div class="demo-page">
					<x-checkbox v-model="val1">
						<template v-slot:text>文字</template>
					</x-checkbox>
				</div>
			</div>
			<source-page :tmpl="checkboxText"></source-page>
	    </div>

	    <div class="demo-pages">
			<h3>多选框为一组</h3>
			<p class="tips">使用checkbox组时，val为单独的checked值，选中时改变checklist，并且可以限制选择的个数</p>
			<div class="show-page">
				<div class="demo-page">
					<x-checkbox-group v-model="checklist">
						<x-checkbox val="sz">
							<template v-slot:text>深圳</template>
						</x-checkbox>
						<x-checkbox val="gz">
							<template v-slot:text>广州</template>
						</x-checkbox>
						<x-checkbox val="bj">
							<template v-slot:text>北京</template>
						</x-checkbox>
						<x-checkbox val="sh">
							<template v-slot:text>上海</template>
						</x-checkbox>
						<x-checkbox val="hz">
							<template v-slot:text>杭州</template>
						</x-checkbox>
					</x-checkbox-group>
				</div>
			</div>
			<source-page :tmpl="checkboxText2"></source-page>
	    </div>

	    <div class="api-pages">
			<h3>x-checkbox Attributes</h3>
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
						<td>绑定的值</td>
						<td>Boolean</td>
						<td></td>
						<td>true/false</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="api-pages">
			<h3>x-checkbox-group Attributes</h3>
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
						<td>绑定的值</td>
						<td>Array</td>
						<td></td>
						<td>[]</td>
					</tr>
					<tr>
						<td>x-checkbox的val</td>
						<td>单元素值</td>
						<td>String|Number</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		
	</div>
</template>

<script>
import {checkboxText,checkboxText2} from '../sourcetmp/checkbox.js'
export default{
	data(){
		return {
			checkboxText,
			checkboxText2,
			val1:true,
			checklist:['sz']
		}
	}
}
</script>

<style lang="scss">
	
</style>