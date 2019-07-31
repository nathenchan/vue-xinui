<template>
	<div class="x-select" @click="showList">
		<p class="x-select-value">{{selectLabel}}</p>
		<Arrow :class="{down:listShow}"/>
		<transition name="fade">
			<div class="x-select-list" v-show="listShow">
				<x-option v-for="item in this.$slots.default" :key="item.componentOptions.propsData.value" :label="item.componentOptions.propsData.label" :value="item.componentOptions.propsData.value" @chose="update" />
			</div>
		</transition>
	</div>
</template>

<script>

// change event
import Arrow from './Arrow.vue'

export default{
	name:'x-select',
	components:{Arrow},
	inheritAttrs:false,
	model:{
		prop:'value',
		event:'change'
	},
	props:{
		placeholder:{
			type:String,
			default:'选择'
		}
	},
	data(){
		return {
			listShow:false
		}
	},
	methods:{
		showList(){
			this.listShow = !this.listShow
		},
		update(val){
			this.$emit('change',val)
			this.listShow = false
		}
	},
	computed:{
		selectValue(){
			return this.$attrs.value
		},
		selectLabel(){
			var myval = null
			this.$slots.default.forEach(el=>{
				let val = el.componentOptions.propsData.value
				if(val == this.selectValue){
					myval =  el.componentOptions.propsData.label
				}
			})
			return myval
		}
	}
}
</script>

<style lang="scss">
.x-select{
	position: relative;
	max-width:140px;
	min-height:10px;
	border:1px solid #e3e3e3;
	border-radius:4px;
	padding:8px 14px;
	cursor: pointer;
	*{
		user-select:none;
	}
	&:hover{
		border:1px solid #409eff;
	}
}
.x-select-list{
    position: absolute;
    width: 100%;
    left: 0;
    top:45px;
    background: #fff;
	border:1px solid #e3e3e3;
	border-radius:4px;
	&:after{
		position: absolute;
		left: 20px;
    	top: -12px;
		content:'';
		border:6px solid #e3e3e3;
		border-color: transparent transparent #e3e3e3 transparent ;
	}
}
.x-select-value{
	width:90%;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.x-option{
	text-indent: 1em;
	line-height: 34px;
	cursor: pointer;
	width:100%;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	&:hover{
		background:#f1f1f1;
	}
}
.x-select-arrow{
	position: absolute;
	right:4px;
	top:6px;
	transition:.15s;
	&.down{
		transform:rotate(180deg);
	}
}

.x-select{
	/* fade */
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .2s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
	/* fadefast */
	.fadefast-enter-active, .fadefast-leave-active {
	  transition: opacity .2s;
	}
	.fadefast-enter, .fadefast-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
}
</style>
