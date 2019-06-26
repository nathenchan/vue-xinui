import Loading from '../src/Loading.vue'
import {getStyle,setStyle} from '../../../src/utils/dom.js'

export default {
	install(Vue){

		const LoadingVue = Vue.extend(Loading)

		var insertDom = function(oParent,binding){
			Vue.nextTick(function(){
				var oParentPosition = getStyle(oParent,'position')
				oParentPosition === 'static' && setStyle(oParent,'position','relative')
				oParent.appendChild(oParent.loadingComponent.$el)
				oParent.loadingComponent.visible = true
				let loadingType = oParent.getAttribute('loading-type') || 'default'
				oParent.loadingComponent.types[loadingType] = true
				oParent.loadingComponent.text = oParent.getAttribute('loading-text')
				if( oParent.getAttribute('loading-text') ) { oParent.loadingComponent.text = oParent.getAttribute('loading-text') } 
			})
		}

		var hideLoading = function(oParent,binding){
			oParent.loadingComponent.visible = false
			for( let attr in oParent.loadingComponent.types ){ oParent.loadingComponent.types[attr] = false }
		}

		// directive 模式
		Vue.directive('loading',{
			bind(el,binding,vnode){
				if(binding.value){
					var Loadingcomponent = new LoadingVue({
						el: document.createElement('div')
					})
					el.loadingComponent = Loadingcomponent
					insertDom(el,binding)
				}
			},
			update(el,binding,vnode){
				if( binding.value ){
					if( !el.loadingComponent ){
						var Loadingcomponent = new LoadingVue({
							el: document.createElement('div')
						})
						el.loadingComponent = Loadingcomponent
					}
					insertDom(el,binding)
				}else{
					if( binding.value != binding.oldValue ) { hideLoading(el,binding) } 
				}
			}
		})

		// 全局方法 缺少position fixed
		Vue.prototype.$loading = function({loadingType='default'}){
			var FullLoadingcomponent = new LoadingVue({
				el: document.createElement('div')
			})
			// 显示Loading
			document.body.appendChild(FullLoadingcomponent.$el)
			FullLoadingcomponent.$el.style.position = 'fixed'
			FullLoadingcomponent.$el.style.height = document.documentElement.offsetHeight + 'px'
			FullLoadingcomponent.visible = true
			FullLoadingcomponent.types[loadingType] = true
			return {
				close(){
					FullLoadingcomponent.visible = false
					setTimeout(_=>{
						document.body.removeChild(FullLoadingcomponent.$el)
						FullLoadingcomponent.$destroy()
					},300)
				}
			}
		}
	}
}