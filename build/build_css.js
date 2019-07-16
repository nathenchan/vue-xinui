var path = require('path')
var sass = require('node-sass')
var fs = require('fs')

sass.render({
  file: path.resolve(__dirname, '../src/xinui.scss'),
  outputStyle: 'compressed'
}, function(err, result) {
	fs.writeFile(path.resolve(__dirname, '../lib/theme-chalk/base.css'), result.css.toString(),err => {
	  if (err) throw err
	  console.log('bass.css已生成')
	})
})
