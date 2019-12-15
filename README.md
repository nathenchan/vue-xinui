# vue-xinui

基于Vue2.x封装的组件库，主要面向前台页面。

## 命令行

```
npm run dev // DEMO开发环境
npm run build // 打包vue-xinui
npm run docBuild // 文档页面打包
npm run buildCss // 编译输出base.css 和 完整的vue-xinui.css
npm run devTest // 使用vue-xinui测试
npm run buildTest // 打包vue-xinui测试
```

## 文档与示例

[Document](https://nathenchan.github.io/vue-xinui/doc)

## 文件大小

## 浏览器兼容情况

- IE11
- Edge
- Chrome
- FireFox
- Safari
- 其他现代浏览器

## 安装
```
npm install vue-xinui
```

## 相关文件

## 使用

```
// 完整引入
import 'vue-xinui/dist/styles/vue-xinui.css'
import XinUI from 'vue-xinui'
Vue.use(XinUI)

// 按需引入
import 'vue-xinui/dist/styles/base.css'
import {Button,Dialog} from 'vue-xinui'
Vue.use(Button)
Vue.use(Dialog)

// 按需引入还需要稍作对webpack配置
// 开发dev配置
module: {
		rules: [
			{
			  test: /\.js$/,
			  exclude: /(node_modules)/,
			  use: {
				  loader: 'babel-loader',
				  options:{
					plugins: ['babel-plugin-xinui-import']
				  }
			  }
		  	}
		]
}
// 打包prod配置
module: {
	rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options:{
				presets: ['@babel/preset-env'],
				plugins: ['babel-plugin-xinui-import']
				}
			}
		}
	]
}
```

## 组件列表

- Form 表单，包裹表单控件
- Button 按钮
- CheckboxGroup 多选组
- Input 输入框
- Option 下拉菜单
- Switch 开关
- Textarea 文本域
- LocationSelect 省市区联动菜单
- Dialog 弹窗
- SlideVerify 拼图验证
- Pagination 分页
- Ring 圆环进度条
- Image 用于图片懒加载
- Upload 文件上传
- CountDown 倒计时
- Slide 轮播图

## 自定义指令

- Loading

## 全局方法

- UrlParams 获取URL参数

## 计划更新

- 移动端scroll-load
- 移动端顶部下拉刷新
- 时间格式化

## vue-xinui讨论群

欢迎前端同学QQ入群互相交流834877689