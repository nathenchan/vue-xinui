export default function ({params,file,bar,url,headers}){

	return new Promise(function(resolve,reject){

		var oForm = new FormData(),
			xhr = new XMLHttpRequest()

		for( let attr in params ){
			oForm.append(attr,params[attr])
		}
		
		oForm.append('file',file)
		
		// 进度条设置
		xhr.upload.onprogress = function(e){
			let nums = (parseInt(e.loaded / e.total) * 100) + '%'
			bar.style.width = nums
		}

		xhr.open('post',url)
		// 请求头设置
		for( let attr in headers ){
			xhr.setRequestHeader(`${attr}`, headers[attr])
		}
		xhr.send(oForm)

		xhr.responseType = 'json'
		xhr.onreadystatechange = ()=>{
			
			let state = xhr.readyState,
				statusText = xhr.statusText,
				callData = xhr.response
			
			if(  state == 4 &&  xhr.status == 200 ){
				if(typeof xhr.response == 'string'){
					callData = JSON.parse(xhr.response)
				}
				resolve(callData)
			}else if( state  == 4 &&  statusText !== 'ok'){
				reject(`networkCode: ${xhr.status}, msg: ${xhr.statusText}`)
			}
			
		}

	})
		
}

