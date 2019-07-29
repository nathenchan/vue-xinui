<template>
	<div :class="[{disabled},'x-radio']" @click="change">
		<div :class="[{'active':value == radioModel},'x-radio-round']">
			<div class="x-radio-insideround"></div>
		</div>
		<div class="x-radio-text">
			<slot name="text"></slot>
		</div>
	</div>
</template>

<script>
export default{
	name:'x-radio',
	props:{
		value:{
			type:String,
			default:null
		},
		radioModel:{
			type:String,
			default:null
		},
		disabled:{
			type:Boolean,
			default:null
		}
	},
	methods:{
		change(){
			if(!this.disabled){
				this.$emit('update:radio-model',this.value)
			}
		}
	}
}
</script>

<style lang="scss">
.x-radio{
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
	&.disabled{
		cursor: not-allowed !important;
		.x-radio-text{
			color:#999;
		}
		.x-radio-round.active{
			background: #93b9e0;
		}
	}
	&:after{
		content:'';
		display: block;
		clear:both;
		height:0;
		visibility: hidden;
	}
	.x-radio-round{
		float: left;
		margin:3px 10px 0 0;
		width:14px;
		height:14px;
		border-radius: 50%;
		overflow: hidden;
		border:1px solid #c7c7c7;
		transition:.3s;
		&.active{
			background:#409eff;
			border:1px solid #fff;
		}
	}
	.x-radio-insideround{
		margin:4px auto;
		width:6px;
		height:6px;
		border-radius: 50%;
		background:#fff;
	}
	.x-radio-text{
		float: left;
	}
}
</style>
