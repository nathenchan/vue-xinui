const getStyle = function(el,attr){
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