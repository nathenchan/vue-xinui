const directive = {
	tips:'使用v-loading指令即可',
	html:`<div class="show-page" v-loading="loadingshow" ></div>`,
	css:``,
	js:`export default{
    data(){
      return {
        loadingshow: true
      }
    }
}`
}

const loadingMethod = {
	tips:'全局方法，传入loadingType可选择不同动画样式',
	html:`<button @click="fullScreenLoading">整页加载</button>`,
	css:``,
	js:`export default{
    methods:{
      fullScreenLoading(){
        var oLoading = this.$loading({
          loadingType:'bounce'
        })
        setTimeout(_=>{
          oLoading.close()
        },2000)
      }
    }
 }`
}

export { directive,loadingMethod }