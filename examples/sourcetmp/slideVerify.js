const slideVerify = {
	tips:'目前此滑动验证组件完全由前端验证，错误次数达到最大值时，将无法继续滑动,默认允许出错次数为10次',
	html:`<x-slide-verify @finish="success" @error="verifyError" maxerror="3"></x-slide-verify>`,
	css:``,
	js:`export default{
  methods:{
    success(){
      console.log('验证完成')
    },
    verifyError(errorNum){
      console.log('错误了'+errorNum+'次')
    }
  }
}`
}

const slideVerify2 = {
  tips:'',
  html:`<x-button :btnStyle="{width:'80px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="showDialog">验证弹窗</x-button>

<x-dialog :visible.sync="verifyVisible" :dialogStyle="{ width:'50%',top:'10vh' }" title="弹窗形式">
  <x-slide-verify @finish="success" @error="verifyError" maxerror="3"></x-slide-verify>
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
    success(){
      console.log('验证完成')
    },
    verifyError(errorNum){
      console.log('错误了'+errorNum+'次')
    }
  }
}`
}

export { slideVerify,slideVerify2 }