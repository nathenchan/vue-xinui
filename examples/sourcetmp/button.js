const buttonText = {
	tips:`使用btnStyle属性设置按钮的样式，理论上支持设置所有css属性，注意驼峰格式书写，例如css中的font-size需要写成fontSize`,
	html:`<x-button :btnStyle="{width:'80px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" >确定</x-button>
<x-button :btnStyle="{width:'80px',height:'30px',borderRadius:'0px',background:'#696969',color:'#fff',fontSize:'12px'}" >取消</x-button>
<x-button :disabled="btnDisabled" :btnStyle="{width:'80px',height:'30px',borderRadius:'0px',background:'#999',color:'#fff',fontSize:'12px'}" >禁用</x-button>`,
	css:``,
	js:`export default{
    data(){
      return {
  	btnDisabled:true
      }
    }
}`
}

export { buttonText }