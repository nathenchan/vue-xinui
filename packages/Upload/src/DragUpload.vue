<template>
	<div class="x-upload-drag" :class="active && 'active'" @drop.prevent="onDrop" @dragover.prevent="onDragover"  @dragleave.prevent="onDragleave">
		<slot></slot>
	</div>
</template>

<script>
export default{
	data(){
		return {
			active:false
		}
	},
	methods:{
		onDrop(e){
			this.active = false
			this.$emit('upload',{target:{files:[e.dataTransfer.files[0]]}})
		},
		onDragover(){
			this.active = true
		},
		onDragleave(){
			this.active = false
		}
	}
}
</script>
