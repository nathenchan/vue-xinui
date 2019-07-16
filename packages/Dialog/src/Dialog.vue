<template>
	<transition name="fadefast">
		<div class="x-dialog-mask" v-show="visible" @click="modelClickClose">
			<div class="x-dialog" :style="dialogStyle" @click.stop v-if="render">
				<svg v-if="showClose" class="x-closebtn" width="50" height="50" viewBox="0 0 1024 1024"  @click="closeDialog">
					<path d="M597.795527 511.488347 813.564755 295.718095c23.833825-23.833825 23.833825-62.47489 0.001023-86.307691-23.832801-23.832801-62.47489-23.833825-86.307691 0L511.487835 425.180656 295.717583 209.410404c-23.833825-23.833825-62.475913-23.833825-86.307691 0-23.832801 23.832801-23.833825 62.47489 0 86.308715l215.769228 215.769228L209.410915 727.258599c-23.833825 23.833825-23.833825 62.47489 0 86.307691 23.832801 23.833825 62.473867 23.833825 86.307691 0l215.768205-215.768205 215.769228 215.769228c23.834848 23.833825 62.475913 23.832801 86.308715 0 23.833825-23.833825 23.833825-62.47489 0-86.307691L597.795527 511.488347z" p-id="1109" fill="#333"></path>
				</svg>
				<h3 class="x-dialog-title" v-if="title">{{title}}</h3>
				<slot></slot>
			</div>
		</div>
	</transition>
</template>

<script>
	/**
	 * Attributes :dialogStyle => {}
	 * visible 显示隐藏
	 * dialogStyle
	 * show-close 显示关闭按钮
	 * mask-click-close // 点击遮罩关闭
	 * 暂无回调
	 * 需要测试移动端微信光标input问题
	 */
	export default{
		name:'x-dialog',
		props:{
			"dialogStyle":Object,
			"show-close":{  // 显示关闭按钮
				type:Boolean,
				default: true
			},
			"visible":Boolean,
			"mask-click-close": {  // 点击遮罩关闭弹窗
				type:Boolean,
				default: true
			},
			"title": String
		},
		data(){
			return {
				render:false
			}
		},
		methods:{
			closeDialog(){
				this.$emit('update:visible',false)
			},
			modelClickClose(){
				if(this.maskClickClose){
					this.$emit('update:visible',false)
				}
			}
		},
		created(){
			if(this.visible){ this.render = true }
		},
		watch:{
			visible(){
				if(this.visible){ this.render = true }
			}
		}
	}
</script>

<style lang="scss">
/* Dialog */
.x-dialog-mask{
  position: fixed;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.5);
  z-index: 99999;
  .x-closebtn{
    position: absolute;
    right:10px;
    top:0px;
    width:30px;
    cursor: pointer;
  }
  .x-dialog{
    position: absolute;
    left:0;top:0;right:0;bottom:0;
    padding:22px 22px 22px;
    width:300px;
    height:300px;
    margin:auto auto;
    background: #fff;
    border-radius:6px;
    box-sizing: border-box;
  }
  .x-dialog-title{
    margin:0px 0 20px;
    text-align: center;
    font-size: 18px;
  }
  .x-one-page{
    margin:30px auto;
    width:200px;
    text-align: center;
  }
  .x-twobtn-page{
    margin:30px auto;
    width:200px;
    text-align: center;
    .x-button:first-of-type{
      float: left;
    }
    .x-button:last-of-type{
      float: right;
    }
  }
}
</style>