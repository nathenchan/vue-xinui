<!-- 拼图防刷组件 -->
<template>
	<div class="picture-puzzle" v-loading="loadingNum<2">
		<div class="picture">
			<img :src="dragBg" class="dragbg">
			<img :src="dragImg" class="dragimg" v-show="dragImgShow">
		</div>
		<div class="dragverify">
			<div class="dragblock" :class="error ? 'error' : '' "  v-show="dragBlockShow">
				<img :src="arrowImg" v-show="!error && !success">
				<img v-show="error" :src="errorImg" >
				<img v-show="success" :src="successImg" >
			</div>
			<p class="tips" :class="error && 'errortips'">{{tipsText}}</p>
		</div>
	</div>
</template>

<script>
	/**
	 * finish 滑动拼图至正确位置的回调
	 * error 错误回调
	 * 错误次数限制 
	 */
	import {isWap} from '../../../src/utils/isWap.js'
	import arrowImg from '../../../src/images/arrow.png'
	import successImg from '../../../src/images/success_icon.png'
	import errorImg from '../../../src/images/error_icon.png'
	
	import img1 from '../../../src/images/a1.png'
	import img1bg from '../../../src/images/a1_big.jpg'
	import img2 from '../../../src/images/a2.png'
	import img2bg from '../../../src/images/a2_big.jpg'
	import img3 from '../../../src/images/a3.png'
	import img3bg from '../../../src/images/a3_big.jpg'
	import img4 from '../../../src/images/a4.png'
	import img4bg from '../../../src/images/a4_big.jpg'

	export default{
		name:'x-slide-verify',
		props:{
			maxerror:{
				type:[Number,String],
				default:15
			}
		},
		data(){
			return {
				loadingNum:0,
				tipsText:'向右拖动滑块填充拼图',
				imgs:[
					{img:img1, bg:img1bg},
					{img:img2, bg:img2bg},
					{img:img3, bg:img3bg},
					{img:img4, bg:img4bg}
				],
				arrowImg,
				successImg,
				errorImg,
				dragImg:'',
				dragBg:'',
				dragImgShow:true,
				dragBlockShow:true,
				errorNum:0,
				moveX:0,
				dragVerify:null,
				pictureIndex:0,
				dragblockText:'&gt;&gt;', // &gt;&gt;
				error:false,
				success:false,
				isProd:false,
				imgPosition:[
					{
						img:'a1.png',
						bg:'a1_big.jpg',
						rightX:202, // 正确位置x
					},
					{
						img:'a2.png',
						bg:'a2_big.jpg',
						rightX:173, // 正确位置x
					},
					{
						img:'a3.png',
						bg:'a3_big.jpg',
						rightX:131, // 正确位置x
					},
					{
						img:'a4.png',
						bg:'a4_big.jpg',
						rightX:194, // 正确位置x 按设计图(750宽度的)
					}
				],
				timer:null
			}
		},
		mounted(){
			var dragVerify = this.$el.querySelector('.dragverify'),
				dragBlock = dragVerify.querySelector('.dragblock'),
				dragBg = this.$el.querySelector('.dragbg'),
				dragImg = this.$el.querySelector('.dragimg'),
				maxLeft   = dragVerify.clientWidth - dragBlock.offsetWidth,
				tips = this.$el.querySelector('.picture-puzzle .tips'),
				moveX    = 0,
				pointsX  = 0,
				rightX = this.imgPosition[this.pictureIndex]['rightX'],
				pageX = 0
			
			dragBg.onload = ()=>{
				this.loadingNum++
			}

			dragImg.onload = ()=>{
				this.loadingNum++
			}

			var downFunc = '',
				moveFunc = '',
				upFunc = ''

			if( isWap() ){

				downFunc = 'touchstart'
				moveFunc = 'touchmove'
				upFunc = 'touchend'

			}else{
				
				downFunc = 'mousedown'
				moveFunc = 'mousemove'
				upFunc = 'mouseup'

			}

			dragBlock.addEventListener(downFunc,(event)=>{
				clearTimeout(this.timer)
				pageX = isWap() ? event.changedTouches[0].pageX : event.pageX
				pointsX  = pageX - dragBlock.offsetLeft - dragVerify.offsetLeft
				tips.style.display = 'none'
				document.addEventListener(moveFunc,moveScrollX,{ passive: false })
				document.addEventListener(upFunc,dragFinish)
			})

			// 小拼图滑动
			dragImg.addEventListener(downFunc,(event)=>{
				clearTimeout(this.timer)
				pageX = isWap() ? event.changedTouches[0].pageX : event.pageX
				pointsX  = pageX - dragBlock.offsetLeft - dragVerify.offsetLeft
				tips.style.display = 'none'
				document.addEventListener(moveFunc,moveScrollX,{ passive: false })
				document.addEventListener(upFunc,dragFinish)
			})

			var moveScrollX =  (event) => {
				pageX = isWap() ? event.touches[0].pageX : event.pageX
				moveX = pageX - dragVerify.offsetLeft - pointsX
				// 拖动范围最大值于最小值的判断
				if( moveX <= 0 ){ moveX = 0 }
				if( moveX >= maxLeft ){ moveX = maxLeft }
				dragBlock.style.left = moveX+'px'
				if( dragImg.offsetWidth + moveX > dragBg.offsetWidth ){
					dragImg.style.left = ( dragBg.offsetWidth - dragImg.offsetWidth )+'px'
				}else{
					dragImg.style.left = moveX+'px'
				}
				this.moveX = moveX
				event.preventDefault()
			}

			var resetStatus = ()=>{
				dragBlock.style.left = 0+'px' 
				dragImg.style.left = 0+'px'
				this.dragblockText = '&gt;&gt;'
				this.error = false
				this.success = false
				tips.style.display = 'block'
			}
			
			var dragFinish = event=>{
				document.removeEventListener(moveFunc,moveScrollX)
				document.removeEventListener(upFunc,dragFinish)
				event.preventDefault()
				this.tipsText = ''
				// 提示信息
				if(moveX < 80 ){
					tips.style.display = 'block'
				}
				// 拼图完成 接近即可
				if( Math.abs(moveX - rightX) < 8 ){
					this.success = true
					this.timer = setTimeout(_=>{
						resetStatus()
					},300)
					this.$emit('finish')
				}else{
					this.errorNum++
					this.dragblockText = 'X'
					this.error = true
					this.timer = setTimeout(_=>{ 
						resetStatus()
						if(this.errorNum >= this.maxerror){ // 错误次数过多
							this.tipsText = '错误次数过多'
							this.error = true
							this.dragImgShow = false
							this.dragBlockShow = false
						}
						this.$emit('error',this.errorNum)
					},300)
					this.$emit('error',this.errorNum)
				}
			}

		},
		created(){
			this.pictureIndex = Math.round(Math.random() * (this.imgs.length-1) )
			this.dragImg = this.imgs[this.pictureIndex].img
			this.dragBg = this.imgs[this.pictureIndex].bg
		}
	}
</script>
