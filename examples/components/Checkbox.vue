<template>
	<div>

		<div class="demo-pages">
			<h3>checkbox 单独使用</h3>
			<p class="tips">绑定一个值val1，根据状态设为true/false</p>
			<div class="show-page">
				<div class="demo-page">
					<x-checkbox>
						<template v-slot:text>文字</template>
					</x-checkbox>
				</div>
			</div>
			<!-- <source-page :tmpl=""></source-page> -->
	    </div>

	    <div class="demo-pages">
			<h3>多选框为一组</h3>
			<p class="tips">可以限制选择的个数，可以使用全选功能</p>
			<div class="show-page">
				<div class="demo-page">
					{{checklist}}
					<x-checkbox-group v-model="checklist">
						<x-checkbox value="sz">
							<template v-slot:text>深圳</template>
						</x-checkbox>
						<x-checkbox value="gz">
							<template v-slot:text>广州</template>
						</x-checkbox>
						<x-checkbox value="bj">
							<template v-slot:text>北京</template>
						</x-checkbox>
						<x-checkbox value="sh">
							<template v-slot:text>上海</template>
						</x-checkbox>
						<x-checkbox value="hz">
							<template v-slot:text>杭州</template>
						</x-checkbox>
					</x-checkbox-group>
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
						<td>类型</td>
						<td>回调</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>src</td>
						<td>图片地址</td>
						<td>String</td>
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
			val1:false,
			checklist:[]
		}
	}
}
</script>

<style lang="scss">
	
</style>