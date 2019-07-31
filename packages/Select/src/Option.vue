<template>
	<div class="x-option">{{label}}</div>
</template>

<script>
export default {
	name:'x-option',
	props:{
		label:{
			type:String,
			default:''
		},
		value:{
			type:[String,Number],
			default:''
		},
	}
}
</script>