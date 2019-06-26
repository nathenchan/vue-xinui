const dialogText = {
	tips:``,
	html:`<x-button :btnStyle="{padding:'0 20px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="showDialog">显示弹窗</x-button>

<x-dialog :visible.sync="dialogVisible" :dialogStyle="{width:'30%',top:'10vh',height:'50%',borderRadius:'10px'}" :show-close="true" :mask-click-close="false" title="弹窗标题">
	<div class="my-dialog-content">
		弹窗内容
	</div>
</x-dialog>
	`,
	css:``,
	js:`export default{
	data(){
		return {
			dialogVisible:false
		}
	},
	methods:{
		showDialog(){
			this.dialogVisible = true
		}
	}
}`
}


const dialogText2 = {
	tips:``,
	html:`<x-button :btnStyle="{padding:'0 20px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="showDialog2">显示弹窗</x-button>

<x-dialog :visible.sync="dialogVisible2" :dialogStyle="{width:'20%',height:'200px',top:'10vh',borderRadius:'10px'}" :show-close="true" :mask-click-close="false" title="确认">
	<div class="my-dialog-content">
		<p>测试内容</p>
		<div class="x-one-page">
			<x-button :btnStyle="{padding:'0 20px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="cancel">关闭</x-button>
		</div>
	</div>
</x-dialog>
	`,
	css:``,
	js:`export default{
    data(){
        return {
            dialogVisible2:false
        }
    },
    methods:{
		showDialog2(){
            this.dialogVisible2 = true
		},
        cancel(){
		    alert('取消')
			this.dialogVisible2 = false
		}
    }
}`
}


const dialogText3 = {
	tips:``,
	html:`<x-button :btnStyle="{padding:'0 20px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="showDialog2">显示弹窗</x-button>

<x-dialog :visible.sync="dialogVisible2" :dialogStyle="{width:'20%',height:'200px',top:'10vh',borderRadius:'10px'}" :show-close="true" :mask-click-close="false" title="取消与确认">
	<div class="my-dialog-content">
		<p>是否删除</p>
		<div class="clear x-twobtn-page">
			<x-button :btnStyle="{padding:'0 20px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="cancel">取消</x-button>
			<x-button :btnStyle="{padding:'0 20px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="confirm">确认</x-button>
		</div>
	</div>
</x-dialog>
	`,
	css:``,
	js:`export default{
    data(){
        return {
            dialogVisible2:false
        }
    },
    methods:{
        showDialog2(){
            this.dialogVisible2 = true
		},
        cancel(){
            alert('取消')
            this.dialogVisible2 = false
		},
        confirm(){
            alert('确认')
        }
    }
}`
}



export { dialogText,dialogText2,dialogText3 }