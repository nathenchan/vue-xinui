<template>
	<div>
	    <div class="demo-pages">
	      <h3>Button 按钮</h3>
	      <div class="show-page">
	      	<div class="demo-btn-page">
	      		<x-button :btnStyle="{width:'80px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" >确定</x-button>
	      		<x-button :btnStyle="{width:'80px',height:'30px',borderRadius:'0px',background:'#696969',color:'#fff',fontSize:'12px'}" >取消</x-button>
	      		<x-button :disabled="btnDisabled" :btnStyle="{width:'80px',height:'30px',borderRadius:'0px',background:'#999',color:'#fff',fontSize:'12px'}" >禁用</x-button>
	      	</div>
	      </div>
	      <source-page :tmpl="buttonText"></source-page>
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
	            <td>disabled</td>
	            <td>禁用状态</td>
	            <td>boolean</td>
	            <td></td>
	            <td>true/false</td>
	          </tr>
	        </tbody>
	      </table>
	    </div>
	</div>
</template>

<script>
import {buttonText} from '../../examples/sourcetmp/button.js'

export default{
    data(){
      return {
		buttonText,
		btnDisabled:true
      }
    },
    methods:{
    	
    },
    mounted(){
    	
    }
}
</script>
