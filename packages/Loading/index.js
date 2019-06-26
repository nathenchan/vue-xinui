// 1 预加载指定文件图片同时全屏loading，预加载结束然后可以执行某些方法,一般用于首屏加载
//     挂载到Vue全局方法,通过原型链找到
//     this.$loading(['1.png','2.png'],e=>{
//         // 执行某些方法
//     },'type')
// 2 v-loading 指令模式，动效只覆盖被声明指令的元素中

import loading from './src/loading.js'

export default {
	install(Vue){
		Vue.use(loading)
	}
}