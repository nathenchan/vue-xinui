<template>
	<div class="x-slide">
		<ul class="x-slide-imgpage" :style="{width:ulWidth+'px'}">
			<slot/>
		</ul>
		<div class="x-slide-arrowbtn">
			<span class="left-arrow" @click="moveLeft">左</span>
			<div class="rigth-arrow" @click="moveRight">右</div>
		</div>
		<ul class="x-slide-paginationbtn">
			<li v-for="(item,index) in sourceLength" :class="[{'active':index==roundNum}]" @click="moveUL(index)"></li>
		</ul>
	</div>
</template>

<script>
import {getStyle} from '../../../src/utils/dom.js'
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
			liLength:0, // 拷贝后的li数
			sourceLength:0, // 拷贝前li数
			moveNum:1,
			roundNum:0,
			onOff:true,
			moveX:0,
			// wap
			startX:0,
			disX:0,
			UlNowX:0,
			transiting:false
		}
	},
	methods:{
		init(){
			this.slideUl.insertBefore(this.lis[this.lis.length-1].cloneNode(true),this.lis[0])
			this.slideUl.appendChild(this.lis[0].cloneNode(true))
			this.ulWidth = (this.liLength)*this.slideWidth
			this.moveX = -this.slideWidth
			this.slideUl.style.transform = `translate(-${this.slideWidth}px,0)`
		},
		mobile(){ //移动端事件
			this.slide.addEventListener('touchstart',e=>{
				this.slideUl.style.transition = '.0s'
				this.UlNowX = getStyle(this.slideUl,'transform')['translateX']
				this.startX = e.touches[0].clientX
				e.preventDefault()
			})
			this.slide.addEventListener('touchmove',e=>{
				this.disX =  parseInt((e.touches[0].clientX - this.startX)*.4)
				this.slideUl.style.transform = `translate(${(this.disX+this.UlNowX)}px,0)`
				e.preventDefault()
			})
			this.slide.addEventListener('touchend',e=>{
				// 滑动幅度大则切换
				if(Math.abs(this.disX) >= 30){
					if(this.onOff){
						this.disX > 0 ? this.moveLeft() : this.moveRight()
					}else{ // 快速中断又拖拽
						this.slideUl.style.transition = '.3s'
						this.slideUl.style.transform = `translate(${(this.moveX)}px,0)`
					}
				}else if(this.disX != 0){ // 小幅挪动回到原位	
					this.slideUl.style.transition = '.3s'
					this.slideUl.style.transform = `translate(${(this.moveX)}px,0)`
				}
				this.disX = 0
				e.preventDefault()
			})
		},
		moveUL(index){
			this.onOff = false
			this.slideUl.style.transition = '.3s'
			this.moveNum = index+1
			this.roundNum = index
			this.slideUl.style.transform = `translate(-${this.moveNum*this.slideWidth}px,0)`
		},
		moveLeft(){
			if(this.onOff){
				this.onOff = false
				this.slideUl.style.transition = '.3s'
				this.roundNum == 0 ? this.roundNum = this.sourceLength-1 : this.roundNum--
				this.moveX = -(--this.moveNum * this.slideWidth)
				this.slideUl.style.transform = `translate(${this.moveX}px,0)`
			}
		},
		moveRight(){
			if(this.onOff){
				this.onOff = false
				this.slideUl.style.transition = '.3s'
				this.roundNum = this.moveNum%this.sourceLength
				this.moveX = -(++this.moveNum * this.slideWidth)
				this.slideUl.style.transform = `translate(${this.moveX}px,0)`
			}
		},
		slideUlTransitionEnd(){ // ul切换动画后检测
			this.slideUl.addEventListener('transitionend',e=>{
				if(this.moveNum == 0){ // 到达最后一张Loop位
					this.slideUl.style.transition = '.0s'
					this.moveNum = this.sourceLength
					this.moveX = -(this.slideWidth*(this.sourceLength))
					this.slideUl.style.transform = `translate(${this.moveX}px,0)`
					this.onOff = true
				}else if(this.moveNum == this.liLength-1){ // 到达第一张Loop位
					this.slideUl.style.transition = '.0s'
					this.moveNum = 1
					this.moveX = -this.slideWidth
					this.slideUl.style.transform = `translate(${this.moveX}px,0)`
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
		this.liLength = this.lis.length+2
		this.sourceLength = this.lis.length
		// init
		this.init()

		this.slideUlTransitionEnd()
		// mobile event
		this.mobile()
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
			overflow: hidden;
			img{
				width:100%;
				height:100%;
			}
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
	.x-slide-paginationbtn{
		position: absolute;
		left:0;
		width:100%;
		bottom:10px;
		text-align: center;
		&:after{
			content:'';
			display: block;
			height:0;
			visibility: hidden;
			clear:both;
		}
		li{
			display: inline-block;
			margin:0 2px;
			width:8px;
			height:8px;
			background:#e3e3e3;
			border-radius: 4px;
			overflow: hidden;
			cursor: pointer;
		}
		li.active{
			background:#409EFF;
		}
	}
}
</style>
