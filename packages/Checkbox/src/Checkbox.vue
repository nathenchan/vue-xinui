<template>
	<div class="x-checkbox" @click="myChange">
		<div class="x-checkbox-btn">
			<Right v-show="checked || itemCheck"/>
		</div>
		<div class="x-checkbox-text" :class="[{'active':checked || itemCheck},'x-checkbox-text']">
			<slot name="text"/>
		</div>
	</div>
</template>

<script>
import Right from './Right.vue'
export default{
	name:'x-checkbox',
	components:{Right},
	inject:['group'],
	model:{
		prop:'value',
		event:'change'
	},
	props:{
		disabled:{
			type:Boolean,
			default:null
		},
		val:{
			type:[String,Number],
			default:null
		},
		list:{
			type:Array,
			default(){
				return null
			}
		}
	},
	data(){
		return { // 使用group组时的checked  true/false
			itemCheck:null
		}
	},
	computed:{
		checked(){ // 单项使用时， true / false
			return this.$attrs.value
		}
	},
	methods:{
		groupItemSetCheck(){
			this.group.$attrs.value.includes(this.val) ?  this.itemCheck = true :  this.itemCheck = false
		},
		myChange(){
			this.group.listChange(this.val)
			this.$nextTick(function(){
				this.groupItemSetCheck()
			})
		}
	},
	created(){
		// 初始化勾选状态
		this.groupItemSetCheck()
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
		width:20px;
		height:20px;
		border:1px solid #e3e3e3;
		border-radius:4px;
		overflow: hidden;
	}
	.x-checkbox-text{
		float: left;
		line-height: 22px;
		&.active{
			color:#409eff;
		}
	}
}
</style>
