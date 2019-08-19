<template>
	<div class="x-slide">
		<div class="x-slide-imgpage">
			<ul>
				<li>
					<img src="" alt="">
				</li>
			</ul>
		</div>
		<div class="x-slide-arrowbtn">
			
		</div>
		<div class="x-slide-paginationbtn">
			
		</div>
	</div>
</template>

<script>
/**
 * pc wap 事件
 * 左右箭头+圆点点击
 * 图片lazy load
 * 类型：单张，3d
 * 数据传输
 */
export default{
	name:'x-slide'
}
</script>

<style lang="scss">
.x-slide{
	position: relative;
	width:300px;
	height:140px;
}
</style>
