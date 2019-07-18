<template>
	<div class="x-count-down">
		<p v-if="render">
			{{downCount.min}}分{{downCount.sec}}秒
		</p>
	</div>
</template>

<script>
export default{
	name:'x-count-down',
	data(){
		return {
			render:false,
			downCount:{
				min:null,
				sec:null
			},
			timer:null
		}
	},
	methods:{
		init(countNum){ //倒计时方法
			this.render = true
			this.downCount.min = parseInt( (countNum )/60 )
			this.downCount.sec = parseInt( (countNum) - (parseInt( (countNum )/60 )) * 60 )
			countNum--
			this.timer = setInterval(_=>{
				// 分
				let min = parseInt( (countNum )/60 )
				this.downCount.min = min
				// 秒
				this.downCount.sec = parseInt( (countNum) - min * 60 )
				countNum--
				// 倒计时已结束
				if( countNum < 0 ){
					clearInterval(this.timer)
					this.$emit('finish')
				}
			},1000)
		}
	}
}
</script>