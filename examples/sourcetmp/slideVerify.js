const slideVerifyText = {
	tips:'',
	html:`<x-slide-verify @preload="fetchData" @finish="success" @error="verifyError" :maxError="3" :verifyData="slideverifyData" />`,
	css:``,
	js:`export default{
  data(){
    return {
      // 服务端返回的拼图数据格式
      slideverifyData:{
        imgs:{
            dragImg:'',  // 碎片图
            dragBg:'' // 背景图
        },
        dx:null, // 正确位置
        dragImgWidth:0, // 碎片图宽度        
        dragBgWidth:0 // 背景图宽度
      }
    }
  },
  methods:{
    fetchData(){ // 获取数据
      axios.get('http://xxx/slideverify').then(res=>{
        this.slideverifyData = res.data
      })
    },
    success(){
      console.log('验证完成')
    },
    verifyError(errorNum){
      console.log('错误了'+errorNum+'次')
    }
  }
}`
}

const slideVerifyText2 = {
  tips:'',
  html:`<x-button :btnStyle="{width:'80px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="showDialog">验证弹窗</x-button>

<x-dialog :visible.sync="verifyVisible" :dialogStyle="{ width:'50%',top:'10vh' }" title="弹窗形式" >
  <x-slide-verify @preload="fetchData" @finish="success" @error="verifyError" :maxError="5" :verifyData="slideverifyData" />
</x-dialog>
  `,
  css:``,
  js:`export default{
  data(){
    return {
      verifyVisible:false
    }
  },
  methods:{
    fetchData(){ // 获取数据
      axios.get('http://xxx/slideverify').then(res=>{
        this.slideverifyData = res.data
      })
    },
    success(){
      console.log('验证完成')
    },
    verifyError(errorNum){
      console.log('错误了'+errorNum+'次')
    }
  }
}`
}

export { slideVerifyText,slideVerifyText2 }