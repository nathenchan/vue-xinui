const countDownText = {
	tips:'',
	html:`<x-count-down @finish="timeEnd" ref="countdown" />`,
	css:``,
	js:`export default{
    data(){
      return {
        num:null
      }
    },
    methods:{
      timeEnd(){
        console.log('倒计时结束')
      }
    },
    mounted(){
      // 假设是异步获取的秒数
      setTimeout(_=>{
        this.num = 10
        this.$refs.countdown.init(this.num) // 开始倒计时          
      },50)   
    }
}`
}


export { countDownText }