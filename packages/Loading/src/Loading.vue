<template>
	<transition name="fade">
		<div class="x-loading-mask" v-show="visible">
			<div class="sk-fading-circle" v-show="types.default">
				<div class="sk-circle1 sk-circle"></div>
				<div class="sk-circle2 sk-circle"></div>
				<div class="sk-circle3 sk-circle"></div>
				<div class="sk-circle4 sk-circle"></div>
				<div class="sk-circle5 sk-circle"></div>
				<div class="sk-circle6 sk-circle"></div>
				<div class="sk-circle7 sk-circle"></div>
				<div class="sk-circle8 sk-circle"></div>
				<div class="sk-circle9 sk-circle"></div>
				<div class="sk-circle10 sk-circle"></div>
				<div class="sk-circle11 sk-circle"></div>
				<div class="sk-circle12 sk-circle"></div>
			</div>
			<div class="spinner" v-show="types.bounce">
				<div class="double-bounce1"></div>
				<div class="double-bounce2"></div>
			</div>
			<div class="spinner2" v-show="types.rect">
				<div class="rect1"></div>
				<div class="rect2"></div>
				<div class="rect3"></div>
				<div class="rect4"></div>
				<div class="rect5"></div>
			</div>
			<p class="x-loading-text" v-text="text"></p>
		</div>
	</transition>
</template>

<script>
	export default{
		data (){
			return {
				visible: false,
				types:{
					default:false,
					bounce:false,
					rect:false
				},
				text:'加载中'
			}
		}
	}
</script>

