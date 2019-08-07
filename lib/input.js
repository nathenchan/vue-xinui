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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/Input/src/Input.vue?vue&type=template&id=aff207f4&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "x-input" }, [
    _vm.$slots.aside
      ? _c("div", { staticClass: "x-input-page" }, [
          _c(
            "div",
            { staticClass: "x-input-aside", style: { width: _vm.asideWidth } },
            [_vm._t("aside")],
            2
          ),
          _vm._v(" "),
          _c("div", { style: { marginLeft: _vm.asideWidth } }, [
            _vm.type === "checkbox"
              ? _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.value,
                      expression: "value"
                    }
                  ],
                  class: [{ error: _vm.errorShow }, "x-input-self"],
                  attrs: {
                    placeholder: _vm.placeholder,
                    disabled: _vm.disabled,
                    type: "checkbox"
                  },
                  domProps: {
                    checked: Array.isArray(_vm.value)
                      ? _vm._i(_vm.value, null) > -1
                      : _vm.value
                  },
                  on: {
                    input: _vm.inputVerify,
                    blur: _vm.blur,
                    focus: _vm.focus,
                    change: function($event) {
                      var $$a = _vm.value,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.value = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.value = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.value = $$c
                      }
                    }
                  }
                })
              : _vm.type === "radio"
              ? _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.value,
                      expression: "value"
                    }
                  ],
                  class: [{ error: _vm.errorShow }, "x-input-self"],
                  attrs: {
                    placeholder: _vm.placeholder,
                    disabled: _vm.disabled,
                    type: "radio"
                  },
                  domProps: { checked: _vm._q(_vm.value, null) },
                  on: {
                    input: _vm.inputVerify,
                    blur: _vm.blur,
                    focus: _vm.focus,
                    change: function($event) {
                      _vm.value = null
                    }
                  }
                })
              : _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.value,
                      expression: "value"
                    }
                  ],
                  class: [{ error: _vm.errorShow }, "x-input-self"],
                  attrs: {
                    placeholder: _vm.placeholder,
                    disabled: _vm.disabled,
                    type: _vm.type
                  },
                  domProps: { value: _vm.value },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.value = $event.target.value
                      },
                      _vm.inputVerify
                    ],
                    blur: _vm.blur,
                    focus: _vm.focus
                  }
                }),
            _vm._v(" "),
            _c(
              "ul",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errorShow,
                    expression: "errorShow"
                  }
                ],
                staticClass: "x-tips-list"
              },
              _vm._l(_vm.myVerify, function(item) {
                return _c(
                  "li",
                  { class: [{ right: item.status }] },
                  [
                    _c("Sigh"),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(item.text) + " ")])
                  ],
                  1
                )
              }),
              0
            )
          ])
        ])
      : _c("div", [
          _vm.type === "checkbox"
            ? _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.value,
                    expression: "value"
                  }
                ],
                class: [{ error: _vm.errorShow }, "x-input-self"],
                attrs: {
                  placeholder: _vm.placeholder,
                  disabled: _vm.disabled,
                  type: "checkbox"
                },
                domProps: {
                  checked: Array.isArray(_vm.value)
                    ? _vm._i(_vm.value, null) > -1
                    : _vm.value
                },
                on: {
                  input: _vm.inputVerify,
                  blur: _vm.blur,
                  focus: _vm.focus,
                  change: function($event) {
                    var $$a = _vm.value,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.value = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.value = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.value = $$c
                    }
                  }
                }
              })
            : _vm.type === "radio"
            ? _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.value,
                    expression: "value"
                  }
                ],
                class: [{ error: _vm.errorShow }, "x-input-self"],
                attrs: {
                  placeholder: _vm.placeholder,
                  disabled: _vm.disabled,
                  type: "radio"
                },
                domProps: { checked: _vm._q(_vm.value, null) },
                on: {
                  input: _vm.inputVerify,
                  blur: _vm.blur,
                  focus: _vm.focus,
                  change: function($event) {
                    _vm.value = null
                  }
                }
              })
            : _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.value,
                    expression: "value"
                  }
                ],
                class: [{ error: _vm.errorShow }, "x-input-self"],
                attrs: {
                  placeholder: _vm.placeholder,
                  disabled: _vm.disabled,
                  type: _vm.type
                },
                domProps: { value: _vm.value },
                on: {
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.value = $event.target.value
                    },
                    _vm.inputVerify
                  ],
                  blur: _vm.blur,
                  focus: _vm.focus
                }
              }),
          _vm._v(" "),
          _c(
            "ul",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errorShow,
                  expression: "errorShow"
                }
              ],
              staticClass: "x-tips-list"
            },
            _vm._l(_vm.myVerify, function(item) {
              return _c(
                "li",
                { class: [{ right: item.status }] },
                [
                  _c("Sigh"),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(item.text) + " ")])
                ],
                1
              )
            }),
            0
          )
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/Input/src/Input.vue?vue&type=template&id=aff207f4&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/Input/src/Sigh.vue?vue&type=template&id=776591ab&
var Sighvue_type_template_id_776591ab_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    { staticClass: "icon", attrs: { viewBox: "0 0 1024 1024", width: "26" } },
    [
      _c("path", {
        attrs: {
          d:
            "M468.114286 621.714286c7.314286 21.942857 21.942857 36.571429 43.885714 36.571428s36.571429-14.628571 43.885714-36.571428L585.142857 219.428571c0-43.885714-36.571429-73.142857-73.142857-73.142857-43.885714 0-73.142857 36.571429-73.142857 80.457143l29.257143 394.971429zM512 731.428571c-43.885714 0-73.142857 29.257143-73.142857 73.142858s29.257143 73.142857 73.142857 73.142857 73.142857-29.257143 73.142857-73.142857-29.257143-73.142857-73.142857-73.142858z",
          fill: "#d91e18"
        }
      })
    ]
  )
}
var Sighvue_type_template_id_776591ab_staticRenderFns = []
Sighvue_type_template_id_776591ab_render._withStripped = true


// CONCATENATED MODULE: ./packages/Input/src/Sigh.vue?vue&type=template&id=776591ab&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/Input/src/Sigh.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  Sighvue_type_template_id_776591ab_render,
  Sighvue_type_template_id_776591ab_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/Input/src/Sigh.vue"
/* harmony default export */ var Sigh = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/Input/src/Input.vue?vue&type=script&lang=js&
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


/* harmony default export */ var Inputvue_type_script_lang_js_ = ({
	components:{Sigh: Sigh},
	name:'x-input',
	model:{
		prop:'value',
		event:'input'
	},
	props:{
		type:{
			type:String,
			default:'text'
		},
		placeholder:{
			type:String,
			default:''
		},
		disabled:{
			type:Boolean,
			default:false
		},
		asideWidth:{
			type:String,
			default:'100px'
		},
		verify:{
			type:Array,
			default(){
				return null
			}
		}
	},
	data(){
		return {
			value:'',
			errorText:'',
			errorShow:false,
			myVerify:this.verify,
			result:false
		}
	},
	methods:{
		checkVerify(){ // 校验数据，显示报错信息
			this.myVerify.forEach((el,index)=>{
				switch(el.type){
					case 'required':
						!this.value.length ? this.myVerify[index]['status'] = 0 : this.myVerify[index]['status'] = 1 
					break;
					case 'test':
						 el.reg.test(this.value) ? this.myVerify[index]['status'] = 1 : this.myVerify[index]['status'] = 0
					break;
					case 'length':
						if(this.value.length>el.max || this.value.length<el.min){
							this.myVerify[index]['status'] = 0
						}else{
							this.myVerify[index]['status'] = 1
						}
					break;
				}
			})
			this.result = this.myVerify.every((el)=>el.status === 1)
			this.errorShow = !this.result
		},
		blur(e){
			if(this.myVerify){
				
				this.checkVerify()
				
				this.$emit('update:result',this.result)
			}
			this.$emit('blur',this.value)

		},
		focus(e){
			if(this.myVerify && this.myVerify.some((el)=>el.status != 1) ){ this.errorShow = true }
			this.$emit('focus',e)
		},
		inputVerify(e){

			if(this.myVerify){ this.checkVerify() }

			this.$emit('input',this.value)

		}
	},
	created(){
		if(this.myVerify){
			this.myVerify.forEach(el=>{
				this.$set(el,'status',0)
			})
		}
	}
});

// CONCATENATED MODULE: ./packages/Input/src/Input.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Input/src/Input.vue?vue&type=style&index=0&lang=scss&
var Inputvue_type_style_index_0_lang_scss_ = __webpack_require__(47);

// CONCATENATED MODULE: ./packages/Input/src/Input.vue






/* normalize component */

var Input_component = Object(componentNormalizer["a" /* default */])(
  src_Inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Input_api; }
Input_component.options.__file = "packages/Input/src/Input.vue"
/* harmony default export */ var Input = (Input_component.exports);
// CONCATENATED MODULE: ./packages/Input/index.js


Input.install = function(Vue){
	Vue.component(Input.name,Input)
}

/* harmony default export */ var packages_Input = __webpack_exports__["default"] = (Input);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});