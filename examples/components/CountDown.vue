<template>
	<div>
	    <div class="demo-pages">
	      <h3>CountDown 倒计时</h3>
	      <div class="show-page">
			<x-count-down @finish="countend" ref="countdown" />
	      </div>
	      <source-page :tmpl="countDownText"></source-page>
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
					<td>finish</td>
					<td>倒计时结束后事件</td>
					<td>Function</td>
					<td></td>
					<td></td>
				</tr>
	        </tbody>
	      </table>
	    </div>
	</div>
</template>

<script>
import {countDownText} from '../sourcetmp/countDown.js'
export default{
    data(){
      return {
      	countDownText,
		num:null
      }
    },
    methods:{
    	countend(){
    		console.log('倒计时结束')
    	}
    },
    mounted(){
    	// 假设是异步获取的秒数
    	setTimeout(_=>{
    		this.num = 10
    		this.$refs.countdown.init(this.num)
    	},50) 	
    }
}
</script>
