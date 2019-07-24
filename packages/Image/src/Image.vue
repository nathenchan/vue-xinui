<template>
	<div class="x-image">
		<img :data-src="src" :alt="alt" :title="title" ref="img">
	</div>
</template>

<script>
export default {
	name:'x-image',
	props:{
		src:{
			type:String,
			default:undefined
		},
		alt:{
			type:String,
			default:undefined
		},
		title:{
			type:String,
			default:undefined
		}
	},
	methods:{

	},
	mounted(){
		// 是否在浏览器视口范围内
		console.log(this.$refs.img)
	}
}
</script>
