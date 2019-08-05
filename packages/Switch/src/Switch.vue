<template>
	<div :class="[{'active':$attrs.value},'x-switch']" >
		<div class="x-switch-page" @click="changVal">
			<div class="x-switch-round"></div>
		</div>
	</div>
</template>

<script>
export default{
	name:'x-switch',
	inheritattrs:false,
	model:{
		prop:'value',
		event:'change'
	},
	props:{
		openValue:{
			type:[Number,String,Boolean],
			default:1
		},
		closeValue:{
			type:[Number,String,Boolean],
			default:0
		},
	},
	methods:{
		changVal(){
			this.$attrs.value ? this.$emit('change',this.closeValue) : this.$emit('change',this.openValue)
		}
	}
}
</script>

<style lang="scss">
.x-switch{
	.x-switch-page{
		position: relative;
		width:46px;
		height:20px;
		background:#999;
		border-radius:10px;
		cursor: pointer;
		transition:.2s;
	}
	&.active{
		.x-switch-page{
			background:#1890ff;
		}
		.x-switch-round{
			left:27px;
		}
	}
	.x-switch-round{
		position: absolute;
		left:1px;
		top:1px;
		width:18px;
		height:18px;
		background:#fff;
		border-radius: 9px;
		transition:.2s;
	}
}
.x-form-control{
	.x-switch{
		padding-top: 5px;
	}
}
</style>
