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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 18:
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
var Uploadvue_type_style_index_0_lang_scss_ = __webpack_require__(26);

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

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Upload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});