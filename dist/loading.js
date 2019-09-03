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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
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

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setStyle; });
/* unused harmony export getOffset */
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



/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 26:
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
var Loadingvue_type_style_index_0_lang_scss_ = __webpack_require__(61);

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
// EXTERNAL MODULE: ./src/utils/dom.js
var dom = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/Loading/src/loading.js



/* harmony default export */ var loading = ({
	install(Vue){

		const LoadingVue = Vue.extend(Loading)

		var insertDom = function(oParent,binding){
			Vue.nextTick(function(){
				var oParentPosition = Object(dom["a" /* getStyle */])(oParent,'position')
				oParentPosition === 'static' && Object(dom["b" /* setStyle */])(oParent,'position','relative')
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ });
});