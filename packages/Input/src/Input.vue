<template>
	<div class="x-input">
		<div v-if="$slots.aside" class="x-input-page">
			<div class="x-input-aside" :style="{width:asideWidth}">
				<slot name="aside"></slot>
			</div>
			<div :style="{marginLeft:asideWidth}">
				<input :class="[{error:errorShow},'x-input-self']" :type="type" v-model="value" @input="inputVerify" :placeholder="placeholder" :disabled="disabled" @blur="blur" @focus="focus">
				<ul class="x-tips-list" v-show="errorShow">
					<li v-for="item in myVerify" :class="[{right:item.status}]">
						<Sigh/>
						<p>{{item.text}} </p>
					</li>
				</ul>
			</div>
		</div>
		<div v-else>
			<input :class="[{error:errorShow},'x-input-self']" :type="type" v-model="value" @input="inputVerify" :placeholder="placeholder" :disabled="disabled" @blur="blur" @focus="focus">
			<ul class="x-tips-list" v-show="errorShow">
				<li v-for="item in myVerify" :class="[{right:item.status}]">
					<Sigh/>
					<p>{{item.text}} </p>
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
			value:'',
			errorText:'',
			errorShow:false,
			myVerify:this.verify,
			result:false
		}
	},
	methods:{
		checkVerify(){ // 校验数据，显示报错信息
			this.myVerify.forEach((el,index)=>{
				switch(el.type){
					case 'required':
						!this.value.length ? this.myVerify[index]['status'] = 0 : this.myVerify[index]['status'] = 1 
					break;
					case 'test':
						 el.reg.test(this.value) ? this.myVerify[index]['status'] = 1 : this.myVerify[index]['status'] = 0
					break;
					case 'length':
						if(this.value.length>el.max || this.value.length<el.min){
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
			if(this.myVerify){
				
				this.checkVerify()
				
				this.$emit('update:result',this.result)
			}
			this.$emit('blur',this.value)

		},
		focus(e){
			if(this.myVerify && this.myVerify.some((el)=>el.status != 1) ){ this.errorShow = true }
			this.$emit('focus',e)
		},
		inputVerify(e){

			if(this.myVerify){ this.checkVerify() }

			this.$emit('input',this.value)

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
		line-height:32px;
		text-indent:1em;
		border:1px solid #e3e3e3;
		border-radius:4px;
		transition:.3s;
    	box-sizing: border-box;
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
		line-height:32px;
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
			margin:8px 0;
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
				color:#d91e18;
			}
		}
		.right *{
			fill:#009688;
			color:#009688;
		}
	}
}
</style>
