<template>
	<div>
		<div class="demo-pages">
			<h3>图片懒加载</h3>
			<div class="show-page">
				<div class="demo-page">
					<div class="x-image-test-page">
						<x-image v-for="item in imgs" :src="item.src" :height="item.height" :key="item.id" />
					</div>
					<x-button :btnStyle="{padding:'6px 14px',border-radius:'6px',background:'#000',color:'#fff',margin:'20px auto',display:'block'}" @click="addData">test</x-button>
				</div>
			</div>
			<source-page :tmpl="ximageText"></source-page>
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
					<tr>
						<td>alt</td>
						<td>原生属性</td>
						<td>String</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>title</td>
						<td>原生属性</td>
						<td>String</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>height</td>
						<td>占位高度</td>
						<td>Number</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>


	</div>
</template>

<script>
import {ximageText} from '../sourcetmp/ximageText.js'

export default{
	data(){
		return {
			ximageText,
			imgs:[
				{
					src:'http://img3.imgtn.bdimg.com/it/u=2279055805,3887160486&fm=26&gp=0.jpg',
					id:1,
					height:312
				},
				{
					src:'http://b-ssl.duitang.com/uploads/item/201707/30/20170730093737_NMCwW.jpeg',
					id:2,
					height:871
				},
				{
					src:'http://b-ssl.duitang.com/uploads/item/201604/29/20160429155655_EYXZx.jpeg',
					id:3,
					height:1101
				},
				{
					src:'http://s15.sinaimg.cn/mw690/00328H1Nzy74f5vBmKG8e&690',
					id:4,
					height:497
				},
				{
					src:'http://www.chinadaily.com.cn/tech/img/attachement/jpg/site1/20140312/eca86bd9ddb2148a6b1a27.jpg',
					id:5,
					height:578
				}
			]
		}
	},
	methods:{
		addData(){
			this.imgs.push({
				src:'http://pic-image.yesky.com/uploadImages/2017/116/25/NT2I86C7783V.jpg',
				id:6,
				height:600
			})
		}
	}
}
</script>

<style lang="scss">
img{
	max-width: 100%;
}
</style>