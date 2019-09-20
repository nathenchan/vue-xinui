<template>
	<div>
		<div class="demo-pages">
	      <h3>Upload 点击上传</h3>
	      <div class="show-page">
	      	<div class="demo-btn-page">
				<x-upload
					class="x-upload-normal"
					:params="{type:1}"
					:headers="{token:'123'}"
					upload-url='http://preadmin.teampkt.com/upload?output=json'
					:on-success="uploadSuccess"
					:on-error="failUpload"
					:size="300"
					:file-type="['png','jpg','jpeg']"
					>
					<img v-if="base64Img" :src="base64Img" >
					<div v-else class="x-upload-add">上传图片</div>
				</x-upload>
	      	</div>
	      </div>
	      <source-page :tmpl="uploadText1"></source-page>
	    </div>

	    <div class="demo-pages">
	      <h3>Upload 拖拽上传</h3>
	      <div class="show-page">
	      	<div class="demo-btn-page">
				<x-upload
					class="x-upload-dragpage"
					:drag="true"
					upload-url='http://preadmin.teampkt.com/upload?output=json'
					:on-success="uploadSuccess2"
					:on-error="failUpload2"
					>
					<img v-if="base64Img2" :src="base64Img2" >
					<div v-else class="x-upload-add">拖拽上传</div>
				</x-upload>
	      	</div>
	      </div>
	      <source-page :tmpl="uploadText2"></source-page>
	    </div>

	     <div class="demo-pages">
	      <h3>Upload 手动上传</h3>
	      <div class="show-page">
	      	<div class="demo-btn-page">
				<x-upload
					:auto-upload="false"
					class="x-upload-normal"
					upload-url='http://preadmin.teampkt.com/upload?output=json'
					:before-upload="beforeUpload3"
					:on-success="uploadSuccess3"
					:on-error="failUpload3"
					ref="upload"
					>
					<img v-if="base64Img3" :src="base64Img3" >
					<div v-else class="x-upload-add">手动上传</div>
				</x-upload>
	      	</div>
	      </div>
	      <source-page :tmpl="uploadText3"></source-page>
	    </div>
				
		<div class="api-pages">
	      <h3>Attributes</h3>
	      <table width="100%">
	        <thead>
	          <tr>
	            <td>参数名</td>
	            <td>说明</td>
	            <td>类型</td>
	            <td>默认值</td>
	            <td>可选值</td>
	          </tr>
	        </thead>
	        <tbody>
	          <tr>
	            <td>params</td>
	            <td>上传接口传参，会和File一同提交</td>
	            <td>Object</td>
	            <td></td>
	            <td></td>
	          </tr>
	          <tr>
	            <td>headers</td>
	            <td>请求头设置</td>
	            <td>Object</td>
	            <td></td>
	            <td></td>
	          </tr>
	          <tr>
	            <td>upload-url</td>
	            <td>上传地址</td>
	            <td>String</td>
	            <td></td>
	            <td></td>
	          </tr>
	          <tr>
	            <td>before-upload</td>
	            <td>上传前触发的回调</td>
	            <td>function(file)</td>
	            <td></td>
	            <td></td>
	          </tr>
	          <tr>
	            <td>on-success</td>
	            <td>上传完成回调</td>
	            <td>function(file)</td>
	            <td></td>
	            <td></td>
	          </tr>
	          <tr>
	            <td>on-error</td>
	            <td>上传失败回调</td>
	            <td>function(error)</td>
	            <td></td>
	            <td></td>
	          </tr>
	          <tr>
	            <td>auto-upload</td>
	            <td>自动上传</td>
	            <td>Boolean</td>
	            <td>true</td>
	            <td>false</td>
	          </tr>
	          <tr>
	            <td>size</td>
	            <td>上传文件大小的限制，单位kb</td>
	            <td>Number</td>
	            <td>500</td>
	            <td></td>
	          </tr>
	          <tr>
	            <td>file-type</td>
	            <td>上传文件的类型限制</td>
	            <td>Array</td>
	            <td></td>
	            <td></td>
	          </tr>
	        </tbody>
	      </table>
	    </div>
	</div>
</template>

<script>
	import {uploadText1,uploadText2,uploadText3} from '../sourcetmp/upload.js'

	export default{
		data(){
			return {
				uploadText1,
				uploadText2,
				uploadText3,
				base64Img:'',
				imgUrl:'', // 后台返回的url,
				base64Img2:'',
				imgUrl2:'', // 后台返回的url
				base64Img3:'',
				imgUrl3:'', // 后台返回的url
			}
		},
		methods:{
			uploadSuccess({data,file,img64}){
				this.base64Img = img64
				this.imgUrl = data.url
			},
			beforeUpload(file){
				// this.$refs.upload.postFile(file) // 手动上传
			},
			failUpload(error){
				console.log(error)
				this.base64Img = ''
				this.imgUrl = ''
			},
			uploadSuccess2({data,file,img64}){
				this.base64Img2 = img64
				this.imgUrl2 = data.url
			},
			failUpload2(error){
				this.base64Img2 = ''
				this.imgUrl2 = ''
			},
			uploadSuccess3({data,file,img64}){
				this.base64Img3 = img64
				this.imgUrl3 = data.url
			},
			failUpload3(error){
				this.base64Img3 = ''
				this.imgUrl3 = ''
			},
			beforeUpload3(file){
				this.$refs.upload.postFile(file) // 手动上传
			}
		}
	}


	
</script>

<style lang="scss">
// 点击上传
.x-upload-normal{
	width:200px;
	height:200px;
	border:1px dashed #bfbfbf;
	&:active{
		border:1px solid #007faa;
	}
	img{
		max-width: 100%;
		height:200px;
	}
	.x-upload-add{
		width:200px;
		height:200px;
		line-height:200px;
		text-align: center;
		color:#666;
		font-size: 16px;
	}
}
.x-upload-dragpage{
	width:200px;
	height:200px;
	img{
		max-width: 100%;
		height:200px;
	}
	.x-upload-add{
		width:200px;
		height:200px;
		line-height:200px;
		text-align: center;
		color:#666;
		font-size: 16px;
	}
}
</style>