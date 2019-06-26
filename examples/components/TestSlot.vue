<template>
	<div @click="a">
		<!-- <slot v-bind:user="user">
			{{ user.firstName }}
		</slot> -->
		<!-- <slot :user="user"></slot> -->
		22
	</div>
</template>

<script>
	export default{
		data(){
			return {
				user:{
					firstName:'nini',
					init:'陈',
					a:[1,2,3]
				},
			}
		},
		methods:{
			a(){
				console.log(1)
			}
		},
	}
</script>