<template>
	<div class="x-textarea">
		<textarea v-model="val" :maxlength="max" :minlength="min" @input="inputFn" @blur="blurFn"></textarea>
		<p class="error-text" v-show="errorShow">{{errorText}}</p>
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
		errorText:{
			type:String,
			default:''
		},
		required:{
			type:String,
			default:undefined
		},
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
		checkVerify(){
			if(this.required != undefined){
				if(this.val.length){
					this.errorShow = false 
					this.$emit('update:result',true)
				}else{
					this.errorShow = true
					this.$emit('update:result',false)
				}
			}
		},
		inputFn(){
			this.$emit('change',this.val)
		},
		blurFn(e){
			this.checkVerify()
			this.$emit('blur',e)
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
