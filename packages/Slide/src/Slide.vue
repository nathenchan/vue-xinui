<template>
	<div class="x-slide">
		<ul class="x-slide-imgpage" :style="{width:ulWidth+'px'}">
			<slot/>
		</ul>
		<div class="x-slide-arrowbtn">
			<span class="left-arrow" @click="moveLeft">左</span>
			<div class="rigth-arrow" @click="moveRight">右</div>
		</div>
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
			slideWidth:0, // 父级宽度 = 1张图宽度
			ulWidth:0,
			liLength:0,
			moveNum:1,
			onOff:true,
			moveX:0
		}
	},
	methods:{
		init(){
			this.slideUl.insertBefore(this.lis[this.lis.length-1].cloneNode(true),this.lis[0])
			this.slideUl.appendChild(this.lis[0].cloneNode(true))
			this.ulWidth = (this.liLength+2)*this.slideWidth
			this.slideUl.style.transform = `translate(-${this.slideWidth}px,0)`
		},
		moveLeft(){
			if(this.onOff){
				this.onOff = false
				this.slideUl.style.transition = '.3s'
				this.moveX = -(--this.moveNum * this.slideWidth)
				this.slideUl.style.transform = `translate(${this.moveX}px,0)`
			}
		},
		moveRight(){
			if(this.onOff){
				this.slideUl.style.transition = '.3s'
				this.onOff = false
				this.moveX = -(++this.moveNum * this.slideWidth)
				this.slideUl.style.transform = `translate(${this.moveX}px,0)`
			}
		},
		slideUlTransitionEnd(){ // ul切换动画后检测
			this.slideUl.addEventListener('transitionend',e=>{
				if(this.moveNum == 0){
					this.slideUl.style.transition = '.0s'
					this.moveNum = this.liLength
					this.slideUl.style.transform = `translate(-${this.slideWidth*this.liLength}px,0)`
					this.onOff = true
				}else if(this.moveNum == this.liLength+1){
					this.slideUl.style.transition = '.0s'
					this.moveNum = 1
					this.slideUl.style.transform = `translate(-${this.slideWidth}px,0)`
					this.onOff = true
				}else{
					this.onOff = true
				}
			})
		}
	},
	mounted(){
		this.slide = this.$el
		this.slideWidth = this.slide.offsetWidth
		this.slideUl = this.$el.querySelector('.x-slide-imgpage')
		this.lis = this.slideUl.querySelectorAll('li')
		this.liLength = this.lis.length
		
		// init
		this.init()

		this.slideUlTransitionEnd()
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
		&:after{
			content:'';
			display: block;
			height:0;
			visibility: hidden;
			clear:both;
		}
		&>li{
			float: left;
			width:300px;
			height:140px;
			text-align: center;
			line-height:140px;
			color:#fff;
			&:nth-of-type(1){background:blue;}
			&:nth-of-type(2){background:#000;}
			&:nth-of-type(3){background:red;}
			&:nth-of-type(4){background:yellow;}
			&:nth-of-type(5){background:blue;}
			&:nth-of-type(6){background:#000;}
			&:nth-of-type(7){background:#abcdef;}
		}
	}
	.x-slide-arrowbtn{
		position: absolute;
		width: 100%;
		top:45%;
		.left-arrow,.rigth-arrow{
			position: absolute;
			top:0;
			width:20px;
			background:#fff;
		}
		.left-arrow{
			left:0;
		}
		.rigth-arrow{
			right:0;
		}
	}
}
</style>
