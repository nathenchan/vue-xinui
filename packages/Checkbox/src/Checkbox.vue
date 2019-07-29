<template>
	<div class="x-checkbox" @click="change">
		<div class="x-checkbox-btn">
			<Right v-show="checkboxModel"/>
		</div>
		<div class="x-checkbox-text" :class="[{'active':checkboxModel},'x-checkbox-text']">
			<slot name="text"/>
		</div>
		<button @click="$emit('update',[0])">test</button>
	</div>
</template>

<script>
import Right from './Right.vue'
export default{
	name:'x-checkbox',
	components:{Right},
	props:{
		checkboxModel:{
			type:Boolean,
			default:null
		},
		disabled:{
			type:Boolean,
			default:null
		}
	},
	data(){
		return {

		}
	},
	methods:{
		change(){
			if(!this.disabled){ this.$emit('update:checkbox-model',!this.checkboxModel) }
		}
	}
}
</script>

<style lang="scss">
.x-checkbox{
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
	user-select:none;
	&:after{
		content:'';
		display: block;
		clear:both;
		height:0;
		visibility: hidden;
	}
	.x-checkbox-btn{
		margin-right: 10px;
		float: left;
		width:16px;
		height:16px;
		border:1px solid #e3e3e3;
		border-radius:4px;
		overflow: hidden;
	}
	.x-checkbox-text{
		float: left;
		line-height: 18px;
		&.active{
			color:#409eff;
		}
	}
}
</style>
