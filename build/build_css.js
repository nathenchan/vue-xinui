// 公用样式
var path = require('path')
var sass = require('node-sass')
var fs = require('fs')

sass.render({
  file: path.resolve(__dirname, '../src/xinui.scss'),
  outputStyle: 'compressed'
}, function(err, result) {
	let baseStyle = result.css.toString()
	let indexStyle = fs.readFileSync(path.resolve(__dirname, '../lib/styles/index.css'), 'utf8')
	// 基础样式，按需引入时使用
	fs.writeFileSync(path.resolve(__dirname, '../lib/styles/base.css'),baseStyle)
	// vue-xinui.css完整样式
	fs.writeFileSync(path.resolve(__dirname, '../lib/styles/vue-xinui.css'), baseStyle+indexStyle)
})

