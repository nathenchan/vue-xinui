<template>
	<div class="x-form-label fl" :style="{width:xForm.$attrs['label-width']}">
		<i class="requried-icon" v-if="this.xItem.$attrs.required != undefined">*</i>
		<slot/>
	</div>
</template>

<script>
export default{
	name:'x-form-label',
	inheritAttrs:false,
	inject: ['xForm','xItem'],
}
</script>

<style lang="scss">
.x-form-label{
	padding-right: 14px;
	text-align: right;
	line-height: 32px;
	box-sizing:border-box;
}
.x-form-label .requried-icon{
	color:red;
}
</style>