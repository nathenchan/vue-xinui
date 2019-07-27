<template>
	<div>
		<div class="demo-pages">
			<h3></h3>
			<div class="show-page">
				<div class="demo-page inputpage">
					<x-input type="text" v-model="testNum" placeholder="输入内容" :disabled="false" @blur="blurfn" />
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
					<x-input type="password" v-model="testNum4" placeholder="禁止特殊字符" aside-width="80px" :verify="verifyData">
						<template v-slot:aside>
							自定义验证
						</template>
					</x-input>
				</div>

			</div>
			<!-- <source-page :tmpl=""></source-page> -->
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
						<td>src</td>
						<td>图片地址</td>
						<td>String</td>
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
						<td>类型</td>
						<td>默认值</td>
						<td>可选值</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>src</td>
						<td>图片地址</td>
						<td>String</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			testNum:'',
			testNum2:'',
			testNum3:'',
			testNum4:'',
			verifyData:[{type:'required',text:'必填'},{type:'test',reg:/[\d]+/,text:'含数字'},{type:'length',max:10,min:1,text:'1-10个字符'}]
		}
	},
	methods:{
		blurfn(val){

		},
		verifyfn(val){
			// 自定义验证
			let result = val.test(/javascript/)
			if(result){

			}else{
				return false
			}
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