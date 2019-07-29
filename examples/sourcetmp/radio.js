const radioText = {
	tips:``,
	html:`<x-radio value="1" :radio-model.sync="radioVal">
	<template v-slot:rightText >选项1</template>
</x-radio>
<x-radio value="2" :radio-model.sync="radioVal">
	<template v-slot:rightText >选项2</template>
</x-radio>
<x-radio value="3" :radio-model.sync="radioVal">
	<template v-slot:rightText >选项3</template>
</x-radio>`,
	css:``,
	js:`export default{
	data(){
		return {
			radioVal:'1'
		}
	}
}`
}
const radioText2 = {
	tips:``,
	html:`<x-radio value="a" :radio-model.sync="radioVal2" :disabled="true">
	<template v-slot:rightText >选项1</template>
</x-radio>
<x-radio value="b" :radio-model.sync="radioVal2" :disabled="true">
	<template v-slot:rightText >选项2</template>
</x-radio>`,
	css:``,
	js:`export default{
	data(){
		return {
			radioVal2:'b'
		}
	}
}button.js`
}
export { radioText,radioText2 }