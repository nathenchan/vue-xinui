<template>
	<div class="x-checkbox-group">
		<div class="x-checkbox-page">
			<slot></slot>
		</div>
		<p class="error-text" v-show="errorShow">至少选择{{min}}个</p>
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
			errorShow:false
		}
	},
	methods:{
		listChange(checkboxVal){ // 由子组件调用
			if(this.$attrs.value.indexOf(checkboxVal)<0){
				if( this.max == null || this.$attrs.value.length < this.max ){
					this.$attrs.value.push(checkboxVal)
				}
			}else{
				this.$attrs.value.splice(this.$attrs.value.indexOf(checkboxVal),1)
			}
			
			if(this.min != null && this.min > this.$attrs.value.length){
				this.errorShow = true
			}else{
				this.errorShow = false
			}

			this.$emit('change',this.$attrs.value)
		}
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
