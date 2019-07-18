<!-- 拼图防刷组件 -->
<template>
	<div class="picture-puzzle" v-loading="loadingNum<2">
		<div class="picture">
			<img :src="verifyData.imgs.dragBg" class="dragbg" v-show="loadingNum>=2">
			<img :src="verifyData.imgs.dragImg" class="dragimg" v-show="dragImgShow" :style="{width:dragImgWidth+'px'}">
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
	 * 流程： 请求数据(图片) 滑动结束后简单判断用户所用时间(后端给的x值不能太小)
	 * 后端安全性： 碎片图正确位置随机性、碎片图和背景图扣块位置随机生成（后端随机生成这两张图返给前端），ip请求接口的防刷,
	 * finish 滑动拼图至正确位置的回调	
	 * error 错误回调
	 * 错误次数限制
	 * slideverifyData:{
			imgs:{
				dragImg:'',
					dragBg:''
			},
			dx:null
		}
 	 *	
	 */
	import {isWap} from '../../../src/utils/isWap.js'
	import arrowImg from '../../../src/images/arrow.png'
	import successImg from '../../../src/images/success_icon.png'
	import errorImg from '../../../src/images/error_icon.png'

	// 数据实例
	export default{
		name:'x-slide-verify',
		props:{
			maxError:{
				type:[Number,String],
				default:8
			},
			verifyData:{
				type: Object,
				default() {
					return {
						imgs:{
							dragImg:'',
	  						dragBg:''
						},
						dx:null,
						dragImgWidth:0,
						dragBgWidth:0
					}
				}
			},
			autoInit:{
				type:Boolean,
				default:true
			}
		},
		data(){
			return {
				elWidth:0, // 元素的显示宽 
				dragImgWidth:'',
				loadingNum:0,
				tipsText:'向右拖动滑块填充拼图',
				arrowImg,
				successImg,
				errorImg,
				dragImg:'',
				dragBg:'',
				dragImgShow:false,
				dragBlockShow:true,
				errorNum:0,
				moveX:0,
				dragVerify:null,
				pictureIndex:0,
				dragblockText:'&gt;&gt;', // &gt;&gt;
				error:false,
				success:false,
				timer:null
			}
		},
		methods:{
			init(){
				var dragVerify = this.$el.querySelector('.dragverify'),
					dragBlock = dragVerify.querySelector('.dragblock'),
					dragBg = this.$el.querySelector('.dragbg'),
					dragImg = this.$el.querySelector('.dragimg'),
					maxLeft = dragVerify.clientWidth - dragBlock.offsetWidth,
					tips = this.$el.querySelector('.picture-puzzle .tips'),
					moveX = 0,
					pointsX = 0,
					pageX = 0,
					useTime = 0,
					dx = 0 

				var imgLoad = ()=>{
					this.loadingNum++
					if(this.loadingNum>=2){
						setTimeout(_=>{
							this.elWidth = dragBg.offsetWidth
							dx = (this.elWidth/this.verifyData.dragBgWidth)*this.verifyData.dx // 正确位置需要等比例缩放
							this.dragImgWidth = (this.elWidth/this.verifyData.dragBgWidth)*this.verifyData.dragImgWidth // 碎片图尺寸等比例缩放
							this.dragImgShow = true
						},30)
					}
				}

				dragBg.onload = imgLoad
				dragImg.onload = imgLoad

				var downFunc = '',
					moveFunc = '',
					upFunc = ''

				if( isWap() ){

					downFunc = 'touchstart'
					moveFunc = 'touchmove'
					upFunc = 'touchend'

					// 阻止移动端滑动页面
					this.$el.addEventListener('touchmove',function(e){
						e.preventDefault()
					})
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
					useTime = new Date().getTime()
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
					useTime = new Date().getTime() - useTime
					document.removeEventListener(moveFunc,moveScrollX)
					document.removeEventListener(upFunc,dragFinish)
					event.preventDefault()
					this.tipsText = ''
					// 提示信息
					if(moveX < 80 ){
						tips.style.display = 'block'
					}
					// 拼图完成 接近即可
					if( Math.abs(moveX - dx) < 6 && useTime > 300 ){
						this.success = true
						this.timer = setTimeout(_=>{
							useTime = 0
							resetStatus()
							this.$emit('finish')
						},500)
					}else{
						this.errorNum++
						this.dragblockText = 'X'
						this.error = true
						this.timer = setTimeout(_=>{
							useTime = 0
							resetStatus()
							if(this.errorNum >= this.maxError){ // 错误次数过多
								this.tipsText = '错误次数过多'
								this.error = true
								this.dragImgShow = false
								this.dragBlockShow = false
							}
							this.$emit('error',this.errorNum)
						},300)
					}
				}
			}
		},
		mounted(){
			this.init()
		},
		created(){
			this.$emit('preload')
		}
	}
</script>

<style lang="scss">
// 滑动验证
.picture-puzzle{
  width:300px;
  .error{
    width:30px;
  }
  .picture{
    position: relative;
    width:100%;
    min-height:110px;
    overflow: hidden;
  }
  .dragbg{
    display: block;
    width:100%;
    height:100%;
  }
  .dragimg{
    position: absolute;
    left:0;
    top:0;
    cursor: pointer;
  }
  .dragverify{
    position: relative;
    background:#bfbfbf;
    width:100%;
    height: 40px;
    line-height: 40px;
    p{
      font-size: 15px;
      color:#666;
      text-align: center;
      user-select: none;
      z-index: 9;
    }
    p.errortips{
      color:#d91e18;
    }
  }
  .dragblock{
    position: absolute;
    left:0px;
    top:0;
    width:40px;
    height:40px;
    line-height: 40px;
    background:#fff;
    cursor: pointer;
    text-align:center;
    box-sizing: border-box;
    user-select: none;
    z-index: 20;
    border:1px solid #e3e3e3;
    img{
      margin-top: 10px;
      width:22px;
    }
  }
}	
</style>