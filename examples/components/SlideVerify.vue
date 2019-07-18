<template>
	<div>
		<div class="demo-pages">
			<h3>slideVerify 滑动验证</h3>
			<p class="tips">
			图片和拖拽的正确位置有服务端接口提供，组件尺寸可用css设置.picture-puzzle元素的width，组件放大或缩小后背景图、碎片图、包括碎片图正确位置都将等比例缩放，校验结果由2个变量决定，碎片图位置是否接近正确位置，用户拖拽所用时间和速度是否正常。（碎片图的位置必须随机生成。）
			</p>
			<div class="show-page">
				<div class="demo-btn-page">
					<x-slide-verify @preload="fetchData" @finish="success" @error="verifyError" :maxError="3" :verifyData="slideverifyData" />
				</div>
			</div>
			<source-page :tmpl="slideVerifyText"></source-page>
		</div>
	    <div class="demo-pages">
	      <h3>弹窗形式</h3>
	      <div class="show-page">
	      	<div class="demo-btn-page">
	      		<x-button :btnStyle="{width:'80px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="showDialog">验证弹窗</x-button>
	      	</div>
	      </div>
	      <source-page :tmpl="slideVerifyText2"></source-page>
	    </div>
		
		<x-dialog :visible.sync="verifyVisible" :dialogStyle="{ width:'50%',top:'10vh' }" title="弹窗形式" >
			<x-slide-verify @preload="fetchData" @finish="success" @error="verifyError" :maxError="3" :verifyData="slideverifyData" />
		</x-dialog>
		
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
	            <td>maxErrror</td>
	            <td>最大错误数</td>
	            <td>Number</td>
	            <td>8</td>
	            <td></td>
	          </tr>
	          <tr>
	            <td>verifyData</td>
	            <td>图片、图片宽及位置数据</td>
	            <td>Object</td>
	            <td></td>
	            <td></td>
	          </tr>
	        </tbody>
	      </table>
	    </div>

	    <div class="api-pages">
	      <h3>Events</h3>
	      <table width="100%">
	        <thead>
	          <tr>
	            <td>事件名</td>
	            <td>说明</td>
	            <td>回调参数</td>
	          </tr>
	        </thead>
	        <tbody>
	          <tr>
	            <td>preload</td>
	            <td>预取数据作初始化</td>
	            <td></td>
	          </tr>
	          <tr>
	            <td>error</td>
	            <td>滑动错误回调</td>
	            <td>错误次数</td>
	          </tr>
	          <tr>
	            <td>finish</td>
	            <td>拼图成功回调</td>
	            <td></td>
	          </tr>
	        </tbody>
	      </table>
	    </div>
	</div>
</template>

<script>
	
	import {slideVerifyText,slideVerifyText2} from '../sourcetmp/slideVerify.js'
	import axios from 'axios'

	export default{
		data(){
			return {
				slideVerifyText,
				slideVerifyText2,
				verifyVisible:false,
				// 拼图数据
				slideverifyData:{
					imgs:{
						dragImg:'',
  						dragBg:''
					},
					dx:null,
					dragImgWidth:0,
					dragBgWidth:0
				}
			}
		},
		methods:{
			fetchData(){ // 获取数据
				axios.get('http://localhost:8089/slideverify').then(res=>{
					this.slideverifyData = res.data
				})
			},
			success(){
				console.log('验证完成')
			},
			verifyError(errorNum){
				console.log('错误了'+errorNum+'次')
			},
			showDialog(){
				this.verifyVisible = true
			}
		}
	}
</script>

