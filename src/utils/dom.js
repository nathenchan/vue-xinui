const getStyle = function(el,attr){
	switch(attr){
		case 'transform':
		let attrStr = window.getComputedStyle(el)[attr],
			attrArr = attrStr.slice(7).slice(0,attrStr.length-1).split(', ')
			return {
				translateX: parseInt(attrArr[4])
			}
		break;
	}
	return window.getComputedStyle(el)[attr]
}
// 获取元素定位值
const getOffset = function(el,attr){
	console.log(el.getBoundingClientRect())
}

const setStyle = function (el,attr,val){
	el.style[attr] = val
}

export { getStyle, setStyle,getOffset }