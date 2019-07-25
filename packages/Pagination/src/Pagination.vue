<template>
	<div class="x-pagination">
		<div class="btn-page onlyone" v-show="pageNum <= 1">
			<span class="prebtn"><PreBtn/></span>
			<span class="page-btns current-page" >1</span>
			<span class="nextbtn" ><NextBtn/></span>
		</div>
		<div class="btn-page normal-page" v-show="pageNum>1 && pageNum<=pageCount">
			<span class="prebtn" @click="pageChange(--nowPage)"><PreBtn/></span>
			<span :class="[{'current-page':(index+1)==nowPage},'page-btns']" v-for="(item,index) in pageNum" @click="pageChange(index+1)">{{index+1}}</span>
			<span class="nextbtn" @click="pageChange(++nowPage)"><NextBtn/></span>
		</div>
		<div class="btn-page" v-show="pageNum>pageCount">
			<span class="prebtn" @click="pageChange(--nowPage)"><PreBtn/></span>
			<p class="btn-page" v-show="nowPage-3 <= 1">
				<span :class="[{'current-page':(index+1)==nowPage},'page-btns']" v-for="(item,index) in pageCount-1" @click="pageChange(index+1)">{{index+1}}</span>
				<span>...</span>
				<span @click="pageChange(pageNum)">{{pageNum}}</span>
			</p>
			<p class="btn-page" v-show="nowPage-3 > 1 && nowPage+3 < pageNum">
				<span class="page-btns" @click="pageChange(1)">1</span>
				<span v-show="nowPage-3 >2">...</span>
				<span v-for="item in [nowPage-3,nowPage-2,nowPage-1]" class="page-btns" @click="pageChange(item)">{{item}}</span>
				<span class="page-btns current-page" @click="pageChange(nowPage)">{{nowPage}}</span>
				<span v-for="item in [nowPage+1,nowPage+2,nowPage+3]" class="page-btns" @click="pageChange(item)">{{item}}</span>
				<span v-show="nowPage+4 < pageNum">...</span>
				<span class="page-btns" @click="pageChange(pageNum)">{{pageNum}}</span>
			</p>
			<p class="btn-page" v-show="nowPage+3 == pageNum">
				<span class="page-btns"  @click="pageChange(1)">1</span>
				<span>...</span>
				<span v-for="item in [nowPage-3,nowPage-2,nowPage-1]" class="page-btns" @click="pageChange(item)">{{item}}</span>
				<span class="page-btns current-page" @click="pageChange(nowPage)">{{nowPage}}</span>
				<span v-for="item in [nowPage+1,nowPage+2,nowPage+3]" class="page-btns" @click="pageChange(item)">{{item}}</span>
			</p>
			<p class="btn-page" v-show="nowPage+2 == pageNum">
				<span class="page-btns" @click="pageChange(1)">1</span>
				<span>...</span>
				<span v-for="item in [nowPage-3,nowPage-2,nowPage-1]" class="page-btns" @click="pageChange(item)">{{item}}</span>
				<span class="page-btns current-page" @click="pageChange(nowPage)">{{nowPage}}</span>
				<span v-for="item in [nowPage+1,nowPage+2]" class="page-btns" @click="pageChange(item)">{{item}}</span>
			</p>
			<p class="btn-page" v-show="nowPage+1 == pageNum">
				<span class="page-btns" @click="pageChange(1)">1</span>
				<span>...</span>
				<span v-for="item in [nowPage-5,nowPage-4,nowPage-3,nowPage-2,nowPage-1]" class="page-btns" @click="pageChange(item)">{{item}}</span>
				<span class="page-btns current-page" @click="pageChange(nowPage)">{{nowPage}}</span>
				<span v-for="item in [nowPage+1]" class="page-btns" @click="pageChange(item)">{{item}}</span>
			</p>
			<p class="btn-page" v-show="nowPage == pageNum">
				<span class="page-btns" @click="pageChange(1)">1</span>
				<span>...</span>
				<span v-for="item in [nowPage-6,nowPage-5,nowPage-4,nowPage-3,nowPage-2,nowPage-1]" class="page-btns" @click="pageChange(item)">{{item}}</span>
				<span class="page-btns current-page" @click="pageChange(nowPage)">{{nowPage}}</span>
			</p>
			<span class="nextbtn" @click="pageChange(++nowPage)"><NextBtn/></span>
			
			<p class="jump-page" v-if="jump">
				<input type="text" placeholder="页数" v-model.number="nowPage" @blur="jumpValChange">
			</p>
		</div>
	
	</div>
</template>

<script>

import PreBtn from './PreBtn.vue'
import NextBtn from './NextBtn.vue'

export default{
	name:'x-pagination',
	components:{PreBtn,NextBtn},
	props:{
		page:{ // 当前页
			type:Number,
			default:1
		},
		count:{ // 数据总条数
			type:Number,
			default:0
		},
		jump:{ // 跳转功能
			type:Boolean,
			default:true
		},
		pageSize:{
			type:Number,
			default:8
		}
	},
	data(){
		return {
			nowPage:this.page,
			pageCount:8 // 默认分页按钮数
		}
	},
	computed:{
		pageNum(){ // 总共分页数
			return Math.ceil(this.count/this.pageSize)
		}
	},
	methods:{
		jumpValChange(e){
			if(this.nowPage > this.pageNum){
				this.nowPage = this.pageNum
			}
			if(this.nowPage < 1){
				this.nowPage = 1
			}
			this.$emit('change',this.nowPage)
		},
		pageChange(page){ // 当前页变更
			if( page <= 0 ){
				page = 1
			}else if( page >= this.pageNum ){
				page = this.pageNum
			}
			this.nowPage = page
			this.$emit('update:page',this.nowPage)
			this.$emit('change',this.nowPage)
		}
	}
}
</script>

<style lang="scss">
.x-pagination{
	overflow: hidden;
	.btn-page{
		float: left;
		span{
			float: left;
			padding:0px 12px;
			line-height:34px;
			border: 1px solid #ddd;
			cursor: pointer;
			transition: all .15s;
			user-select:none;
			font-size: 16px;
			background-color: #f4f4f5;
			box-sizing:border-box;
		    color: #606266;
		    &.current-page{
				background: #2d98e6;
				border: 1px solid #2d98e6;
				color: #fff;
			}
		}
		.page-btns:last-of-type{
			margin-right: 0;
		}
	}
	.onlyone{
		*{
			cursor:not-allowed;
		}
	}
	.page-btns{
		&:hover{
			background: #2d98e6;
    		color: #fff;
		}
	}
	.last-page-btn{
		&:hover{
			color:#007faa;
		}
	}
	.jump-page{
		float: left;
		margin-left: 20px;
		input{
			max-width:50px;
			line-height: 34px;
			text-align: center;
			border-radius: 4px;
			border:1px solid #dcdfe6;
		}
	}
}
</style>