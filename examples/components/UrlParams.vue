<template>
	<div>
		<div class="demo-pages">
			<h3>Url Params</h3>
			<p class="tips">用于获取Url中的参数，支持中文</p>
			<div class="show-page">
				<div class="demo-page">
					<p class="texts">http://abc.com?id=1&lang=Javascript&name=张三</p>
					<p class="texts">在控制台中查看结果</p>
				</div>
			</div>
			<source-page :tmpl="UrlParamsText"></source-page>
	    </div>
	</div>
</template>

<script>
import {UrlParamsText} from '../sourcetmp/urlParamsText.js'
export default{
	data(){
		return {
			UrlParamsText
		}
	},
	mounted(){
		console.log(this.$UrlParams())
	}
}
</script>
