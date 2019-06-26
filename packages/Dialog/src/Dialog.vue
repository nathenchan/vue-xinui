<template>
	<transition name="fadefast">
		<div class="x-dialog-mask" v-show="visible" @click="modelClickClose">
			<div class="x-dialog" :style="dialogStyle" @click.stop v-if="render">
				<img v-if="showClose" class="x-closebtn" src="../../../src/images/close.png" @click="closeDialog">
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