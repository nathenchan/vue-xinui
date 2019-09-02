const SlideText = {
	tips:``,
	html:`<x-slide transition-time=".2s">
	<li class="content-li" v-for="(item,index) in imgData"><img :src="item.src"></li>
</x-slide>`,
	css:`.x-slide{
	width:300px;
	height:200px;
	.content-li{
		width:300px;
	}
}`,
	js:`export default{
	data(){
		return {
			imgData:[
				{
					alt:'',
					src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1944845135,280224577&fm=26&gp=0.jpg'
				},
				{
					alt:'',
					src:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1289981276,3794620975&fm=26&gp=0.jpg'
				},
				{
					alt:'',
					src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2871893164,592906384&fm=26&gp=0.jpg'
				},
				{
					alt:'',
					src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2868140583,532600119&fm=26&gp=0.jpg'
				},
				{
					src:'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg'
				}
			]
		}
	}
},
	mounted(){
		this.$refs.slide1.create()
	}
}
`
}

export {SlideText}