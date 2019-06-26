<template>
	<div>
		<div class="demo-pages">
	      <h3>slideVerify 滑动验证</h3>
	      <div class="show-page">
	      	<div class="demo-btn-page">
	      		<x-slide-verify @finish="success" @error="verifyError" maxerror="3"></x-slide-verify>
	      	</div>
	      </div>
	      <source-page :tmpl="slideVerify"></source-page>
	    </div>
	    <div class="demo-pages">
	      <h3>弹窗形式</h3>
	      <div class="show-page">
	      	<div class="demo-btn-page">
	      		<x-button :btnStyle="{width:'80px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="showDialog">验证弹窗</x-button>
	      	</div>
	      </div>
	      <source-page :tmpl="slideVerify2"></source-page>
	    </div>
		
		<x-dialog :visible.sync="verifyVisible" :dialogStyle="{ width:'50%',top:'10vh' }" title="弹窗形式" >
			<x-slide-verify @finish="success" @error="verifyError" maxerror="6"></x-slide-verify>
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
	            <td>maxerror</td>
	            <td>最大错误数</td>
	            <td>Number</td>
	            <td></td>
	            <td>15</td>
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
	import {slideVerify,slideVerify2} from '../sourcetmp/slideVerify.js'
	export default{
		data(){
			return {
				slideVerify,
				slideVerify2,
				verifyVisible:false
			}
		},
		methods:{
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

