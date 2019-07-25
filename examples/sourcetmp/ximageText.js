const ximageText = {
	tips:`当多图垂直排列时，为了准确判断图片是否进入可视区，需要给x-image设定height值，并起到占位作用，让页面无跳动过渡。height值=图片在页面中显示的高度，height需要根据场景决定是否需要动态计算`,
	html:`<x-image v-for="item in imgs" :src="item.src" :height="item.height" :key="item.id" />
<button @click="addData">test</button>`,
	css:`img{
	max-width: 100%;
}`,
	js:`export default{
	data(){
		return {
			imgs:[
				{
					src:'http://img3.imgtn.bdimg.com/it/u=2279055805,3887160486&fm=26&gp=0.jpg',
					id:1,
					height:312
				},
				{
					src:'http://b-ssl.duitang.com/uploads/item/201707/30/20170730093737_NMCwW.jpeg',
					id:2,
					height:871
				},
				{
					src:'http://b-ssl.duitang.com/uploads/item/201604/29/20160429155655_EYXZx.jpeg',
					id:3,
					height:1101
				},
				{
					src:'http://s15.sinaimg.cn/mw690/00328H1Nzy74f5vBmKG8e&690',
					id:4,
					height:497
				},
				{
					src:'http://www.chinadaily.com.cn/tech/img/attachement/jpg/site1/20140312/eca86bd9ddb2148a6b1a27.jpg',
					id:5,
					height:578
				}
			]
		}
	},
	methods:{
		addData(){
			this.imgs.push({
				src:'http://pic-image.yesky.com/uploadImages/2017/116/25/NT2I86C7783V.jpg',
				id:6,
				height:600
			})
		}
	}
}`
}

export { ximageText }