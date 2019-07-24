<template>
	<div>
		<div class="demo-pages">
			<h3>图片懒加载</h3>
			<div class="show-page">
				<div class="demo-page">
					<div class="x-image-test-page">
						<x-image v-for="item in imgs" :src="item" :key="item" />
					</div>
				</div>
			</div>
			<!-- <source-page :tmpl="paginationText"></source-page> -->
	     </div>
	</div>
</template>

<script>
// import paginationText from '../sourcetmp/pagination.js'
export default{
	data(){
		return {
			imgs:[
				'https://pokertime.cc/images/website/logo.png',
				// 'https://pokertime.cc/images/website/wap_poker.png',
				// 'https://pokertime.cc/images/website/wap_info.png',
				// 'https://pokertime.cc/images/website/wap_bottom_bg.png',
				// 'https://pokertime.cc/images/website/wap_info2.png'
			]
		}
	},
	methods:{
		
	}
}
</script>

<style lang="scss">
.x-image-test-page{
	height:200px;
	overflow-y:scroll;
}
</style>