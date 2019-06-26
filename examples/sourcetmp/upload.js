const uploadText1 = {
	tips:'文件POST提交的KEY为file，默认选择文件后自动上传',
	html:`<x-upload
  class="x-upload-normal"
  :params="{type:1}"
  :headers="{token:'123'}"
  upload-url=''
  :on-success="uploadSuccess"
  :on-error="failUpload"
  :size="300"
  :file-type="['png','jpg','jpeg']"
  >
  <img v-if="base64Img" :src="base64Img" >
  <div v-else class="x-upload-add">上传图片</div>
</x-upload>`,
	css:`.x-upload-normal{
  width:200px;
  height:200px;
  border:1px dashed #bfbfbf;
  &:active{
    border:1px solid #007faa;
  }
  img{
    max-width: 100%;
    height:200px;
  }
  .x-upload-add{
    width:200px;
    height:200px;
    line-height:200px;
    text-align: center;
    color:#666;
    font-size: 16px;
  }
}`,
	js:`export default{
  data(){
    return {
      base64Img:'',
      imgUrl:'', // 后台返回的url
    }
  },
  methods:{
    uploadSuccess({data,file,img64}){
      this.base64Img = img64
      this.imgUrl = data.url
    },
    failUpload(error){
      console.log(error)
      this.base64Img = ''
      this.imgUrl = ''
    }
  }
}`
}

const uploadText2 = {
  tips:'拖拽文件放入自动上传',
  html:`<x-upload
  class="x-upload-dragpage"
  :drag="true"
  upload-url=''
  :on-success="uploadSuccess2"
  :on-error="failUpload2"
  >
  <img v-if="base64Img2" :src="base64Img2" >
  <div v-else class="x-upload-add">拖拽上传</div>
</x-upload>`,
  css:`.x-upload-dragpage{
  width:200px;
  height:200px;
  img{
    max-width: 100%;
    height:200px;
  }
  .x-upload-add{
    width:200px;
    height:200px;
    line-height:200px;
    text-align: center;
    color:#666;
    font-size: 16px;
  }
}`,
  js:`export default{
  data(){
    return {
      base64Img2:'',
      imgUrl2:'', // 后台返回的url
    }
  },
  methods:{
    uploadSuccess2({data,file,img64}){
      this.base64Img2 = img64
      this.imgUrl2 = data.url
    },
    failUpload2(error){
      this.base64Img2 = ''
      this.imgUrl2 = ''
    },
  }
}`
}

const uploadText3 = {
  tips:'可以通过before-upload钩子进行手动上传',
  html:`<x-upload
  :auto-upload="false"
  class="x-upload-normal"
  upload-url='http://preadmin.teampkt.com/upload?output=json'
  :before-upload="beforeUpload3"
  :on-success="uploadSuccess3"
  :on-error="failUpload3"
  ref="upload"
  >
  <img v-if="base64Img3" :src="base64Img3" >
  <div v-else class="x-upload-add">拖拽上传</div>
</x-upload>`,
  css:`.x-upload-normal{
  width:200px;
  height:200px;
  border:1px dashed #bfbfbf;
  &:active{
    border:1px solid #007faa;
  }
  img{
    max-width: 100%;
    height:200px;
  }
  .x-upload-add{
    width:200px;
    height:200px;
    line-height:200px;
    text-align: center;
    color:#666;
    font-size: 16px;
  }
}`,
  js:`export default{
  data(){
    return {
      base64Img:'',
      imgUrl:'', // 后台返回的url
    }
  },
  methods:{
    uploadSuccess({data,file,img64}){
      this.base64Img = img64
      this.imgUrl = data.url
    },
    failUpload(error){
      console.log(error)
      this.base64Img = ''
      this.imgUrl = ''
    },
    beforeUpload3(file){
      this.$refs.upload.postFile(file) // 手动上传
    }
  }
}`
}

export { uploadText1,uploadText2,uploadText3 }