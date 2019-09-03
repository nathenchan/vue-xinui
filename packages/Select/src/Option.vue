<template>
	<div class="x-option" @click.stop="choseOption">{{label}}</div>
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
	},
	methods:{
		choseOption(){
			this.$emit('chose',this.value)
		}
	}
}
</script>
