<template>
	<div class="x-textarea">
		<textarea v-model="val"  :maxlength="max" :minlength="min" @input="inputFn" @blur="$emit('blur',$event)"></textarea>
		<p class="error-text" v-show="errorShow">请填写内容</p>
	</div>
</template>

<script>
export default{
	name:'x-textarea',
	inheritAttrs:false,
	model:{
		prop:'value',
		event:'change'
	},
	data(){
		return {
			val:'',
			errorShow:false
		}
	},
	props:{
		max:{
			type:String,
			default:null
		},
		min:{
			type:String,
			default:null
		}
	},
	methods:{
		inputFn(){
			this.$emit('change',this.val)
		}
	}
}
</script>

<style lang="scss">
.x-textarea{
	textarea{
		padding:0 10px;
		line-height: 28px;
		border:#e3e3e3 solid 1px ;
		border-radius:4px;
		resize: vertical;
	}
}
</style>
