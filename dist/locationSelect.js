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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/LocationSelect/src/LocationSelect.vue?vue&type=template&id=e595cc74&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "x-location-select" }, [
    _c("div", { staticClass: "x-location-page" }, [
      _c("div", { staticClass: "location-page" }, [
        _c(
          "p",
          {
            staticClass: "location-text",
            on: {
              click: function($event) {
                _vm.provinceShow = !_vm.provinceShow
              }
            }
          },
          [_vm._v(_vm._s(_vm.provinceName))]
        ),
        _vm._v(" "),
        _c(
          "svg",
          {
            staticClass: "x-arrow",
            attrs: { viewBox: "0 0 1024 1024", width: "24" },
            on: {
              click: function($event) {
                _vm.provinceShow = !_vm.provinceShow
              }
            }
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
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.provinceShow,
                expression: "provinceShow"
              }
            ],
            staticClass: "list-page"
          },
          [
            _c(
              "ul",
              { staticClass: "list" },
              _vm._l(_vm.locationData, function(item) {
                return _c(
                  "li",
                  {
                    on: {
                      click: function($event) {
                        return _vm.choseProvince(item.name)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item.name))]
                )
              }),
              0
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.noMunicipality,
              expression: "noMunicipality"
            }
          ],
          staticClass: "location-page"
        },
        [
          _c(
            "p",
            {
              staticClass: "location-text",
              on: {
                click: function($event) {
                  _vm.cityShow = !_vm.cityShow
                }
              }
            },
            [_vm._v(_vm._s(_vm.cityName))]
          ),
          _vm._v(" "),
          _c(
            "svg",
            {
              staticClass: "x-arrow",
              attrs: { viewBox: "0 0 1024 1024", width: "24" },
              on: {
                click: function($event) {
                  _vm.cityShow = !_vm.cityShow
                }
              }
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
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.cityShow,
                  expression: "cityShow"
                }
              ],
              staticClass: "list-page"
            },
            [
              _c(
                "ul",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.cityList.length,
                      expression: "cityList.length"
                    }
                  ],
                  staticClass: "list"
                },
                _vm._l(_vm.cityList, function(item) {
                  return _c(
                    "li",
                    {
                      on: {
                        click: function($event) {
                          return _vm.choseCity(item.name)
                        }
                      }
                    },
                    [_vm._v(_vm._s(item.name))]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.cityList.length == 0,
                      expression: "cityList.length == 0"
                    }
                  ],
                  staticClass: "no-data"
                },
                [_vm._v("\n\t\t\t\t\tno Data\n\t\t\t\t")]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "location-page" }, [
        _c(
          "p",
          {
            staticClass: "location-text",
            on: {
              click: function($event) {
                _vm.areaShow = !_vm.areaShow
              }
            }
          },
          [_vm._v(_vm._s(_vm.areaName))]
        ),
        _vm._v(" "),
        _c(
          "svg",
          {
            staticClass: "x-arrow",
            attrs: { viewBox: "0 0 1024 1024", width: "24" },
            on: {
              click: function($event) {
                _vm.areaShow = !_vm.areaShow
              }
            }
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
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.areaShow,
                expression: "areaShow"
              }
            ],
            staticClass: "list-page"
          },
          [
            _c(
              "ul",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.areaList.length,
                    expression: "areaList.length"
                  }
                ],
                staticClass: "list"
              },
              _vm._l(_vm.areaList, function(item) {
                return _c(
                  "li",
                  {
                    on: {
                      click: function($event) {
                        return _vm.choseArea(item.name)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item.name))]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "p",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.areaList.length == 0,
                    expression: "areaList.length == 0"
                  }
                ],
                staticClass: "no-data"
              },
              [_vm._v("\n\t\t\t\t\tno Data\n\t\t\t\t")]
            )
          ]
        )
      ])
    ]),
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


// CONCATENATED MODULE: ./packages/LocationSelect/src/LocationSelect.vue?vue&type=template&id=e595cc74&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/LocationSelect/src/LocationSelect.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LocationSelectvue_type_script_lang_js_ = ({
	name:'x-location-select',
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
			default:'选择完整地址'
		},
		locationData:{
			type:[Array,Object],
			default:null
		}
	},
	data(){
		return {
			errorShow:false,
			provinceName:'',
			cityName:'',
			areaName:'',
			provinceShow:false,
			cityShow:false,
			areaShow:false,
			noMunicipality:true
		}
	},
	computed:{
		cityList(){ // 市列表，根据所选的省份而定
			let cityList = []
			this.locationData.forEach(el=>{
				if(el.name == this.provinceName){
					cityList = el.cityList
				}
			})
			return cityList
		},
		areaList(){  // 区列表，根据所选的市而定
			let areaList = []
			this.locationData.forEach(el=>{
				el.cityList.forEach(el2=>{
					if(el2.name == this.cityName){
						areaList = el2.areaList
					}
				})
			})
			return areaList
		},
		fullName(){
			return this.provinceName + this.cityName + this.areaName
		}
	},
	methods:{
		checkVerify(){
			//  是否有验证
			if( this.required != undefined ){
				if( !this.isMunicipality() && this.provinceName.length == 0 || this.cityName.length == 0 || this.areaName.length == 0 ){
					this.errorShow = true
					this.$emit('update:result',false)
				}else if( this.isMunicipality() && this.provinceName.length == 0  || this.areaName.length == 0 ){
					this.errorShow = true
					this.$emit('update:result',false)
				}else {
					this.errorShow = false
					this.$emit('update:result',true)
				}
			}
		},
		isMunicipality(){
			if(this.provinceName.includes('北京') || this.provinceName.includes('天津市') || this.provinceName.includes('上海市') || this.provinceName.includes('重庆市')){
				return true
			}
			return false
		},
		update(){
			this.isMunicipality() ?  this.$emit('change',this.fullName.slice(3)) : this.$emit('change',this.fullName)
			this.checkVerify()
		},
		choseProvince(name){
			this.provinceName = name
			this.provinceShow = false
			if( this.isMunicipality() ){
				this.noMunicipality = false
				this.cityName = name
			}else{
				this.noMunicipality = true
			}
			this.update()
		},
		choseCity(name){
			this.cityName = name
			this.cityShow = false
			this.update()
		},
		choseArea(name){
			this.areaName = name
			this.areaShow = false
			this.update()
			this.$emit('lastChange')
		}
	},
	watch:{
		provinceName(val,oldVal){
			if( !this.isMunicipality() ){
				this.cityName = ''
			}
			this.areaName = ''
			this.areaShow = false
			this.cityShow = false
			this.update()
		},
		cityName(val,oldVal){
			this.areaName = ''
			this.areaShow = false
			this.update()
		}
	}
});

// CONCATENATED MODULE: ./packages/LocationSelect/src/LocationSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_LocationSelectvue_type_script_lang_js_ = (LocationSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/LocationSelect/src/LocationSelect.vue?vue&type=style&index=0&lang=scss&
var LocationSelectvue_type_style_index_0_lang_scss_ = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/LocationSelect/src/LocationSelect.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_LocationSelectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/LocationSelect/src/LocationSelect.vue"
/* harmony default export */ var LocationSelect = (component.exports);
// CONCATENATED MODULE: ./packages/LocationSelect/index.js


// 单组件引入时需提供install方法给Vue.use单独注册
LocationSelect.install = function(Vue){
	Vue.component(LocationSelect.name,LocationSelect)
}

/* harmony default export */ var packages_LocationSelect = __webpack_exports__["default"] = (LocationSelect);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ });
});