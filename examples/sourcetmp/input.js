const inputText = {
	tips:``,
	html:`<x-input type="text" v-model="testNum" placeholder="输入内容" :disabled="false" @blur="blurfn" />

<x-input type="password" v-model="testNum2" placeholder="密码框" />

<x-input type="password" v-model="testNum3" placeholder="3到8位字符，禁止特殊符号" aside-width="80px" >
	<template v-slot:aside>
		用户名
	</template>
</x-input>

<x-input type="password" v-model="testNum4" placeholder="禁止特殊字符" aside-width="80px" :verify="verifyData" :result.sync="verifyResult[0]">
	<template v-slot:aside>
		自定义验证
	</template>
</x-input>
`,
	css:``,
	js:`export default{
	data(){
		return {
			testNum:'',
			testNum2:'',
			testNum3:'',
			testNum4:'',
			verifyData:[{type:'required',text:'必填'},{type:'test',reg:/[\d]+/,text:'含数字'},{type:'length',max:20,min:8,text:'8-20个字符'}],
			verifyResult:[false]
		}
	},
	methods:{
		blurfn(val){
			console.log(val)
		}
	}
}`
}

export { inputText }