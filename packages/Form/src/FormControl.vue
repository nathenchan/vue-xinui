<template>
	<div class="x-form-control" :style="{marginLeft:xForm.$attrs['label-width']}">
		<slot/>
	</div>
</template>

<script>
export default {
	name:'x-form-control',
	inject:['xForm']
}
</script>