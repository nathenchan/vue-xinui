(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xinui"] = factory();
	else
		root["xinui"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/Upload/src/Upload.vue?vue&type=template&id=469c04c6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "x-upload", on: { click: _vm.showFileChose } },
    [
      !_vm.drag
        ? _vm._t("default")
        : _c(
            "DragUpload",
            { on: { upload: _vm.uploadFile } },
            [_vm._t("default")],
            2
          ),
      _vm._v(" "),
      _c("div", { staticClass: "progress" }, [
        _c("div", { ref: "bar", staticClass: "bar" })
      ]),
      _vm._v(" "),
      _c("input", {
        ref: "fileinput",
        staticClass: "x-file",
        attrs: { type: "file", name: "file" },
        on: {
          change: _vm.uploadFile,
          click: function($event) {
            $event.stopPropagation()
          }
        }
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/Upload/src/Upload.vue?vue&type=template&id=469c04c6&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/Upload/src/DragUpload.vue?vue&type=template&id=5d6602cc&
var DragUploadvue_type_template_id_5d6602cc_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "x-upload-drag",
      class: _vm.active && "active",
      on: {
        drop: function($event) {
          $event.preventDefault()
          return _vm.onDrop($event)
        },
        dragover: function($event) {
          $event.preventDefault()
          return _vm.onDragover($event)
        },
        dragleave: function($event) {
          $event.preventDefault()
          return _vm.onDragleave($event)
        }
      }
    },
    [_vm._t("default")],
    2
  )
}
var DragUploadvue_type_template_id_5d6602cc_staticRenderFns = []
DragUploadvue_type_template_id_5d6602cc_render._withStripped = true


// CONCATENATED MODULE: ./packages/Upload/src/DragUpload.vue?vue&type=template&id=5d6602cc&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/Upload/src/DragUpload.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var DragUploadvue_type_script_lang_js_ = ({
	data(){
		return {
			active:false
		}
	},
	methods:{
		onDrop(e){
			this.active = false
			this.$emit('upload',{target:{files:[e.dataTransfer.files[0]]}})
		},
		onDragover(){
			this.active = true
		},
		onDragleave(){
			this.active = false
		}
	}
});

// CONCATENATED MODULE: ./packages/Upload/src/DragUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_DragUploadvue_type_script_lang_js_ = (DragUploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/Upload/src/DragUpload.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_DragUploadvue_type_script_lang_js_,
  DragUploadvue_type_template_id_5d6602cc_render,
  DragUploadvue_type_template_id_5d6602cc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/Upload/src/DragUpload.vue"
/* harmony default export */ var DragUpload = (component.exports);
// CONCATENATED MODULE: ./packages/Upload/src/ajax.js
/* harmony default export */ var ajax = (function ({params,file,bar,url,headers}){

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
		
});


// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/Upload/src/Upload.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Uploadvue_type_script_lang_js_ = ({
	components:{
		DragUpload: DragUpload
	},
	props:{
		size:{
			type:Number,
			default:500
		},
		fileType:{
			type:Array,
			default() {
		    	return []
		    }
		},
		autoUpload:{
			type:Boolean,
			default:true
		},
		params:{
			type:Object,
			default(){
				return {}
			}
		},
		headers:{
			type:Object,
			default(){
				return {}
			}
		},
		uploadUrl:{
			type:String,
			default:''
		},
		name:{
			type:String,
			default:'file'
		},
		drag:{
			type:Boolean,
			default:false
		},
		beforeUpload:Function,
		onSuccess:Function,
		onError:Function
	},
	name:'x-upload',
	data(){
		return {
			uploading:false,
		}
	},
	methods:{
		resetStatus(){ // 重置状态
			this.$refs.bar.style.width = '0%'
		},
		showFileChose(){
			this.$refs.fileinput.value = null
			this.$refs.fileinput.click() // 需阻止fileinput冒泡，防止触发2次
		},
		uploadFile(e){
			var file = e.target.files[0]
			
			this.resetStatus()

			// 文件类型与大小判断
			if( this.size < file.size/1000  ){
				this.onError('文件过大')
				return false
			}

			if( this.fileType.length && !(this.fileType.includes(file.type.slice(6))) ){
				this.onError('文件类型不符')
				return false
			}

			if(this.beforeUpload) this.beforeUpload(file)
			
			if(this.autoUpload){
				this.postFile(file)
			}

		},
		postFile(file){ // 手动上传
			if(!this.uploading){
				let _this = this
				this.uploading = true
				ajax({params:this.params,file,bar:this.$refs.bar,url:this.uploadUrl,headers:this.headers}).then(data=>{
					let reader = new FileReader(),
						img64 = ''
					reader.readAsDataURL(file)
					reader.onload = function(e){
						img64 = this.result
						let response = {data,file,img64}
						_this.uploading = false
						_this.onSuccess(response)
					}
				}).catch(error=>{
					this.onError(error)
				})
			}else{
				this.onError('请等待上传完成')
			}
		}
	}
});

// CONCATENATED MODULE: ./packages/Upload/src/Upload.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Uploadvue_type_script_lang_js_ = (Uploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Upload/src/Upload.vue?vue&type=style&index=0&lang=scss&
var Uploadvue_type_style_index_0_lang_scss_ = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/Upload/src/Upload.vue






/* normalize component */

var Upload_component = Object(componentNormalizer["a" /* default */])(
  src_Uploadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Upload_api; }
Upload_component.options.__file = "packages/Upload/src/Upload.vue"
/* harmony default export */ var Upload = (Upload_component.exports);
// CONCATENATED MODULE: ./packages/Upload/index.js


Upload.install = function(Vue,options){
	Vue.component(Upload.name,Upload)
}

/* harmony default export */ var packages_Upload = __webpack_exports__["default"] = (Upload);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/Button/Button.vue?vue&type=template&id=7a3e40ca&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "x-button",
      class: _vm.disabled && "disabled",
      style: _vm.btnStyle,
      attrs: { disabled: _vm.btnDisabled },
      on: { click: _vm.handleClick }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/Button/Button.vue?vue&type=template&id=7a3e40ca&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/Button/Button.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/**
 * 单个按钮
 *  btnStyle {} css驼峰写法 
 *  v-bind 当值为undefined时，则不绑定，用于处理像原生disabled即使赋值为空也会禁用的问题
 */
/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
	name:'x-button',
	props:[ 'btnStyle','disabled' ],
	methods:{
		handleClick(e){
			this.$emit('click',e)
		}
	},
	computed:{
		btnDisabled(){
			return this.disabled  || undefined // undefined则完全不绑定
		}
	}
});

// CONCATENATED MODULE: ./packages/Button/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var Button_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Button/Button.vue?vue&type=style&index=0&lang=scss&
var Buttonvue_type_style_index_0_lang_scss_ = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/Button/Button.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Button_Buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/Button/Button.vue"
/* harmony default export */ var Button = (component.exports);
// CONCATENATED MODULE: ./packages/Button/index.js


Button.install = function(Vue){
	Vue.component(Button.name,Button)
}

/* harmony default export */ var packages_Button = __webpack_exports__["default"] = (Button);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/Dialog/src/Dialog.vue?vue&type=template&id=7e249b34&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fadefast" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible"
          }
        ],
        staticClass: "x-dialog-mask",
        on: { click: _vm.modelClickClose }
      },
      [
        _vm.render
          ? _c(
              "div",
              {
                staticClass: "x-dialog",
                style: _vm.dialogStyle,
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                  }
                }
              },
              [
                _vm.showClose
                  ? _c(
                      "svg",
                      {
                        staticClass: "x-closebtn",
                        attrs: {
                          width: "50",
                          height: "50",
                          viewBox: "0 0 1024 1024"
                        },
                        on: { click: _vm.closeDialog }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M597.795527 511.488347 813.564755 295.718095c23.833825-23.833825 23.833825-62.47489 0.001023-86.307691-23.832801-23.832801-62.47489-23.833825-86.307691 0L511.487835 425.180656 295.717583 209.410404c-23.833825-23.833825-62.475913-23.833825-86.307691 0-23.832801 23.832801-23.833825 62.47489 0 86.308715l215.769228 215.769228L209.410915 727.258599c-23.833825 23.833825-23.833825 62.47489 0 86.307691 23.832801 23.833825 62.473867 23.833825 86.307691 0l215.768205-215.768205 215.769228 215.769228c23.834848 23.833825 62.475913 23.832801 86.308715 0 23.833825-23.833825 23.833825-62.47489 0-86.307691L597.795527 511.488347z",
                            "p-id": "1109",
                            fill: "#333"
                          }
                        })
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.title
                  ? _c("h3", { staticClass: "x-dialog-title" }, [
                      _vm._v(_vm._s(_vm.title))
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm._t("default")
              ],
              2
            )
          : _vm._e()
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/Dialog/src/Dialog.vue?vue&type=template&id=7e249b34&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/Dialog/src/Dialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Attributes :dialogStyle => {}
 * visible 显示隐藏
 * dialogStyle
 * show-close 显示关闭按钮
 * mask-click-close // 点击遮罩关闭
 * 暂无回调
 * 需要测试移动端微信光标input问题
 */
/* harmony default export */ var Dialogvue_type_script_lang_js_ = ({
	name:'x-dialog',
	props:{
		"dialogStyle":Object,
		"show-close":{  // 显示关闭按钮
			type:Boolean,
			default: true
		},
		"visible":Boolean,
		"mask-click-close": {  // 点击遮罩关闭弹窗
			type:Boolean,
			default: true
		},
		"title": String
	},
	data(){
		return {
			render:false
		}
	},
	methods:{
		closeDialog(){
			this.$emit('update:visible',false)
		},
		modelClickClose(){
			if(this.maskClickClose){
				this.$emit('update:visible',false)
			}
		}
	},
	created(){
		if(this.visible){ this.render = true }
	},
	watch:{
		visible(){
			if(this.visible){ this.render = true }
		}
	}
});

// CONCATENATED MODULE: ./packages/Dialog/src/Dialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Dialogvue_type_script_lang_js_ = (Dialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Dialog/src/Dialog.vue?vue&type=style&index=0&lang=scss&
var Dialogvue_type_style_index_0_lang_scss_ = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/Dialog/src/Dialog.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Dialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/Dialog/src/Dialog.vue"
/* harmony default export */ var Dialog = (component.exports);
// CONCATENATED MODULE: ./packages/Dialog/index.js


Dialog.install = function(Vue){
	Vue.component(Dialog.name,Dialog)
}

/* harmony default export */ var packages_Dialog = __webpack_exports__["default"] = (Dialog);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/Loading/src/Loading.vue?vue&type=template&id=b473a82c&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible"
          }
        ],
        staticClass: "x-loading-mask"
      },
      [
        _vm.types.default
          ? _c("div", { staticClass: "sk-fading-circle" }, [
              _c("div", { staticClass: "sk-circle1 sk-circle" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-circle2 sk-circle" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-circle3 sk-circle" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-circle4 sk-circle" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-circle5 sk-circle" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-circle6 sk-circle" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-circle7 sk-circle" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-circle8 sk-circle" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-circle9 sk-circle" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-circle10 sk-circle" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-circle11 sk-circle" }),
              _vm._v(" "),
              _c("div", { staticClass: "sk-circle12 sk-circle" })
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.types.bounce
          ? _c("div", { staticClass: "spinner" }, [
              _c("div", { staticClass: "double-bounce1" }),
              _vm._v(" "),
              _c("div", { staticClass: "double-bounce2" })
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.types.rect
          ? _c("div", { staticClass: "spinner2" }, [
              _c("div", { staticClass: "rect1" }),
              _vm._v(" "),
              _c("div", { staticClass: "rect2" }),
              _vm._v(" "),
              _c("div", { staticClass: "rect3" }),
              _vm._v(" "),
              _c("div", { staticClass: "rect4" }),
              _vm._v(" "),
              _c("div", { staticClass: "rect5" })
            ])
          : _vm._e()
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/Loading/src/Loading.vue?vue&type=template&id=b473a82c&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/Loading/src/Loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Loadingvue_type_script_lang_js_ = ({
	data (){
		return {
			visible: false,
			types:{
				default:false,
				bounce:false,
				rect:false
			},
			text:'加载中'
		}
	}
});

// CONCATENATED MODULE: ./packages/Loading/src/Loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Loadingvue_type_script_lang_js_ = (Loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Loading/src/Loading.vue?vue&type=style&index=0&lang=scss&
var Loadingvue_type_style_index_0_lang_scss_ = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/Loading/src/Loading.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/Loading/src/Loading.vue"
/* harmony default export */ var Loading = (component.exports);
// CONCATENATED MODULE: ./src/utils/dom.js
const getStyle = function(el,attr){
	return window.getComputedStyle(el)[attr]
}

const setStyle = function (el,attr,val){
	el.style[attr] = val
}


// CONCATENATED MODULE: ./packages/Loading/src/loading.js



/* harmony default export */ var loading = ({
	install(Vue){

		const LoadingVue = Vue.extend(Loading)

		var insertDom = function(oParent,binding){
			Vue.nextTick(function(){
				var oParentPosition = getStyle(oParent,'position')
				oParentPosition === 'static' && setStyle(oParent,'position','relative')
				oParent.appendChild(oParent.loadingComponent.$el)
				oParent.loadingComponent.visible = true
				let loadingType = oParent.getAttribute('loading-type') || 'default'
				oParent.loadingComponent.types[loadingType] = true
				oParent.loadingComponent.text = oParent.getAttribute('loading-text')
				if( oParent.getAttribute('loading-text') ) { oParent.loadingComponent.text = oParent.getAttribute('loading-text') } 
			})
		}

		var hideLoading = function(oParent,binding){
			oParent.loadingComponent.visible = false
			for( let attr in oParent.loadingComponent.types ){ oParent.loadingComponent.types[attr] = false }
		}

		// directive 模式
		Vue.directive('loading',{
			bind(el,binding,vnode){
				if(binding.value){
					var Loadingcomponent = new LoadingVue({
						el: document.createElement('div')
					})
					el.loadingComponent = Loadingcomponent
					insertDom(el,binding)
				}
			},
			update(el,binding,vnode){
				if( binding.value ){
					if( !el.loadingComponent ){
						var Loadingcomponent = new LoadingVue({
							el: document.createElement('div')
						})
						el.loadingComponent = Loadingcomponent
					}
					insertDom(el,binding)
				}else{
					if( binding.value != binding.oldValue ) { hideLoading(el,binding) } 
				}
			}
		})

		// 全局方法 缺少position fixed
		Vue.prototype.$loading = function({loadingType='default'}){
			var FullLoadingcomponent = new LoadingVue({
				el: document.createElement('div')
			})
			// 显示Loading
			document.body.appendChild(FullLoadingcomponent.$el)
			FullLoadingcomponent.$el.style.position = 'fixed'
			FullLoadingcomponent.$el.style.height = document.documentElement.offsetHeight + 'px'
			FullLoadingcomponent.visible = true
			FullLoadingcomponent.types[loadingType] = true
			return {
				close(){
					FullLoadingcomponent.visible = false
					setTimeout(_=>{
						document.body.removeChild(FullLoadingcomponent.$el)
						FullLoadingcomponent.$destroy()
					},300)
				}
			}
		}
	}
});
// CONCATENATED MODULE: ./packages/Loading/index.js
// 1 预加载指定文件图片同时全屏loading，预加载结束然后可以执行某些方法,一般用于首屏加载
//     挂载到Vue全局方法,通过原型链找到
//     this.$loading(['1.png','2.png'],e=>{
//         // 执行某些方法
//     },'type')
// 2 v-loading 指令模式，动效只覆盖被声明指令的元素中



/* harmony default export */ var packages_Loading = __webpack_exports__["default"] = ({
	install(Vue){
		Vue.use(loading)
	}
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/Ring/src/Ring.vue?vue&type=template&id=03af3de6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "x-ring",
      style: { width: _vm.width + "px", height: _vm.height + "px" }
    },
    [
      _c("svg", { attrs: { width: _vm.width, height: _vm.height } }, [
        _c("g", [
          _c("circle", {
            staticClass: "x-ring-bg",
            attrs: {
              cx: "50%",
              cy: "50%",
              r: _vm.r,
              "stroke-width": _vm.strokeWidth,
              stroke: _vm.bgColor,
              fill: "none"
            }
          }),
          _vm._v(" "),
          _c("circle", {
            staticClass: "x-ring-bar",
            attrs: {
              cx: "50%",
              cy: "50%",
              r: _vm.r,
              "stroke-width": _vm.strokeWidth,
              stroke: _vm.barColor,
              fill: "none",
              "stroke-dasharray": _vm.dashArray,
              "stroke-dashoffset": _vm.dashOffset,
              "stroke-linecap": _vm.linecap
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "x-ring-slot" }, [_vm._t("default")], 2)
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/Ring/src/Ring.vue?vue&type=template&id=03af3de6&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/Ring/src/Ring.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Ringvue_type_script_lang_js_ = ({
	name:'x-ring',
	props:{
		width:String,
		height:String,
		r:Number, // 最大值 = width/2-strokeWidth 
		strokeWidth:{ // 最大值 = width/2-r
			type:Number,
			default:5
		},
		progress:{
			type:Number,
			default:0
		},
		bgColor:{
			type:String,
			default:'#e4e4e4'
		},
		barColor:{
			type:String,
			default:'#2196F3'
		},
		linecap:{
			type:String,
			default:'round'
		}
	},
	computed:{
		dashArray(){
			return Math.round(2*3.142*this.r)
		},
		dashOffset(){
			let progress = this.progress/100
			return  Math.round((1 - progress) * (2*3.142*this.r))
			// 0 =>    (1 - progress) * (2*3.142*this.r) => 565.56
		    // 0.5 =>  (1 - 0.5) * (2*3.142*this.r) => 565.56/2
			// 1 =>    (1 - progress) * (2*3.142*this.r) => 0
		}
	}
});

// CONCATENATED MODULE: ./packages/Ring/src/Ring.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Ringvue_type_script_lang_js_ = (Ringvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Ring/src/Ring.vue?vue&type=style&index=0&lang=scss&
var Ringvue_type_style_index_0_lang_scss_ = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/Ring/src/Ring.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Ringvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/Ring/src/Ring.vue"
/* harmony default export */ var Ring = (component.exports);
// CONCATENATED MODULE: ./packages/Ring/index.js


Ring.install = function(Vue){
	Vue.component(Ring.name,Ring)
}

/* harmony default export */ var packages_Ring = __webpack_exports__["default"] = (Ring);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ring_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ring_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ring_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ring_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _packages_Loading_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _packages_Button_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XButton", function() { return _packages_Button_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _packages_Dialog_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _packages_Dialog_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _packages_Upload_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return _packages_Upload_index_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _packages_Ring_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);



// import SlideVerify from '../packages/SlideVerify/index.js'



var components = [
	_packages_Button_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
	_packages_Dialog_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
	// SlideVerify,
	_packages_Upload_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
	_packages_Ring_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]
]

function install(Vue){
	components.forEach(component=>{
		Vue.component(component.name,component)
	})
	Vue.use(_packages_Loading_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])
}

if( typeof window !== undefined && window.Vue ){
	install(window.Vue)
}



/* harmony default export */ __webpack_exports__["default"] = ({
	install,
	author:'nathen',
	version:'1.0.11'
});

/***/ })
/******/ ]);
});