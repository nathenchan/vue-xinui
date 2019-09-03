export default {
	install(Vue){
		Vue.prototype.$UrlParams = function(iUrl=decodeURIComponent(window.location.href)){
			let searchStr = iUrl.substr(+window.location.href.indexOf('?')+1),
				result = {}

			searchStr.split('&').forEach(el=>{
				let strIndex = el.indexOf('=')
				let iKey = el.slice(0,strIndex)
				result[iKey] = el.slice(+strIndex+1)
			})

			return result
		}
	}
}