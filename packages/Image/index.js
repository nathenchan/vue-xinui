import Ximage from './src/Image.vue'

Ximage.install = function(Vue){
	// 监听图片是否进入可视区
	window.unloadImgs = []

	function loadfn(){
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
		}
	}

	// 为了只绑定一次scroll
	window.addEventListener('scroll',loadfn)

	Vue.component(Ximage.name,Ximage)
}

export default Ximage