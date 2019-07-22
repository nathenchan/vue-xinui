<template>
	<div class="x-pagination">
		<span class="prebtn">
			<svg viewBox="0 0 1024 1024" width="20" transform="translate(0,5)" >
				<path d="M650.721435 191.690834c-8.782014 0-17.565051 3.235694-24.26873 9.708106L328.968383 488.573451c-13.408381 12.932544-13.408381 33.9226 0 46.855144l297.485345 287.172465c13.408381 12.9438 35.130102 12.9438 48.538483 0 13.408381-12.932544 13.408381-33.9226 0-46.855144L401.774573 512.001023l273.215592-263.747963c13.408381-12.932544 13.408381-33.9226 0-46.855144C668.286486 194.926528 659.504472 191.68981 650.721435 191.690834z" ></path>
			</svg>
		</span>
		<span v-show="count <= pageSize" class="current-page">1</span>
		<span v-show="count > pageSize" class="page-btns" v-for="(item,index) in maxBtnNum" :class="index+1 == page && 'current-page'" @click="pageChange(index+1)">{{index+1}}</span>
		<!-- <span class="stride-btn page-btns">...</span> -->
		<span class="last-page-btn">{{Math.ceil(this.count/this.pageSize)}}</span>
		<span class="nextbtn">
			<svg viewBox="0 0 1024 1024" width="20" transform="translate(0,5)">
				<path d="M372.679931 191.690834c8.782014 0 17.565051 3.235694 24.26873 9.708106l297.484322 287.175535c13.408381 12.932544 13.408381 33.9226 0 46.855144l-297.485345 287.172465c-13.408381 12.9438-35.130102 12.9438-48.53746 0-13.408381-12.932544-13.408381-33.9226 0-46.855144l273.215592-263.744893L348.411201 248.25306c-13.408381-12.932544-13.408381-33.9226 0-46.855144C355.11488 194.926528 363.897917 191.68981 372.679931 191.690834z" ></path>
			</svg>
		</span>
	</div>
</template>

<script>
export default{
	name:'x-pagination',
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
		pageCount:{ // 最多的分页数字按钮
			type:Number,
			default:8
		},
		background:{ // 按钮背景色
			type:Boolean,
			default:true
		},
		jump:{ // 跳转功能
			type:Boolean,
			default:true
		}
	},
	data(){
		return {
			nowPage:this.page
		}
	},
	computed:{
		maxBtnNum(){
			return Math.ceil(this.count/this.pageSize) > this.pageCount ? this.pageCount : Math.ceil(this.count/this.pageSize)
		}
	},
	methods:{
		pageChange(page){ // 当前页变更
			this.nowPage = page
			this.$emit('update:page',this.nowPage)
		}
	}
}
</script>

<style lang="scss">
.x-pagination{
	span{
		cursor: pointer;
		user-select:none;
		font-size: 16px;
	}
	.prebtn,.nextbtn{
		
	}
	.page-btns{
		margin-right: 10px;
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
</style>