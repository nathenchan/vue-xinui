var selectText = {
	tips:`111`,
	html:`<x-select v-model="value" placeholder="下拉菜单" @change="changeData">
	<x-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
</x-select>`,
	css:``,
	js:`export default{
	data(){
		return {
			value:'1',
			options:[
				{
					value:'1',
					label:'选项1'
				},
				{
					value:'2',
					label:'选项2'
				},
				{
					value:'3',
					label:'选项3选项3选项3选项3选项3选项3'
				}
			]
		}
	},
	methods:{
		changeData(){
			console.log(1)
		}
	}
}`
}

export { selectText }