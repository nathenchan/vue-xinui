import Loading from '../src/Loading.vue'
import {getStyle,setStyle} from '../../../src/utils/dom.js'

export default {
	install(Vue){

		var LoadingVue = Vue.extend(Loading)
		var Loadingcomponent = new LoadingVue({
			el: document.createElement('div')
		})

		var insertDom = function(oParent,el){
			Vue.nextTick(function(){
				var oParentPosition = getStyle(oParent,'position')
				oParentPosition === 'static' && setStyle(oParent,'position','relative')
				oParent.appendChild(el)
				Loadingcomponent.visible = true
				Loadingcomponent.types[oParent.getAttribute('loading-type')] = true
			})
		}

		Vue.directive('loading',{
			bind(el,binding,vnode){
				binding.value && insertDom(el,Loadingcomponent.$el)
			},
			update(el,binding,vnode){
				binding.value ? insertDom(el,Loadingcomponent.$el) : Loadingcomponent.visible = false
			}
		})

	}
}