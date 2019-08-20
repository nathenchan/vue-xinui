<template>
	<div class="x-slide">
		<ul class="x-slide-imgpage" :style="{width:slideWidth*(this.liLength+1)+'px'}">
			<slot/>
		</ul>
		<div class="x-slide-arrowbtn"></div>
		<div class="x-slide-paginationbtn"></div>
	</div>
</template>

<script>
/**
 * pc wap 事件
 * 左右箭头+圆点点击
 * 图片lazy load
 * 类型：单张，3d
 * 数据传输
 * 图片 or 其他内容
 */
export default{
	name:'x-slide',
	data(){
		return {
			slide:null,
			slideUl:null,
			lis:null,
			slideWidth:0,
			liLength:0,
			moveX:0
		}
	},
	methods:{

	},
	created(){

	},
	mounted(){
		this.slide = this.$el
		this.slideWidth = this.slide.offsetWidth
		this.slideUl = this.$el.querySelector('.x-slide-imgpage')
		this.lis = this.slideUl.querySelectorAll('li')
		this.liLength = this.lis.length

		this.slideUl.appendChild(this.lis[0].cloneNode(true))
	}
}
</script>

<style lang="scss">
.x-slide{
	position: relative;
	width:300px;
	height:140px;
	overflow: hidden;
	.x-slide-imgpage{
		position: absolute;
		left:0;
		top:0;
		width:1200px; //
		&:after{
			content:'';
			display: block;
			height:0;
			visibility: hidden;
			clear:both;
		}
		&>li{
			float: left;
			// 
			width:300px;
			height:140px;
			text-align: center;
			line-height:140px;
			color:#fff;
			&:nth-of-type(1){background:#000;}
			&:nth-of-type(2){background:#abcdef;}
			&:nth-of-type(3){background:red;}
			&:nth-of-type(4){background:blue;}
		}
	}
}
</style>
