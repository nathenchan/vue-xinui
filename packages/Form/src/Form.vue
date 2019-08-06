<template>
	<div class="x-form">
		<slot/>
	</div>
</template>

<script>
export default{
	name:'x-form',
	inheritAttrs:false,
	provide(){
		return {
			xForm:this
		}
	},
	props:{
		width:{
			type:String,
			default:'100px'
		}
	},
	methods:{
		veifyAll(){ // 调用所有组件的验证事件并根据结果显示报错信息
			this.$children.forEach(el=>{
				if(el.$children.length  == 2){
					let ele = el.$children[1].$children[0]
					if(ele.checkVerify){ ele.checkVerify() }
				}
			})
		}
	}
}
</script>
