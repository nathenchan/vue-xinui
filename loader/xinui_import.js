/**
 * @Author    ruoxin
 */
module.exports = function(content){
	
	let str = /{(.*)}\s+from\s+'vue-xinui'/i.exec(content),
		replaceStr = ``
	
	if(str!=null){
		let componentNameArr = str[1].replace(/\s/g,'').split(',')
		componentNameArr.forEach(el=>{
			replaceStr += `import ${el} from 'vue-xinui/dist/${el[0].toLocaleLowerCase()+el.slice(1)}.js'\nimport 'vue-xinui/dist/styles/${el[0].toLocaleLowerCase()+el.slice(1)}.css'\n`
		})
		content = content.replace(/import\s+{(.*)}\s+from\s+'vue-xinui'/ig,replaceStr)

		return content
	}
	
    return content
}