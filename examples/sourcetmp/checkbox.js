const checkboxText = {
	tips:``,
	html:`<x-checkbox v-model="val1">
	<template v-slot:text>文字</template>
</x-checkbox>`,
	css:``,
	js:`export default{
	data(){
		return {
			val1:true
		}
	}
}`
}
const checkboxText2 = {
	tips:`可以使用max限制选择个数`,
	html:`<x-checkbox-group v-model="checklist">
	<x-checkbox val="sz">
		<template v-slot:text>深圳</template>
	</x-checkbox>
	<x-checkbox val="gz">
		<template v-slot:text>广州</template>
	</x-checkbox>
	<x-checkbox val="bj">
		<template v-slot:text>北京</template>
	</x-checkbox>
	<x-checkbox val="sh">
		<template v-slot:text>上海</template>
	</x-checkbox>
	<x-checkbox val="hz">
		<template v-slot:text>杭州</template>
	</x-checkbox>
</x-checkbox-group>`,
	css:``,
	js:`export default{
	data(){
		return {
			checklist:['sz']
		}
	}
}`
}

export { checkboxText,checkboxText2 }