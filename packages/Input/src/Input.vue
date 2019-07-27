<template>
	<div class="x-input">
		<div v-if="$slots.aside" class="x-input-page">
			<div class="x-input-aside fl" :style="{width:asideWidth}">
				<slot name="aside"></slot>
			</div>
			<div :style="{marginLeft:asideWidth}">
				<input class="x-input-self" :type="type" :value="value" @input="$emit('input',$event.target.value)" :placeholder="placeholder" :disabled="disabled" @blur="$emit('blur',$event.target.value)">
			</div>
		</div>
		<input v-else class="x-input-self" :type="type" :value="value" @input="$emit('input',$event.target.value)" :placeholder="placeholder" :disabled="disabled" @blur="$emit('blur',$event.target.value)">
	</div>
</template>

<script>
export default{
	name:'x-input',
	model:{
		prop:'value',
		event:'input'
	},
	props:{
		'type':{
			type:String,
			default:'text'
		},
		'value':{
			type:[Number,String],
			default:''
		},
		'placeholder':{
			type:String,
			default:''
		},
		'disabled':{
			type:Boolean,
			default:false
		},
		'asideWidth':{
			type:String,
			default:'100px'
		}
	}
}
</script>

<style lang="scss">
.x-input{
	width:100%;
	box-sizing:border-box;
	.x-input-self{
		display: block;
		width:100%;
		font-size: 14px;
		line-height:34px;
		text-indent:1em;
		border:1px solid #e3e3e3;
		border-radius:4px;
		transition:.3s;
		&:focus{
			border-color:#409eff;
		}
	}
	.x-input-page{
		&:after{
			content:"";
			display:block;
			height:0;
			clear:both;
			visibility:hidden;
		}
	}
	.x-input-aside{
		padding-right: 10px;
		float: left;
		line-height:34px;
		text-align:right;
		box-sizing: border-box;
	}
}
</style>
