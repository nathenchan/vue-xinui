const radioText = {
	tips:``,
	html:`<x-radio val="1" v-model="radioVal">
	<template v-slot:text >选项1</template>
</x-radio>
<x-radio val="2" v-model="radioVal">
	<template v-slot:text >选项2</template>
</x-radio>
<x-radio val="3" v-model="radioVal">
	<template v-slot:text >选项3</template>
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
	html:`<x-radio val="a" v-model="radioVal2" :disabled="true">
	<template v-slot:text >选项1</template>
</x-radio>
<x-radio val="b" v-model="radioVal2" :disabled="true">
	<template v-slot:text >选项2</template>
</x-radio>`,
	css:``,
	js:`export default{
	data(){
		return {
			radioVal2:'b'
		}
	}
}`
}
export { radioText,radioText2 }