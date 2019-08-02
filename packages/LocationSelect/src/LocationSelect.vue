<template>
	<div class="x-location-select">
		<div class="location-page">
			<p class="location-text">{{provinceName}}</p>
			<svg @click="provinceShow = !provinceShow" class="x-arrow" viewBox="0 0 1024 1024" width="24"><path d="M762.76 371.92l-2.68-2.68a48.24 48.24 0 0 0-68 0l-180 180-180-180a48.24 48.24 0 0 0-68 0l-2.68 2.68a48.24 48.24 0 0 0 0 68l214.65 214.84a53.19 53.19 0 0 0 71.9 0L762.76 440a48.24 48.24 0 0 0 0-68.08z" fill="#c0c4cc" ></path></svg>
			<div class="list-page" v-show="provinceShow">
				<ul class="list">
					<li v-for="item in locationData" @click="choseProvince(item.name)">{{item.name}}</li>
				</ul>
			</div>
		</div>
		<div class="location-page" v-show="noMunicipality">
			<p class="location-text">{{cityName}}</p>
			<svg @click="cityShow = !cityShow" class="x-arrow" viewBox="0 0 1024 1024" width="24"><path d="M762.76 371.92l-2.68-2.68a48.24 48.24 0 0 0-68 0l-180 180-180-180a48.24 48.24 0 0 0-68 0l-2.68 2.68a48.24 48.24 0 0 0 0 68l214.65 214.84a53.19 53.19 0 0 0 71.9 0L762.76 440a48.24 48.24 0 0 0 0-68.08z" fill="#c0c4cc" ></path></svg>
			<div class="list-page" v-show="cityShow">
				<ul class="list"  v-show="cityList.length">
					<li v-for="item in cityList" @click="choseCity(item.name)">{{item.name}}</li>
				</ul>
				<p class="no-data" v-show="cityList.length == 0">
					no Data
				</p>
			</div>
		</div>
		<div class="location-page">
			<p class="location-text">{{areaName}}</p>
			<svg @click="areaShow = !areaShow" class="x-arrow" viewBox="0 0 1024 1024" width="24"><path d="M762.76 371.92l-2.68-2.68a48.24 48.24 0 0 0-68 0l-180 180-180-180a48.24 48.24 0 0 0-68 0l-2.68 2.68a48.24 48.24 0 0 0 0 68l214.65 214.84a53.19 53.19 0 0 0 71.9 0L762.76 440a48.24 48.24 0 0 0 0-68.08z" fill="#c0c4cc" ></path></svg>
			<div class="list-page" v-show="areaShow">
				<ul class="list" v-show="areaList.length">
					<li v-for="item in areaList" @click="choseArea(item.name)">{{item.name}}</li>
				</ul>
				<p class="no-data" v-show="areaList.length == 0">
					no Data
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'x-location-select',
	model:{
		prop:'value',
		event:'change'
	},
	props:{
		locationData:{
			type:[Array,Object],
			default:null
		}
	},
	data(){
		return {
			provinceName:'',
			cityName:'',
			areaName:'',
			provinceShow:false,
			cityShow:false,
			areaShow:false,
			noMunicipality:true
		}
	},
	computed:{
		cityList(){ // 市列表，根据所选的省份而定
			let cityList = []
			this.locationData.forEach(el=>{
				if(el.name == this.provinceName){
					cityList = el.cityList
				}
			})
			return cityList
		},
		areaList(){  // 区列表，根据所选的市而定
			let areaList = []
			this.locationData.forEach(el=>{
				el.cityList.forEach(el2=>{
					if(el2.name == this.cityName){
						areaList = el2.areaList
					}
				})
			})
			return areaList
		},
		fullName(){
			return this.provinceName + this.cityName + this.areaName
		}
	},
	methods:{
		isMunicipality(){
			if(this.provinceName.includes('北京') || this.provinceName.includes('天津市') || this.provinceName.includes('上海市') || this.provinceName.includes('重庆市')){
				return true
			}
			return false
		},
		update(){
			this.isMunicipality() ?  this.$emit('change',this.fullName.slice(3)) : this.$emit('change',this.fullName)
		},
		choseProvince(name){
			this.provinceName = name
			this.provinceShow = false
			if( this.isMunicipality() ){
				this.noMunicipality = false
				this.cityName = name
			}else{
				this.noMunicipality = true
			}
			this.update()
		},
		choseCity(name){
			this.cityName = name
			this.cityShow = false
			this.update()
		},
		choseArea(name){
			this.areaName = name
			this.areaShow = false
			this.update()
			this.$emit('lastChange')
		}
	},
	watch:{
		provinceName(val,oldVal){
			if( !this.isMunicipality() ){
				this.cityName = ''
			}
			this.areaName = ''
			this.areaShow = false
			this.cityShow = false
			this.update()
		},
		cityName(val,oldVal){
			this.areaName = ''
			this.areaShow = false
			this.update()
		}
	}
}
</script>

<style lang="scss">
.x-location-select{
	&:after{
		content: '';
		visibility: hidden;
		height:0;
		display: block;
		clear:both;
	}
	.location-page{
		float: left;
		position: relative;
		margin-right: 10px;
		border:1px solid #e3e3e3;
		border-radius:4px;
		width:160px;
		height:30px;
		line-height:30px;
		&:hover{
			border-color:#2d98e6;
		}
		.location-text{
			text-indent:1em;
		}
	}
	.list-page{
		position: absolute;
		top:31px;
		width:100%;
		max-height:280px;
		overflow-y:scroll;
		text-indent:1em;
		border:1px solid #e3e3e3;
		border-radius:4px;
		background: #fff;
		user-select:none;
		li{
			cursor: pointer;
			&:hover{
				background:#f1f1f1;
			}
		}
	}
	::-webkit-scrollbar{
		width:6px;
		background:transparent;
	} 
	::-webkit-scrollbar-thumb{
		height:4px;
		background:#2d98e6;
		border-radius:4px;
	}
	svg{
		cursor: pointer;
	}
	.x-arrow{
		position: absolute;
		right:2px;
		top:4px;
	}
	.no-data{
		padding:10px 0;
		text-align: center;
	}
}
</style>
