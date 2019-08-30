<template>
	<div>
		<div class="demo-pages">
			<h3>轮播图</h3>
			<p class="tips">支持桌面及移动手势,x-slide中的子元素必须为切换使用的li元素。定制箭头和圆点样式可以通过覆盖css实现。</p>
			<p class="tips">为了初始化成功，必须在css中声明.x-slide(轮播图父级)width和height及.content-li(列表子元素)的width</p>
			<div class="show-page">
				<div class="demo-page">
					<x-slide transition-time=".2s">
						<li class="content-li" v-for="(item,index) in imgData"><img :src="item.src"></li>
					</x-slide>
				</div>
			</div>
			<source-page :tmpl="SlideText"></source-page>
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
						<td>autoPlay</td>
						<td>自动播放</td>
						<td>Boolean</td>
						<td>true</td>
						<td>false</td>
					</tr>
					<tr>
						<td>transitionTime</td>
						<td>动画时间</td>
						<td>String</td>
						<td>.3s</td>
						<td></td>
					</tr>
					<tr>
						<td>intervalTime</td>
						<td>定时器间隔时间</td>
						<td>Number</td>
						<td>3000</td>
						<td></td>
					</tr>
					<tr>
						<td>paginationShow</td>
						<td>小圆点</td>
						<td>Boolean</td>
						<td>true</td>
						<td></td>
					</tr>
					<tr>
						<td>arrowShow</td>
						<td>左右箭头</td>
						<td>Boolean</td>
						<td>true</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import {SlideText} from '../sourcetmp/slide.js'
export default{
	data(){
		return {
			SlideText,
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
	height:200px;
	.content-li{
		width:300px;
	}
}
</style>