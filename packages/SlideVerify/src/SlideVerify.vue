<!-- 拼图防刷组件 -->
<template>
	<div class="picture-puzzle" v-loading="loadingNum<2">
		<div class="picture">
			<img :src="verifyData.imgs.dragBg" class="dragbg" v-show="loadingNum>=2">
			<img :src="verifyData.imgs.dragImg" class="dragimg" v-show="dragImgShow" :style="{width:dragImgWidth+'px'}">
		</div>
		<div class="dragverify">
			<div class="dragblock" :class="error ? 'error' : '' "  v-show="dragBlockShow">
				<svg v-show="!error && !success" class="icon-arrow" viewBox="0 0 1264 1024"  width="22" ><path d="M1250.057513 473.992162L794.480863 15.313483a50.054101 50.054101 0 0 0-72.069473 0l-72.00924 73.394612a52.22251 52.22251 0 0 0 0 73.213911l246.716726 247.680464H52.674262C23.551328 409.60247 0 432.491228 0 460.801009v102.397079c0 28.309781 23.551328 51.198539 52.704379 51.198539h841.613636l-246.837193 247.740697a52.342977 52.342977 0 0 0 0 73.304261l72.039356 73.424729c19.78673 20.178248 52.102043 20.178248 72.069474 0l458.467861-461.47954a52.824846 52.824846 0 0 0 0-73.394612" p-id="1980" fill="#1296db"></path></svg>
				<svg class="icon-close" v-show="error" width="28" viewBox="0 0 1024 1024"  >
					<path d="M597.795527 511.488347 813.564755 295.718095c23.833825-23.833825 23.833825-62.47489 0.001023-86.307691-23.832801-23.832801-62.47489-23.833825-86.307691 0L511.487835 425.180656 295.717583 209.410404c-23.833825-23.833825-62.475913-23.833825-86.307691 0-23.832801 23.832801-23.833825 62.47489 0 86.308715l215.769228 215.769228L209.410915 727.258599c-23.833825 23.833825-23.833825 62.47489 0 86.307691 23.832801 23.833825 62.473867 23.833825 86.307691 0l215.768205-215.768205 215.769228 215.769228c23.834848 23.833825 62.475913 23.832801 86.308715 0 23.833825-23.833825 23.833825-62.47489 0-86.307691L597.795527 511.488347z" fill="#d91e18"></path>
				</svg>
				<svg v-show="success" class="icon-success" viewBox="0 0 1336 1024" width="28" height="32"><path d="M49.588224 883.816448M1139.531776 883.816448M86.939648 862.977024M538.459136 960.381952c109.876224-153.544704 223.55968-289.842176 308.03968-385.787904 49.87392-56.639488 96.715776-108.155904 141.549568-154.500096 40.576-41.945088 80.805888-80.405504 119.478272-116.59264 65.92-61.693952 142.984192-130.034688 191.446016-159.30368l-61.891584-82.050048c-89.732096 56.139776-176.10752 116.103168-242.799616 162.18112-38.863872 26.855424-74.928128 52.667392-108.915712 77.252608-33.668096 24.356864-68.429824 51.106816-105.081856 79.166464-63.633408 48.712704-145.388544 114.194432-224.555008 181.860352L357.07904 374.989824 123.885568 558.770176 538.459136 960.381952zM1335.92064 862.977024" fill="#1afa29"></path></svg>
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
				dragImgShow:false,
				dragBlockShow:true,
				errorNum:0,
				moveX:0,
				pictureIndex:0,
				dragblockText:'&gt;&gt;', // &gt;&gt;
				error:false,
				success:false,
				timer:null,
				dragImg:null,
				dragVerify:null,
				dragBlock:null,
				dragBg:null
			}
		},
		methods:{
			init(){
				this.dragVerify = this.$el.querySelector('.dragverify')
				this.dragBlock = this.dragVerify.querySelector('.dragblock')
				this.dragImg = this.$el.querySelector('.dragimg')
				this.dragBg = this.$el.querySelector('.dragbg')
				this.tips = this.$el.querySelector('.picture-puzzle .tips')
				
				var maxLeft = this.dragVerify.clientWidth - this.dragBlock.offsetWidth,
					moveX = 0,
					pointsX = 0,
					pageX = 0,
					useTime = 0,
					dx = 0 

				var imgLoad = ()=>{
					this.loadingNum++
					if(this.loadingNum>=2){
						setTimeout(_=>{
							this.elWidth = this.dragBg.offsetWidth
							dx = (this.elWidth/this.verifyData.dragBgWidth)*this.verifyData.dx // 正确位置需要等比例缩放
							this.dragImgWidth = (this.elWidth/this.verifyData.dragBgWidth)*this.verifyData.dragImgWidth // 碎片图尺寸等比例缩放
							this.dragImgShow = true
						},30)
					}
				}

				this.dragBg.onload = imgLoad
				this.dragImg.onload = imgLoad

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

				this.dragBlock.addEventListener(downFunc,(event)=>{
					clearTimeout(this.timer)
					pageX = isWap() ? event.changedTouches[0].pageX : event.pageX
					pointsX  = pageX - this.dragBlock.offsetLeft - this.dragVerify.offsetLeft
					this.tips.style.display = 'none'
					useTime = new Date().getTime()
					document.addEventListener(moveFunc,moveScrollX,{ passive: false })
					document.addEventListener(upFunc,dragFinish)
				})

				// 小拼图滑动
				this.dragImg.addEventListener(downFunc,(event)=>{
					clearTimeout(this.timer)
					pageX = isWap() ? event.changedTouches[0].pageX : event.pageX
					pointsX  = pageX - this.dragBlock.offsetLeft - this.dragVerify.offsetLeft
					this.tips.style.display = 'none'
					document.addEventListener(moveFunc,moveScrollX,{ passive: false })
					document.addEventListener(upFunc,dragFinish)
				})

				var moveScrollX =  (event) => {
					pageX = isWap() ? event.touches[0].pageX : event.pageX
					moveX = pageX - this.dragVerify.offsetLeft - pointsX
					// 拖动范围最大值于最小值的判断
					if( moveX <= 0 ){ moveX = 0 }
					if( moveX >= maxLeft ){ moveX = maxLeft }
					this.dragBlock.style.left = moveX+'px'
					if( this.dragImg.offsetWidth + moveX > this.dragBg.offsetWidth ){
						this.dragImg.style.left = ( this.dragBg.offsetWidth - this.dragImg.offsetWidth )+'px'
					}else{
						this.dragImg.style.left = moveX+'px'
					}
					this.moveX = moveX
					event.preventDefault()
				}
				
				var dragFinish = event=>{
					useTime = new Date().getTime() - useTime
					document.removeEventListener(moveFunc,moveScrollX)
					document.removeEventListener(upFunc,dragFinish)
					event.preventDefault()
					this.tipsText = ''
					// 提示信息
					if(moveX < 80 ){
						this.tips.style.display = 'block'
					}
					// 拼图完成 接近即可
					if( Math.abs(moveX - dx) < 6 && useTime > 300 ){
						this.success = true
						this.timer = setTimeout(_=>{
							useTime = 0
							this.reset()
							this.$emit('finish')
						},500)
					}else{
						this.errorNum++
						this.dragblockText = 'X'
						this.error = true
						this.timer = setTimeout(_=>{
							useTime = 0
							this.reset()
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
			},
			reset(){ // 手动重置拼图和块位置
				this.dragBlock.style.left = 0+'px' 
				this.dragImg.style.left = 0+'px'
				this.dragblockText = '&gt;&gt;'
				this.error = false
				this.success = false
				this.tips.style.display = 'block'
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
  }
  .icon-arrow{
  	margin-top: 10px;
  }
  .icon-close{
  	margin-top: 6px;
  }
  .icon-success{
  	margin-top: 4px;
  }
}	
</style>