<template>
	<div class="x-form-item clear">
		<slot/>
	</div>
</template>

<script>
export default{
	name:'x-form-item',
	provide(){
		return {
			xItem:this
		}
	},
	inject: ['xForm']
}
</script>

<style lang="scss">
.x-form-item{
	margin-bottom: 20px;
}
</style>