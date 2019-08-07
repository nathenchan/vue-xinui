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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/Select/src/Select.vue?vue&type=template&id=1c044c34&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "x-select" }, [
    _c(
      "div",
      { staticClass: "x-select-page", on: { click: _vm.showList } },
      [
        _c("p", { staticClass: "x-select-value" }, [
          _vm._v(_vm._s(_vm.selectLabel))
        ]),
        _vm._v(" "),
        _c("Arrow", { class: { down: _vm.listShow } }),
        _vm._v(" "),
        _c("transition", { attrs: { name: "fade" } }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.listShow,
                  expression: "listShow"
                }
              ],
              staticClass: "x-select-list"
            },
            _vm._l(this.$slots.default, function(item) {
              return _c("x-option", {
                key: item.componentOptions.propsData.value,
                attrs: {
                  label: item.componentOptions.propsData.label,
                  value: item.componentOptions.propsData.value
                },
                on: { chose: _vm.update }
              })
            }),
            1
          )
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "p",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.errorShow,
            expression: "errorShow"
          }
        ],
        staticClass: "error-text"
      },
      [_vm._v(_vm._s(_vm.errorText))]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/Select/src/Select.vue?vue&type=template&id=1c044c34&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/Select/src/Arrow.vue?vue&type=template&id=3920d78f&
var Arrowvue_type_template_id_3920d78f_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      staticClass: "x-select-arrow",
      attrs: { viewBox: "0 0 1024 1024", width: "24" }
    },
    [
      _c("path", {
        attrs: {
          d:
            "M762.76 371.92l-2.68-2.68a48.24 48.24 0 0 0-68 0l-180 180-180-180a48.24 48.24 0 0 0-68 0l-2.68 2.68a48.24 48.24 0 0 0 0 68l214.65 214.84a53.19 53.19 0 0 0 71.9 0L762.76 440a48.24 48.24 0 0 0 0-68.08z",
          fill: "#c0c4cc"
        }
      })
    ]
  )
}
var Arrowvue_type_template_id_3920d78f_staticRenderFns = []
Arrowvue_type_template_id_3920d78f_render._withStripped = true


// CONCATENATED MODULE: ./packages/Select/src/Arrow.vue?vue&type=template&id=3920d78f&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/Select/src/Arrow.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var Arrowvue_type_script_lang_js_ = ({

});

// CONCATENATED MODULE: ./packages/Select/src/Arrow.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Arrowvue_type_script_lang_js_ = (Arrowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/Select/src/Arrow.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Arrowvue_type_script_lang_js_,
  Arrowvue_type_template_id_3920d78f_render,
  Arrowvue_type_template_id_3920d78f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/Select/src/Arrow.vue"
/* harmony default export */ var Arrow = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/Select/src/Select.vue?vue&type=script&lang=js&
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


// change event


/* harmony default export */ var Selectvue_type_script_lang_js_ = ({
	name:'x-select',
	components:{Arrow: Arrow},
	inheritAttrs:false,
	model:{
		prop:'value',
		event:'change'
	},
	props:{
		required:{
			type:String,
			default:undefined
		},
		errorText:{
			type:String,
			default:'选择其中一个'
		},
		placeholder:{
			type:String,
			default:'选择'
		}
	},
	data(){
		return {
			listShow:false,
			errorShow:false
		}
	},
	methods:{
		showList(){
			this.listShow = !this.listShow
		},
		checkVerify(){
			this.$nextTick(_=>{
				if( this.required != undefined && !this.$attrs.value ){ 
					this.errorShow = true
					this.$emit('update:result',false)
				}else if( this.required != undefined && this.$attrs.value ){
					this.errorShow = false
					this.$emit('update:result',true)
				}
			})
		},
		update(val){
			this.$emit('change',val)
			this.checkVerify()
			this.listShow = false
		}
	},
	computed:{
		selectValue(){
			return this.$attrs.value
		},
		selectLabel(){
			var myval = null
			this.$slots.default.forEach(el=>{
				let val = el.componentOptions.propsData.value
				if(val == this.selectValue){
					myval =  el.componentOptions.propsData.label
				}
			})
			return myval
		}
	}
});

// CONCATENATED MODULE: ./packages/Select/src/Select.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Selectvue_type_script_lang_js_ = (Selectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Select/src/Select.vue?vue&type=style&index=0&lang=scss&
var Selectvue_type_style_index_0_lang_scss_ = __webpack_require__(51);

// CONCATENATED MODULE: ./packages/Select/src/Select.vue






/* normalize component */

var Select_component = Object(componentNormalizer["a" /* default */])(
  src_Selectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Select_api; }
Select_component.options.__file = "packages/Select/src/Select.vue"
/* harmony default export */ var Select = (Select_component.exports);
// CONCATENATED MODULE: ./packages/Select/index.js


// 单组件引入时需提供install方法给Vue.use单独注册
Select.install = function(Vue){
	Vue.component(Select.name,Select)
}

/* harmony default export */ var packages_Select = __webpack_exports__["default"] = (Select);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ });
});