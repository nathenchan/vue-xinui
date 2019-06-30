<template>
	<div class="x-ring" :style="{width:width+'px',height:height+'px'}">
		<svg :width="width" :height="height">
			<g>
				<circle class="x-ring-bg" cx="50%" cy="50%" :r="r" :stroke-width="strokeWidth" :stroke="bgColor" fill="none"></circle>
				<circle class="x-ring-bar" cx="50%" cy="50%" :r="r" :stroke-width="strokeWidth" :stroke="barColor"  fill="none" :stroke-dasharray="dashArray" :stroke-dashoffset="dashOffset" :stroke-linecap="linecap"></circle>
			</g>
		</svg>
		<div class="x-ring-slot">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default{
	name:'x-ring',
	props:{
		width:String,
		height:String,
		r:Number, // 最大值 = width/2-strokeWidth 
		strokeWidth:{ // 最大值 = width/2-r
			type:Number,
			default:5
		},
		progress:{
			type:Number,
			default:0
		},
		bgColor:{
			type:String,
			default:'#e4e4e4'
		},
		barColor:{
			type:String,
			default:'#2196F3'
		},
		linecap:{
			type:String,
			default:'round'
		}
	},
	computed:{
		dashArray(){
			return Math.round(2*3.142*this.r)
		},
		dashOffset(){
			let progress = this.progress/100
			return  Math.round((1 - progress) * (2*3.142*this.r))
			// 0 =>    (1 - progress) * (2*3.142*this.r) => 565.56
		    // 0.5 =>  (1 - 0.5) * (2*3.142*this.r) => 565.56/2
			// 1 =>    (1 - progress) * (2*3.142*this.r) => 0
		}
	}
}
</script>
