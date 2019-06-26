const getStyle = function(el,attr){
	return window.getComputedStyle(el)[attr]
}

const setStyle = function (el,attr,val){
	el.style[attr] = val
}

export { getStyle, setStyle }