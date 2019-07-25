<template>
	<div class="x-image" :style="{height:height+'px'}" >
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
		},
		height:{
			type:Number,
			default:undefined
		}
	},
	mounted(){
		
		let scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
			elTop = this.$refs.img.getBoundingClientRect().top
		
		if( elTop < window.innerHeight + scrollTop ){
			this.$refs.img.setAttribute('src',this.src)
		}else{
			window.unloadImgs.push({img:this.$refs.img,elTop})
		}

	}
}
</script>

