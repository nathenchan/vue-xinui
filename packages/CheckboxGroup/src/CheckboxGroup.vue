<template>
	<div class="x-checkbox-group">
		<div class="x-checkbox-page">
			<slot></slot>
		</div>
		<p class="error-text" v-show="errorShow">{{errorText}}</p>
	</div>
</template>

<script>
export default{
	name:'x-checkbox-group',
	inheritAttrs:false,
	provide(){
		return {
			group:this
		}
	},
	model:{
		prop:'value',
		event:'change'
	},
	props:{
		result:{
			type:Boolean,
			default:false
		},
		errorText:{
			type:String,
			default:null
		},
		min:{
			type:[String,Number],
			default:null
		},
		max:{
			type:[String,Number],
			default:null
		},
	},
	data(){
		return {
			errorShow:false,
			checkList:[]
		}
	},
	methods:{
		checkVerify(){ // 校验，显示报错
			if(this.min != null && this.min > this.checkList.length){
				this.errorShow = true
				this.$emit('update:result',false)
			}else{
				this.errorShow = false
				this.$emit('update:result',true)
			}
		},
		listChange(checkboxVal){ // 由子组件调用
			if(this.checkList.indexOf(checkboxVal)<0){
				if( this.max == null || this.checkList.length < this.max ){
					this.checkList.push(checkboxVal)
				}
			}else{
				this.checkList.splice(this.checkList.indexOf(checkboxVal),1)
			}
			
			this.checkVerify()

			this.$emit('change',this.checkList)
		}
	},
	created(){
		// 初始化列表
		this.$attrs.value.forEach(el=> this.checkList.push(el) )
	}
}
</script>

<style lang="scss">
.x-form-item .x-checkbox-group{
	padding-top:8px;
}
.x-checkbox-group{
	.error-text{
		margin-top:6px;
		color:#d91e18;
	}
}
</style>
