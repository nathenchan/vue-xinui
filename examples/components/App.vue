<template>
	<div id="vue-xinui">
		<header>
			<!-- <h1>xinui</h1> -->
		</header>
		<div id="content" class="clear">
			<aside>
				<!-- <p class="nav-group-item"><router-link to="/update_log">更新日志</router-link></p>
				<p class="nav-group-item"><router-link to="/">介绍使用</router-link></p> -->
				<div class="section-group">
					<h2>常用组件</h2>
					<p class="title">Common components</p>
					<ul>
						<li><router-link to="/button">Button 按钮</router-link></li>
						<li><router-link to="/loading">Loading 加载</router-link></li>
						<li><router-link to="/dialog">Dialog 弹窗</router-link></li>
						<li><router-link to="/slide_verify">SlideVerify 滑动验证</router-link></li>
						<li><router-link to="/upload">Upload 上传</router-link></li>
						<li><router-link to="/ring">Ring 圆环</router-link></li>
						<li><router-link to="/count_down">CountDown 倒计时</router-link></li>
						<li><router-link to="/pagination">Pagination 分页</router-link></li>
						<li><router-link to="/image">Image 图片</router-link></li>
					</ul>
				</div>

				<div class="section-group">
					<h2>表单</h2>
					<p class="title">Form</p>
					<ul>
						<li><router-link to="/input">Input 输入框</router-link></li>
						<li><router-link to="/radio">Radio 单选框</router-link></li>
					</ul>
				</div>

				<div class="section-group">
					<h2>展示</h2>
					<p class="title">Show</p>
					<ul>
						<li><router-link to="/svg_demo">Svg 案例</router-link></li>
					</ul>
				</div>
				
			</aside>
			<main>
				<router-view></router-view>
			</main>
		</div>
		
	</div>
</template>

<script>
export default{
	data(){
		return {}
	},
	mounted(){
		
	}
}
</script>
