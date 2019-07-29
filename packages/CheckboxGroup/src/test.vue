<template>
	<div>
		{{foo}}
	</div>
</template>

<script>
export default {
	inject: ['foo'],
	created () {
		console.log(this.foo) // => "bar"
	}
}
</script>