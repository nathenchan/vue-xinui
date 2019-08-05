<template>
	<div class="x-form">
		<slot/>
	</div>
</template>

<script>
export default{
	name:'x-form',
	inheritAttrs:false,
	provide(){
		return {
			xForm:this
		}
	},
	props:{
		width:{
			type:String,
			default:'100px'
		}
	}
}
</script>

<style lang="scss">

</style>
