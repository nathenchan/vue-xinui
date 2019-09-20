var TextareaText = {
	tips:``,
	html:`<x-textarea v-model="textData" max="10" min="5" @blur="blurFn" />`,
	css:``,
	js:`export default{
	data(){
		return {
			textData:''
		}
	},
	methods:{
		blurFn(e){
			console.log(this.textData,e)
		}
	}
}`
}

export {TextareaText}