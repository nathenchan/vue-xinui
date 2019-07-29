<template>
	<div class="x-checkbox-group">
		<slot></slot>
	</div>
</template>

<script>
export default{
	name:'x-checkbox-group',
	model: {
	    prop: 'value', // 指向父组件 v-model绑定的值
	    event: 'update' // 在本组件内触发可以更新value
	},
	props: {
		checked: Boolean
	},
	data(){
		return {
			dimensions:'a'
		}
	},
	provide: {
		foo: 'bar2'
	},
	methods:{
		fn(){
			this.$emit('update',[1])
		}
	}
}
</script>

<style lang="scss">

</style>
