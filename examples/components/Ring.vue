<template>
	<div>
	    <div class="demo-pages">
	      <h3>Ring 圆环进度条</h3>
	      <div class="show-page">
			<x-ring width="100" height="100" :r="40" :stroke-width="8" :progress="progress1" :bg-color="'#e5e5e5'" :bar-color="'#03a9f4'" >
				<p class="progress-text">{{progress1}}%</p>
			</x-ring>
	      </div>
	      <source-page :tmpl="ringText"></source-page>
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
					<td>width</td>
					<td>svg宽</td>
					<td>String</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>height</td>
					<td>svg高</td>
					<td>String</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>r</td>
					<td>圆的半径</td>
					<td>Number</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>stroke-width</td>
					<td>描边的宽度</td>
					<td>Number</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>bg-color</td>
					<td>圆环的背景色</td>
					<td>String</td>
					<td>#e4e4e4</td>
					<td></td>
				</tr>
				<tr>
					<td>bar-color</td>
					<td>进度条的颜色</td>
					<td>String</td>
					<td>#2196F3</td>
					<td></td>
				</tr>
				<tr>
					<td>linecap</td>
					<td>描边两端的样式</td>
					<td>String</td>
					<td>round</td>
					<td>butt</td>
				</tr>
	        </tbody>
	      </table>
	    </div>
	</div>
</template>

<script>
import {ringText} from '../sourcetmp/ring.js'
export default{
    data(){
      return {
      	ringText,
		progress1:0
      }
    },
    mounted(){
    	setTimeout(_=>{
    		this.progress1 = 90
    	},1000)
    }
}
</script>

<style lang="scss">
.progress-text{
	position: absolute;
	left:0;
	top:0;
	text-align: center;
	width:100%;
	line-height: 100px;
	z-index: 9;
}
</style>