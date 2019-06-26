<template>
	<div class="x-upload" @click="showFileChose" >
		<slot v-if="!drag"></slot>
		<DragUpload v-else @upload="uploadFile">
			<slot></slot>
		</DragUpload>
		<div class="progress">
			<div class="bar" ref="bar"></div>
		</div>
		<input type="file" name="file" class="x-file" ref="fileinput" @change="uploadFile" @click.stop>
	</div>
</template>

<script>
	
	import DragUpload from './DragUpload.vue'
	import upload from './ajax.js'
	
	export default{
		components:{
			DragUpload
		},
		props:{
			size:{
				type:Number,
				default:500
			},
			fileType:{
				type:Array,
				default() {
			    	return []
			    }
			},
			autoUpload:{
				type:Boolean,
				default:true
			},
			params:{
				type:Object,
				default(){
					return {}
				}
			},
			headers:{
				type:Object,
				default(){
					return {}
				}
			},
			uploadUrl:{
				type:String,
				default:''
			},
			name:{
				type:String,
				default:'file'
			},
			drag:{
				type:Boolean,
				default:false
			},
			beforeUpload:Function,
			onSuccess:Function,
			onError:Function
		},
		name:'x-upload',
		data(){
			return {
				uploading:false,
			}
		},
		methods:{
			resetStatus(){ // 重置状态
				this.$refs.bar.style.width = '0%'
			},
			showFileChose(){
				this.$refs.fileinput.value = null
				this.$refs.fileinput.click() // 需阻止fileinput冒泡，防止触发2次
			},
			uploadFile(e){
				var file = e.target.files[0]
				
				this.resetStatus()

				// 文件类型与大小判断
				if( this.size < file.size/1000  ){
					this.onError('文件过大')
					return false
				}

				if( this.fileType.length && !(this.fileType.includes(file.type.slice(6))) ){
					this.onError('文件类型不符')
					return false
				}

				if(this.beforeUpload) this.beforeUpload(file)
				
				if(this.autoUpload){
					this.postFile(file)
				}

			},
			postFile(file){ // 手动上传
				if(!this.uploading){
					let _this = this
					this.uploading = true
					upload({params:this.params,file,bar:this.$refs.bar,url:this.uploadUrl,headers:this.headers}).then(data=>{
						let reader = new FileReader(),
							img64 = ''
						reader.readAsDataURL(file)
						reader.onload = function(e){
							img64 = this.result
							let response = {data,file,img64}
							_this.uploading = false
							_this.onSuccess(response)
						}
					}).catch(error=>{
						this.onError(error)
					})
				}else{
					this.onError('请等待上传完成')
				}
			}
		}
	}
</script>
