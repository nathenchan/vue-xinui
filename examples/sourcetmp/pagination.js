export default {
	tips:'',
	html:`<x-pagination :pageSize="pageSize" :page.sync="page" :count="count" />
<x-pagination :pageSize="pageSize2" :page.sync="page" :count="count2" @change="fetchData" />
<x-pagination :pageSize="pageSize3" :page.sync="page" :count="count3"  />`,
	css:``,
	js:`export default{
	data(){
		return {
			page:1,
			pageSize:5,
			pageSize2:10,
			pageSize3:15,
			count:0,
			count2:100,
			count3:150
		}
	},
	methods:{
		fetchData(page){ 
			// axios.get('/api',{
			// 	params:{ page,limit:this.pageSize2 }
			// }).then(res=>{
			// 	do something
			// })
		}
	}
}`
}