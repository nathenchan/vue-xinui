<template>
	<div>
    
    <div class="demo-pages">
      <h3>Loading 加载动效</h3>
      <div class="show-page" v-loading="loadingshow" loading-text="loading"></div>
      <source-page :tmpl="directive"></source-page>
    </div>

    <div class="demo-pages">
      <h3>全局方法-整页加载</h3>
      <div class="show-page">
        <div class="demo-btn-page">
          <x-button :btnStyle="{width:'80px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff',fontSize:'12px'}" @click="fullScreenLoading">整页加载</x-button>
        </div>
      </div>
      <source-page :tmpl="loadingMethod"></source-page>
    </div>
    
    <div class="api-pages">
      <h3>Attributes</h3>
      <table width="100%">
        <thead>
          <tr>
            <td>参数名</td>
            <td>说明</td>
            <td>类型</td>
            <td>默认值</td>
            <td>可选值</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>v-loading</td>
            <td>loading指令</td>
            <td>boolean</td>
            <td>必填</td>
            <td>true/false</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>loading-text</td>
            <td>加载时文案</td>
            <td>string</td>
            <td>加载中</td>
            <td></td>
          </tr>
          <tr>
            <td>loading-type</td>
            <td>loading动画类型</td>
            <td>string</td>
            <td>default</td>
            <td>default/bounce/rect</td>
          </tr>
        </tbody>
      </table>
    </div>
    		
	</div>
</template>

<script>
  import Vue from 'vue'
  import {directive,loadingMethod} from '../sourcetmp/loading.js'

	export default{
    data(){
      return {
        loadingshow: true,
        directive,
        loadingMethod
      }
    },
    methods:{
      fullScreenLoading(){
        var oLoading = this.$loading({
          loadingType:'bounce'
        })
        setTimeout(_=>{
          oLoading.close()
        },5000)
      }
    }
  }
</script>

<style lang="scss" scoped>
.show-page{
  min-height: 200px;
}
</style>