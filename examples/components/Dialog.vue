<template>
	<div>
		<div class="demo-pages">
	      <h3>Dialog 弹窗</h3>
	      <div class="show-page">
	      	<div class="demo-btn-page">
	      		<x-button :btnStyle="{padding:'0 20px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="showDialog">显示弹窗</x-button>
	      	</div>
	      </div>
	      <source-page :tmpl="dialogText"></source-page>
	    </div>

	    <div class="demo-pages">
	      <h3>常用弹窗-带确认按钮</h3>
	      <div class="show-page">
	      	<div class="demo-btn-page">
	      		<x-button :btnStyle="{padding:'0 20px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="showDialog2">显示弹窗</x-button>
	      	</div>
	      </div>
	      <source-page :tmpl="dialogText2"></source-page>
	    </div>

	    <div class="demo-pages">
	      <h3>常用弹窗-带确认取消双按钮</h3>
	      <div class="show-page">
	      	<div class="demo-btn-page">
	      		<x-button :btnStyle="{padding:'0 20px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="showDialog3">显示弹窗</x-button>
	      	</div>
	      </div>
	      <source-page :tmpl="dialogText3"></source-page>
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
	            <td>title</td>
	            <td>弹窗标题(默认居中)</td>
	            <td>String</td>
	            <td></td>
	            <td></td>
	          </tr>
	          <tr>
	            <td>visible</td>
	            <td>显示/隐藏</td>
	            <td>Boolean</td>
	            <td></td>
	            <td>true/false</td>
	          </tr>
	          <tr>
	            <td>dialogStyle</td>
	            <td>控制.x-dialog弹窗样式</td>
	            <td>Object</td>
	            <td></td>
	            <td></td>
	          </tr>
	          <tr>
	            <td>show-close</td>
	            <td>显示关闭按钮</td>
	            <td>Boolean</td>
	            <td>true</td>
	            <td>true/false</td>
	          </tr>
	          <tr>
	            <td>mask-click-close</td>
	            <td>点击遮罩关闭弹窗</td>
	            <td>Boolean</td>
	            <td>false</td>
	            <td>true/false</td>
	          </tr>
	        </tbody>
	      </table>
	    </div>
		<x-dialog :visible.sync="dialogVisible" :dialogStyle="{width:'30%',top:'10vh',height:'50%',borderRadius:'10px'}" :show-close="true" :mask-click-close="false" title="弹窗标题">
			<div class="my-dialog-content">
				弹窗内容
			</div>
		</x-dialog>
		<x-dialog :visible.sync="dialogVisible2" :dialogStyle="{width:'20%',height:'200px',top:'10vh',borderRadius:'10px'}" :show-close="true" :mask-click-close="false" title="确认">
			<div class="my-dialog-content">
				<p>测试内容</p>
				<div class="x-one-page">
					<x-button :btnStyle="{padding:'0 20px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="cancel">关闭</x-button>
				</div>
			</div>
		</x-dialog>
		<x-dialog :visible.sync="dialogVisible3" :dialogStyle="{width:'20%',height:'200px',top:'10vh',borderRadius:'10px'}" :show-close="true" :mask-click-close="false" title="取消与确认">
			<div class="my-dialog-content">
				<p>是否删除</p>
				<div class="clear x-twobtn-page">
					<x-button :btnStyle="{padding:'0 20px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="cancel2">取消</x-button>
					<x-button :btnStyle="{padding:'0 20px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="confirm">确认</x-button>
				</div>
			</div>
		</x-dialog>
	</div>
</template>

<script>
	import {dialogText,dialogText2,dialogText3} from '../sourcetmp/dialog.js'
	export default{
		data(){
			return {
				dialogText,
				dialogText2,
				dialogText3,
				dialogVisible:false,
				dialogVisible2:false,
				dialogVisible3:false
			}
		},
		methods:{
			showDialog(){
				this.dialogVisible = true
			},
			showDialog2(){
				this.dialogVisible2 = true
			},
			showDialog3(){
				this.dialogVisible3 = true
			},
			cancel(){
				this.dialogVisible2 = false
			},
			cancel2(){
				this.dialogVisible3 = false
			},
			confirm(){
				alert('确认')
			}
		}
	}
</script>