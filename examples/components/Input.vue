<template>
	<div>
		<div class="demo-pages">
			<h3>Input 输入框</h3>
			<p class="tips">注意，verify验证对象不可共用同一个，因为javascript中对象和数组都是通过引用传入</p>
			<div class="show-page">
				<div class="demo-page inputpage">
					<x-input type="text" v-model="testNum" placeholder="输入内容" :disabled="false" @blur="blurfn" @input="inputfn" :verify="verifyData" :result.sync="verifyResult[0]" />
				</div>
				<div class="demo-page inputpage">
					<x-input type="password" v-model="testNum2" placeholder="密码框" />
				</div>
				<div class="demo-page inputpage">
					<x-input type="password" v-model="testNum3" placeholder="3到8位字符，禁止特殊符号" aside-width="80px" >
						<template v-slot:aside>
							用户名
						</template>
					</x-input>
				</div>

				<div class="demo-page inputpage">
					<x-input type="password" v-model="testNum4" placeholder="禁止特殊字符" aside-width="80px" :verify="verifyData" :result.sync="verifyResult[0]">
						<template v-slot:aside>
							自定义验证
						</template>
					</x-input>
				</div>

			</div>
			<source-page :tmpl="inputText"></source-page>
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
						<td>type</td>
						<td>类型</td>
						<td>String</td>
						<td></td>
						<td>原生属性</td>
					</tr>
					<tr>
						<td>placeholder</td>
						<td>输入框内提示</td>
						<td>String</td>
						<td></td>
						<td>原生属性</td>
					</tr>
					
					<tr>
						<td>disabled</td>
						<td>禁止状态</td>
						<td>Boolean</td>
						<td>false</td>
						<td></td>
					</tr>
					<tr>
						<td>aside-width</td>
						<td>左侧说明占位宽</td>
						<td>String</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>verify</td>
						<td>验证规则</td>
						<td>Array</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>result</td>
						<td>验证结果</td>
						<td>Bollean</td>
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
						<td>blur</td>
						<td>离开输入框焦点</td>
						<td>输入框绑定的值</td>
					</tr>
					<tr>
						<td>input</td>
						<td>输入时触发</td>
						<td>输入框绑定的值</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import {inputText} from '../sourcetmp/input.js'
export default{
	data(){
		return {
			inputText,
			testNum:'',
			testNum2:'',
			testNum3:'',
			testNum4:'',
			verifyData:[{type:'required',text:'必填'},{type:'test',reg:/[\d]+/,text:'含数字'},{type:'length',max:20,min:8,text:'8-20个字符'}],
			verifyResult:[false,false]
		}
	},
	methods:{
		blurfn(e){
			console.log(e)
		},
		inputfn(e){
			console.log(e)
		}
	},
	mounted(){
		
	}
}
</script>

<style lang="scss">
.inputpage{
	width:300px;
}
</style>