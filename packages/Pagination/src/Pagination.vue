<template>
	<div :class="[{hasbg:background},'x-pagination']">
		<div class="btn-page onlyone" v-show="pageNum <= 1">
			<span class="prebtn"><PreBtn/></span>
			<span class="page-btns current-page" >1</span>
			<span class="nextbtn" ><NextBtn/></span>
		</div>

		<div class="btn-page" v-show="pageNum>1 && pageNum<=pageCount">
			<span class="prebtn" @click="pageChange(--nowPage)"><PreBtn/></span>
			<span :class="[{'current-page':(index+1)==nowPage},'page-btns']" v-for="(item,index) in pageNum" @click="pageChange(index+1)">{{index+1}}</span>
			<span class="nextbtn" @click="pageChange(++nowPage)"><NextBtn/></span>
		</div>
		
		<div class="btn-page" v-show="pageNum>pageCount">
			<span class="prebtn" @click="pageChange(--nowPage)"><PreBtn/></span>
			<p class="btn-page" v-show="nowPage-3 <= 1">
				<span :class="[{'current-page':(index+1)==nowPage},'page-btns']" v-for="(item,index) in pageCount-1" @click="pageChange(index+1)">{{index+1}}</span>
				<span :class="[{'current-page':nowPage == pageNum},'page-btns']" @click="pageChange(pageNum)">{{pageNum}}</span>
			</p>
			<p class="btn-page" v-show="nowPage-3 > 1 && nowPage+3 < pageNum">
				<span class="page-btns" @click="pageChange(1)">1</span>
				
				<span v-for="item in [nowPage-3,nowPage-2,nowPage-1]" class="page-btns" @click="pageChange(item)">{{item}}</span>
				<span class="page-btns current-page" @click="pageChange(nowPage)">{{nowPage}}</span>
				<span v-for="item in [nowPage+1,nowPage+2,nowPage+3]" class="page-btns" @click="pageChange(item)">{{item}}</span>

				<span class="page-btns" @click="pageChange(pageNum)">{{pageNum}}</span>
			</p>
			<p class="btn-page" v-show="nowPage+3 == pageNum">
				<span class="page-btns"  @click="pageChange(1)">1</span>

				<span v-for="item in [nowPage-3,nowPage-2,nowPage-1]" class="page-btns" @click="pageChange(item)">{{item}}</span>
				<span class="page-btns current-page" @click="pageChange(nowPage)">{{nowPage}}</span>
				<span v-for="item in [nowPage+1,nowPage+2,nowPage+3]" class="page-btns" @click="pageChange(item)">{{item}}</span>

			</p>
			<p class="btn-page" v-show="nowPage+2 == pageNum">
				<span class="page-btns" @click="pageChange(1)">1</span>
				<span v-for="item in [nowPage-3,nowPage-2,nowPage-1]" class="page-btns" @click="pageChange(item)">{{item}}</span>
				<span class="page-btns current-page" @click="pageChange(nowPage)">{{nowPage}}</span>
				<span v-for="item in [nowPage+1,nowPage+2]" class="page-btns" @click="pageChange(item)">{{item}}</span>
			</p>
			<p class="btn-page" v-show="nowPage+1 == pageNum">
				<span class="page-btns" @click="pageChange(1)">1</span>
				<span v-for="item in [nowPage-5,nowPage-4,nowPage-3,nowPage-2,nowPage-1]" class="page-btns" @click="pageChange(item)">{{item}}</span>
				<span class="page-btns current-page" @click="pageChange(nowPage)">{{nowPage}}</span>
				<span v-for="item in [nowPage+1]" class="page-btns" @click="pageChange(item)">{{item}}</span>
			</p>
			<p class="btn-page" v-show="nowPage == pageNum">
				<span class="page-btns" @click="pageChange(1)">1</span>
				<span v-for="item in [nowPage-6,nowPage-5,nowPage-4,nowPage-3,nowPage-2,nowPage-1]" class="page-btns" @click="pageChange(item)">{{item}}</span>
				<span class="page-btns current-page" @click="pageChange(nowPage)">{{nowPage}}</span>
			</p>
			<span class="nextbtn" @click="pageChange(++nowPage)"><NextBtn/></span>
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
		pageSize:{ // 一页的数据条数
			type:Number,
			default:8
		},
		count:{ // 数据总条数
			type:Number,
			default:0
		},
		jump:{ // 跳转功能
			type:Boolean,
			default:true
		},
		background:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return {
			nowPage:this.page,
			pageCount:8
		}
	},
	computed:{
		pageNum(){ // 总共分页数
			return Math.ceil(this.count/this.pageSize)
		}
	},
	methods:{
		pageChange(page){ // 当前页变更
			if( page <= 0 ){
				page = 1
			}else if( page >= this.pageNum ){
				page = this.pageNum
			}
			this.nowPage = page
			this.$emit('update:page',this.nowPage)
		}
	}
}
</script>

<style lang="scss">
.x-pagination{
	user-select:none;
	span{
		cursor: pointer;
		user-select:none;
		font-size: 16px;
	}
	.btn-page{
		display: inline-block;
	}
	.onlyone{
		*{
			cursor:not-allowed;
		}
		.page-btns{
			margin-right: 0;
		}
	}
	.prebtn,.nextbtn{
		
	}
	.page-btns{
		margin-right: 10px;
		&:last-of-type{
			margin-right: 0;
		}
		&:hover{
			color:#007faa;
		}
	}
	.current-page{
		color:#007faa;
	}
	.stride-btn{
		
	}
	.last-page-btn{
		&:hover{
			color:#007faa;
		}
	}
}
.x-pagination.hasbg{
	
}
</style>