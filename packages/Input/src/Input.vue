<template>
	<div class="x-input">
		<div v-if="$slots.aside" class="x-input-page">
			<div class="x-input-aside" :style="{width:asideWidth}">
				<slot name="aside"></slot>
			</div>
			<div :style="{marginLeft:asideWidth}">
				<input :class="[{error:errorShow},'x-input-self']" :type="type" :value="value" @input="inputVerify" :placeholder="placeholder" :disabled="disabled" @blur="blur" @focus="focus">
				<ul class="x-tips-list" v-show="errorShow">
					<li v-for="item in myVerify" :class="[{right:item.status}]">
						<Sigh/>
						<p>{{item.text}} </p>
					</li>
				</ul>
			</div>
		</div>
		<div v-else>
			<input :class="[{error:errorShow},'x-input-self']" :type="type" :value="value" @input="inputVerify" :placeholder="placeholder" :disabled="disabled" @blur="$emit('blur',$event.target.value)" @focus="focus">
			<ul class="x-tips-list" v-show="errorShow">
				<li v-for="item in myVerify">
					<Sigh/>
					<p>{{item.text}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Sigh from './Sigh.vue'
export default{
	components:{Sigh},
	name:'x-input',
	model:{
		prop:'value',
		event:'input'
	},
	props:{
		type:{
			type:String,
			default:'text'
		},
		value:{
			type:[Number,String],
			default:''
		},
		placeholder:{
			type:String,
			default:''
		},
		disabled:{
			type:Boolean,
			default:false
		},
		asideWidth:{
			type:String,
			default:'100px'
		},
		verify:{
			type:Array,
			default(){
				return null
			}
		}
	},
	data(){
		return {
			errorText:'',
			errorShow:false,
			myVerify:this.verify,
			result:false
		}
	},
	methods:{
		verifyCommon(val){
			this.myVerify.forEach((el,index)=>{
				switch(el.type){
					case 'required':
						!val.length ? this.myVerify[index]['status'] = 0 : this.myVerify[index]['status'] = 1 
					break;
					case 'test':
						 el.reg.test(val) ? this.myVerify[index]['status'] = 1 : this.myVerify[index]['status'] = 0
					break;
					case 'length':
						if(val.length>el.max || val.length<el.min){
							this.myVerify[index]['status'] = 0
						}else{
							this.myVerify[index]['status'] = 1
						}
					break;
				}
			})
			
			this.result = this.myVerify.every((el)=>el.status === 1)
			this.errorShow = !this.result
		},
		blur(e){
			let val = e.target.value

			if(this.myVerify){
				
				this.verifyCommon(val)
				
				this.$emit('update:result',this.result)
			}
			this.$emit('blur',val)

		},
		focus(e){
			if(this.myVerify && this.myVerify.some((el)=>el.status != 1) ){ this.errorShow = true }
			this.$emit('focus',e)
		},
		inputVerify(e){

			let val = e.target.value

			if(this.myVerify){ this.verifyCommon(val) }

			this.$emit('input',e.target.value)

		}
	},
	created(){
		if(this.myVerify){
			this.myVerify.forEach(el=>{
				this.$set(el,'status',0)
			})
		}
	}
}
</script>

<style lang="scss">
.x-input{
	position: relative;
	width:100%;
	box-sizing:border-box;
	.x-input-self{
		display: block;
		width:100%;
		font-size: 14px;
		line-height:34px;
		text-indent:1em;
		border:1px solid #e3e3e3;
		border-radius:4px;
		transition:.3s;
		&:focus{
			border-color:#409eff;
		}
		&.error{
			border-color:#d91e18;
		}
	}
	.x-input-page{
		&:after{
			content:"";
			display:block;
			height:0;
			clear:both;
			visibility:hidden;
		}
	}
	.x-input-aside{
		padding-right: 10px;
		float: left;
		line-height:34px;
		text-align:right;
		box-sizing: border-box;
	}
	.x-input-error-text{
		text-indent: 1em;
		margin:6px 0;
		color:#d91e18;
		font-size: 12px;
	}
	.x-tips-list{
		li{
			margin:12px 0;
			&:after{
				content:"";
				display:block;
				height:0;
				clear:both;
				visibility:hidden;
			}
			svg{
				float: left;
			}
			p{
				float: left;
				padding-top: 4px;
				font-size: 14px;
			}
		}
		.right *{
			fill:#009688;
			color:#009688;
		}
	}
}
</style>
