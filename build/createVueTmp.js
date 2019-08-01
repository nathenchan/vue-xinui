// 自动创建组件

var path = require('path')
var fs = require('fs')
var program = require('commander')
var ComponentName = 'LocationSelect'

// 创建packages下的资源
fs.mkdirSync(path.resolve(__dirname, `../packages/${ComponentName}`))
fs.mkdirSync(path.resolve(__dirname, `../packages/${ComponentName}/src`))
fs.writeFile(path.resolve(__dirname, `../packages/${ComponentName}/index.js`),
`import ${ComponentName} from './src/${ComponentName}.vue'

// 单组件引入时需提供install方法给Vue.use单独注册
${ComponentName}.install = function(Vue){
	Vue.component(${ComponentName}.name,${ComponentName})
}

export default ${ComponentName}`
,err => {
  if (err) throw err
  console.log('组件index.js已生成')
})

fs.writeFile(path.resolve(__dirname, `../packages/${ComponentName}/src/${ComponentName}.vue`),
`<template>
	<div class="x-${ComponentName.toLowerCase()}">
		
	</div>
</template>

<script>
export default{
	name:'x-${ComponentName.toLowerCase()}'
}
</script>

<style lang="scss">

</style>
`
,err => {
  if (err) throw err
  console.log('组件Vue已生成')
})

fs.writeFile(path.resolve(__dirname, `../examples/components/${ComponentName}.vue`),
`<template>
	<div>
		<div class="demo-pages">
			<h3></h3>
			<div class="show-page">
				<div class="demo-page">
					
				</div>
			</div>
			<!-- <source-page :tmpl=""></source-page> -->
	    </div>

	    <div class="api-pages">
			<h3>Attributes</h3>
			<table width="100%">
				<thead>
					<tr>
						<td>参数名</td>
						<td>说明</td>
						<td>类型</td>
						<td>默认值</td>
						<td>可选值</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>src</td>
						<td>图片地址</td>
						<td>String</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="api-pages">
			<h3>Events</h3>
			<table width="100%">
				<thead>
					<tr>
						<td>事件名</td>
						<td>说明</td>
						<td>回调参数</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>src</td>
						<td>图片地址</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {

		}
	}
}
</script>

<style lang="scss">
	
</style>`
,err => {
  if (err) throw err
  console.log('examples组件已生成')
})