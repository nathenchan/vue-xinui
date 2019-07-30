<template>
	<div class="x-checkbox-group">
		<slot></slot>
	</div>
</template>

<script>
export default{
	name:'x-checkbox-group',
	model:{
		prop:'value',
		event:'change'
	},
	props:{
		max:{
			type:[String,Number],
			default:null
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
			this.$emit('change',this.$attrs.value)
		}
	}
}
</script>

<style lang="scss">

</style>
