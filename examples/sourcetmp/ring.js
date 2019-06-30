const ringText = {
	tips:`圆的中心点始终水平垂直居中，建议r半径最大值 <= width/2-strokeWidth，stroke-width描边宽最大值 <= width/2-r  `,
	html:`<x-ring width="100" height="100" :r="40" :stroke-width="8" :progress="progress1" :bgColor="'#e5e5e5'" :barColor="'#03a9f4'" linecap="round">
	<p class="progress-text">{{progress1}}%</p>
</x-ring>`,
	css:`.progress-text{
	position: absolute;
	left:0;
	top:0;
	text-align: center;
	width:100%;
	line-height: 100px;
	z-index: 9;
}`,
	js:`export default{
    data(){
      return {
		progress1:0
      }
    },
    mounted(){
    	setTimeout(_=>{
    		this.progress1 = 90
    	},1000)
    }
}`
}

export { ringText }