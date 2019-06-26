<template>
	<button class="x-button" :class="disabled && 'disabled'" :style="btnStyle" @click="handleClick" :disabled="btnDisabled">
		<slot></slot>
	</button>
</template>

<script>
/**
 * 单个按钮
 *  btnStyle {} css驼峰写法 
 *  v-bind 当值为undefined时，则不绑定，用于处理像原生disabled即使赋值为空也会禁用的问题
 */
export default{
	name:'x-button',
	props:[ 'btnStyle','disabled' ],
	methods:{
		handleClick(e){
			this.$emit('click',e)
		}
	},
	computed:{
		btnDisabled(){
			return this.disabled  || undefined
		}
	}
}
</script>