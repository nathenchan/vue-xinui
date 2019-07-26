import Ximage from './src/Image.vue'

Ximage.install = function(Vue){
	// 监听图片是否进入可视区
	window.unloadImgs = []
	window.time = new Date().getTime()

	// 考虑性能需要使用函数节流
	function loadfn(){
		// 判断时间间隔
		if( new Date().getTime() - window.time > 30 ){
			if( !window.unloadImgs.every(el=> el.loaded ) ){
				window.unloadImgs.forEach((el,index,arr)=>{
					if(!el.loaded){
						let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
						if( el.elTop < window.innerHeight + scrollTop ){
							el.img.setAttribute('src',el.img.getAttribute('data-src'))
							el.loaded = true
						}
					}
				})
			}else{
				// 已全部加载完毕
				window.unloadImgs = null
				window.removeEventListener('scroll',loadfn)
				window.time = null
			}
		}
		
		// 上次触发时间
		window.time = new Date().getTime()
	}
	
	window.addEventListener('scroll',loadfn)

	Vue.component(Ximage.name,Ximage)
}

export default Ximage