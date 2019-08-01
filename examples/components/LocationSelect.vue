<template>
	<div>
		<div class="demo-pages">
			<h3>LocationSelect 地址选择</h3>
			<div class="show-page">
				<div class="demo-page">
					<x-location-select :location-data="locationData" v-model="locationVal" @lastChange="changefn" />
				</div>
			</div>
			<source-page :tmpl="locationText"></source-page>
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
						<td>location-data</td>
						<td>地址数据</td>
						<td>Array</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>v-model</td>
						<td>选择省市区的字符串</td>
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
						<td>@lastChange</td>
						<td>区选择后触发</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import locationData from '../../data/areadata.js'
import {locationText} from '../sourcetmp/locationSelect.js'

export default{
	data(){
		return {
			locationText,
			locationData,
			locationVal:''
		}
	},
	methods:{
		changefn(){
			console.log(this.locationVal)
		}
	}
}
</script>

<style lang="scss">
	
</style>