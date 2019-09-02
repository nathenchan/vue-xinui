<template>
	<div class="x-slide">
		<ul class="x-slide-imgpage" :style="{width:ulWidth+'px'}">
			<slot/>
		</ul>
		<div class="x-slide-arrowbtn" v-if="arrowShow">
			<span class="left-arrow" @click="moveLeft"></span>
			<div class="rigth-arrow" @click="moveRight"></div>
		</div>
		<ul class="x-slide-paginationbtn" v-if="paginationShow">
			<li v-for="(item,index) in sourceLength" :class="[{'active':index==roundNum}]" @click="moveUL(index)"></li>
		</ul>
	</div>
</template>

<script>
import {getStyle} from '../../../src/utils/dom.js'
/**
 * pc wap 事件
 * 左右箭头+圆点点击
 * 定时器
 * 数据传输
 * 图片 or 其他内容
 */
export default{
	name:'x-slide',
	inheritAttrs:false,
	props:{
		autoPlay:{
			type:Boolean,
			default:true
		},
		transitionTime:{
			type:String,
			default:'.3s'
		},
		intervalTime:{
			type:Number,
			default:3000
		},
		paginationShow:{
			type:Boolean,
			default:true
		},
		arrowShow:{
			type:Boolean,
			default:true
		}
	},
	data(){
		return {
			xArr:[], // 位置数组
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
			timer:null,
			// wap
			startX:0,
			disX:0,
			UlNowX:0,
			transiting:false, // UL是否正在transition中
			isStart:true // 判读是否正常拖拽
		}
	},
	methods:{
		create(){
			this.init()
			this.slideUlTransitionEnd()
			if(this.autoPlay){this.autoLoop()}
			// mobile event
			this.mobile()
		},
		init(){
			this.slide = this.$el
			this.slideWidth = this.slide.offsetWidth
			this.slideUl = this.$el.querySelector('.x-slide-imgpage')
			this.lis = this.slideUl.querySelectorAll('li')
			this.liLength = this.lis.length+2
			this.sourceLength = this.lis.length
			this.slideUl.insertBefore(this.lis[this.lis.length-1].cloneNode(true),this.lis[0])
			this.slideUl.appendChild(this.lis[0].cloneNode(true))
			this.ulWidth = (this.liLength)*this.slideWidth
			this.moveX = -this.slideWidth
			this.slideUl.style.transform = `translate(-${this.slideWidth}px,0)`
			for(let i=0;i<this.liLength;i++){
				this.xArr.push(-i*this.slideWidth)
			}
		},
		mobile(){ //移动端事件
			/**
			 * 动画执行时不能拖拽
			 */
			this.slide.addEventListener('touchstart',e=>{
				clearInterval(this.timer)
				if(!this.transiting){
					this.isStart = true
					this.slideUl.style.transition = '.0s'
					this.UlNowX = getStyle(this.slideUl,'transform')['translateX']
					this.startX = e.touches[0].clientX
				}
				e.preventDefault()
			})
			this.slide.addEventListener('touchmove',e=>{
				clearInterval(this.timer)
				if(!this.transiting && this.isStart){ // 动画时不能拖拽，并且是正常点击触发，因为有可能动画结束时手指仍在拖动
					this.disX =  parseInt((e.touches[0].clientX - this.startX)*.4)
					this.slideUl.style.transform = `translate(${(this.disX+this.UlNowX)}px,0)`
				}
				e.preventDefault()
			})
			this.slide.addEventListener('touchend',e=>{
				if(!this.transiting){
					this.transiting = true
					this.isStart = false
					if(Math.abs(this.disX) >= 30){ // 滑动幅度大则切换
						this.disX > 0 ? this.moveLeft() : this.moveRight()
					}else if(this.disX != 0){ // 小幅挪动回到原位	
						this.slideUl.style.transition = this.transitionTime
						this.slideUl.style.transform = `translate(${(this.moveX)}px,0)`
					}else if(this.disX == 0 && this.xArr.includes(this.moveX)){ // 点击
						this.transiting = false
						if(this.autoPlay){this.autoLoop()}
					}
					this.disX = 0
				}
				e.preventDefault()
			})
		},
		moveUL(index){
			clearInterval(this.timer)
			this.onOff = false
			this.slideUl.style.transition = this.transitionTime
			this.moveNum = index+1
			this.roundNum = index
			this.slideUl.style.transform = `translate(-${this.moveNum*this.slideWidth}px,0)`
		},
		moveLeft(){
			clearInterval(this.timer)
			if(this.onOff){
				this.onOff = false
				this.transiting = true
				this.slideUl.style.transition = this.transitionTime
				this.roundNum == 0 ? this.roundNum = this.sourceLength-1 : this.roundNum--
				this.moveX = -(--this.moveNum * this.slideWidth)
				this.slideUl.style.transform = `translate(${this.moveX}px,0)`
			}
		},
		moveRight(){
			clearInterval(this.timer)
			if(this.onOff){
				this.onOff = false
				this.transiting = true
				this.slideUl.style.transition = this.transitionTime
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
					this.transiting = false
					if(this.autoPlay){this.autoLoop()}
				}else if(this.moveNum == this.liLength-1){ // 到达第一张Loop位
					this.slideUl.style.transition = '.0s'
					this.moveNum = 1
					this.moveX = -this.slideWidth
					this.slideUl.style.transform = `translate(${this.moveX}px,0)`
					this.onOff = true
					this.transiting = false
					if(this.autoPlay){this.autoLoop()}
				}else{
					this.onOff = true
					this.transiting = false
					if(this.autoPlay){this.autoLoop()}
				}
			})
		},
		autoLoop(){
			clearInterval(this.timer)
			this.timer=setInterval(_=>{
				this.moveRight()
			},this.intervalTime)
		}
	}
}
</script>

<style lang="scss">
.x-slide{
	position: relative;
	overflow: hidden;
	.x-slide-imgpage{
		position: absolute;
		left:0;
		top:0;
		height:100%;
		&:after{
			content:'';
			display: block;
			height:0;
			visibility: hidden;
			clear:both;
		}
		&>li{
			float: left;
			height:100%;
			text-align: center;
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
		top:40%;
		.left-arrow,.rigth-arrow{
			position: absolute;
			top:0;
			width:30px;
			height:30px;
		}
		.left-arrow{
			left:0;
			background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzklEQVRYR+3W3Q3CMAwEYN8EdBRWYBPYgG5UJoGR2MAoUpDyUMA/l0ZC7XOq+2rFriGDHwzOlx3wXxVQ1QnA03OvaBVQ1aOI3EVkBrBYERRAEz7V4BOAhwWRBqyE3wCcLeHlTAqQDU8BGOFhACs8BGCGuwHscBegR7gZ0CvcCyiD5VD7ewFwsfb6t3PmOVCrQEeYAeUreiBcgB4IN4CNCAGYiDCAhUgBGIg04ANiu4XkPWSaFr1uvpI1iHFLaXQsU+5ANNz8M8oE/Hp3r8AL+VhsIRMtHZ8AAAAASUVORK5CYII=') no-repeat center center;
			background-size:100% 100%;
		}
		.rigth-arrow{
			right:0;
			background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzklEQVRYR+3W3Q3CMAwEYN8EdBRWYBPYgG5UJoGR2MAoUpDyUMA/l0ZC7XOq+2rFriGDHwzOlx3wXxVQ1QnA03OvaBVQ1aOI3EVkBrBYERRAEz7V4BOAhwWRBqyE3wCcLeHlTAqQDU8BGOFhACs8BGCGuwHscBegR7gZ0CvcCyiD5VD7ewFwsfb6t3PmOVCrQEeYAeUreiBcgB4IN4CNCAGYiDCAhUgBGIg04ANiu4XkPWSaFr1uvpI1iHFLaXQsU+5ANNz8M8oE/Hp3r8AL+VhsIRMtHZ8AAAAASUVORK5CYII=') no-repeat center center;
			background-size:100% 100%;
			transform:rotate(180deg);
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
