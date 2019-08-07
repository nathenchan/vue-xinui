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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/Pagination/src/Pagination.vue?vue&type=template&id=0d96f726&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "x-pagination" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.pageNum <= 1,
            expression: "pageNum <= 1"
          }
        ],
        staticClass: "btn-page onlyone"
      },
      [
        _c("span", { staticClass: "prebtn" }, [_c("PreBtn")], 1),
        _vm._v(" "),
        _c("span", { staticClass: "page-btns current-page" }, [_vm._v("1")]),
        _vm._v(" "),
        _c("span", { staticClass: "nextbtn" }, [_c("NextBtn")], 1)
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
            value: _vm.pageNum > 1 && _vm.pageNum <= _vm.pageCount,
            expression: "pageNum>1 && pageNum<=pageCount"
          }
        ],
        staticClass: "btn-page normal-page"
      },
      [
        _c(
          "span",
          {
            staticClass: "prebtn",
            on: {
              click: function($event) {
                return _vm.pageChange(--_vm.nowPage)
              }
            }
          },
          [_c("PreBtn")],
          1
        ),
        _vm._v(" "),
        _vm._l(_vm.pageNum, function(item, index) {
          return _c(
            "span",
            {
              class: [
                { "current-page": index + 1 == _vm.nowPage },
                "page-btns"
              ],
              on: {
                click: function($event) {
                  return _vm.pageChange(index + 1)
                }
              }
            },
            [_vm._v(_vm._s(index + 1))]
          )
        }),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "nextbtn",
            on: {
              click: function($event) {
                return _vm.pageChange(++_vm.nowPage)
              }
            }
          },
          [_c("NextBtn")],
          1
        )
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.pageNum > _vm.pageCount,
            expression: "pageNum>pageCount"
          }
        ],
        staticClass: "btn-page"
      },
      [
        _c(
          "span",
          {
            staticClass: "prebtn",
            on: {
              click: function($event) {
                return _vm.pageChange(--_vm.nowPage)
              }
            }
          },
          [_c("PreBtn")],
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
                value: _vm.nowPage - 3 <= 1,
                expression: "nowPage-3 <= 1"
              }
            ],
            staticClass: "btn-page"
          },
          [
            _vm._l(_vm.pageCount - 1, function(item, index) {
              return _c(
                "span",
                {
                  class: [
                    { "current-page": index + 1 == _vm.nowPage },
                    "page-btns"
                  ],
                  on: {
                    click: function($event) {
                      return _vm.pageChange(index + 1)
                    }
                  }
                },
                [_vm._v(_vm._s(index + 1))]
              )
            }),
            _vm._v(" "),
            _c("span", [_vm._v("...")]),
            _vm._v(" "),
            _c(
              "span",
              {
                on: {
                  click: function($event) {
                    return _vm.pageChange(_vm.pageNum)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.pageNum))]
            )
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "p",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.nowPage - 3 > 1 && _vm.nowPage + 3 < _vm.pageNum,
                expression: "nowPage-3 > 1 && nowPage+3 < pageNum"
              }
            ],
            staticClass: "btn-page"
          },
          [
            _c(
              "span",
              {
                staticClass: "page-btns",
                on: {
                  click: function($event) {
                    return _vm.pageChange(1)
                  }
                }
              },
              [_vm._v("1")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.nowPage - 3 > 2,
                    expression: "nowPage-3 >2"
                  }
                ]
              },
              [_vm._v("...")]
            ),
            _vm._v(" "),
            _vm._l(
              [_vm.nowPage - 3, _vm.nowPage - 2, _vm.nowPage - 1],
              function(item) {
                return _c(
                  "span",
                  {
                    staticClass: "page-btns",
                    on: {
                      click: function($event) {
                        return _vm.pageChange(item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item))]
                )
              }
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "page-btns current-page",
                on: {
                  click: function($event) {
                    return _vm.pageChange(_vm.nowPage)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.nowPage))]
            ),
            _vm._v(" "),
            _vm._l(
              [_vm.nowPage + 1, _vm.nowPage + 2, _vm.nowPage + 3],
              function(item) {
                return _c(
                  "span",
                  {
                    staticClass: "page-btns",
                    on: {
                      click: function($event) {
                        return _vm.pageChange(item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item))]
                )
              }
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.nowPage + 4 < _vm.pageNum,
                    expression: "nowPage+4 < pageNum"
                  }
                ]
              },
              [_vm._v("...")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "page-btns",
                on: {
                  click: function($event) {
                    return _vm.pageChange(_vm.pageNum)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.pageNum))]
            )
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "p",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.nowPage + 3 == _vm.pageNum,
                expression: "nowPage+3 == pageNum"
              }
            ],
            staticClass: "btn-page"
          },
          [
            _c(
              "span",
              {
                staticClass: "page-btns",
                on: {
                  click: function($event) {
                    return _vm.pageChange(1)
                  }
                }
              },
              [_vm._v("1")]
            ),
            _vm._v(" "),
            _c("span", [_vm._v("...")]),
            _vm._v(" "),
            _vm._l(
              [_vm.nowPage - 3, _vm.nowPage - 2, _vm.nowPage - 1],
              function(item) {
                return _c(
                  "span",
                  {
                    staticClass: "page-btns",
                    on: {
                      click: function($event) {
                        return _vm.pageChange(item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item))]
                )
              }
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "page-btns current-page",
                on: {
                  click: function($event) {
                    return _vm.pageChange(_vm.nowPage)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.nowPage))]
            ),
            _vm._v(" "),
            _vm._l(
              [_vm.nowPage + 1, _vm.nowPage + 2, _vm.nowPage + 3],
              function(item) {
                return _c(
                  "span",
                  {
                    staticClass: "page-btns",
                    on: {
                      click: function($event) {
                        return _vm.pageChange(item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item))]
                )
              }
            )
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "p",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.nowPage + 2 == _vm.pageNum,
                expression: "nowPage+2 == pageNum"
              }
            ],
            staticClass: "btn-page"
          },
          [
            _c(
              "span",
              {
                staticClass: "page-btns",
                on: {
                  click: function($event) {
                    return _vm.pageChange(1)
                  }
                }
              },
              [_vm._v("1")]
            ),
            _vm._v(" "),
            _c("span", [_vm._v("...")]),
            _vm._v(" "),
            _vm._l(
              [_vm.nowPage - 3, _vm.nowPage - 2, _vm.nowPage - 1],
              function(item) {
                return _c(
                  "span",
                  {
                    staticClass: "page-btns",
                    on: {
                      click: function($event) {
                        return _vm.pageChange(item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item))]
                )
              }
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "page-btns current-page",
                on: {
                  click: function($event) {
                    return _vm.pageChange(_vm.nowPage)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.nowPage))]
            ),
            _vm._v(" "),
            _vm._l([_vm.nowPage + 1, _vm.nowPage + 2], function(item) {
              return _c(
                "span",
                {
                  staticClass: "page-btns",
                  on: {
                    click: function($event) {
                      return _vm.pageChange(item)
                    }
                  }
                },
                [_vm._v(_vm._s(item))]
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "p",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.nowPage + 1 == _vm.pageNum,
                expression: "nowPage+1 == pageNum"
              }
            ],
            staticClass: "btn-page"
          },
          [
            _c(
              "span",
              {
                staticClass: "page-btns",
                on: {
                  click: function($event) {
                    return _vm.pageChange(1)
                  }
                }
              },
              [_vm._v("1")]
            ),
            _vm._v(" "),
            _c("span", [_vm._v("...")]),
            _vm._v(" "),
            _vm._l(
              [
                _vm.nowPage - 5,
                _vm.nowPage - 4,
                _vm.nowPage - 3,
                _vm.nowPage - 2,
                _vm.nowPage - 1
              ],
              function(item) {
                return _c(
                  "span",
                  {
                    staticClass: "page-btns",
                    on: {
                      click: function($event) {
                        return _vm.pageChange(item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item))]
                )
              }
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "page-btns current-page",
                on: {
                  click: function($event) {
                    return _vm.pageChange(_vm.nowPage)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.nowPage))]
            ),
            _vm._v(" "),
            _vm._l([_vm.nowPage + 1], function(item) {
              return _c(
                "span",
                {
                  staticClass: "page-btns",
                  on: {
                    click: function($event) {
                      return _vm.pageChange(item)
                    }
                  }
                },
                [_vm._v(_vm._s(item))]
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "p",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.nowPage == _vm.pageNum,
                expression: "nowPage == pageNum"
              }
            ],
            staticClass: "btn-page"
          },
          [
            _c(
              "span",
              {
                staticClass: "page-btns",
                on: {
                  click: function($event) {
                    return _vm.pageChange(1)
                  }
                }
              },
              [_vm._v("1")]
            ),
            _vm._v(" "),
            _c("span", [_vm._v("...")]),
            _vm._v(" "),
            _vm._l(
              [
                _vm.nowPage - 6,
                _vm.nowPage - 5,
                _vm.nowPage - 4,
                _vm.nowPage - 3,
                _vm.nowPage - 2,
                _vm.nowPage - 1
              ],
              function(item) {
                return _c(
                  "span",
                  {
                    staticClass: "page-btns",
                    on: {
                      click: function($event) {
                        return _vm.pageChange(item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item))]
                )
              }
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "page-btns current-page",
                on: {
                  click: function($event) {
                    return _vm.pageChange(_vm.nowPage)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.nowPage))]
            )
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "nextbtn",
            on: {
              click: function($event) {
                return _vm.pageChange(++_vm.nowPage)
              }
            }
          },
          [_c("NextBtn")],
          1
        ),
        _vm._v(" "),
        _vm.jump
          ? _c("p", { staticClass: "jump-page" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.nowPage,
                    expression: "nowPage",
                    modifiers: { number: true }
                  }
                ],
                attrs: { type: "text", placeholder: "页数" },
                domProps: { value: _vm.nowPage },
                on: {
                  blur: [
                    _vm.jumpValChange,
                    function($event) {
                      return _vm.$forceUpdate()
                    }
                  ],
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.nowPage = _vm._n($event.target.value)
                  }
                }
              })
            ])
          : _vm._e()
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/Pagination/src/Pagination.vue?vue&type=template&id=0d96f726&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/Pagination/src/PreBtn.vue?vue&type=template&id=bde14276&
var PreBtnvue_type_template_id_bde14276_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        viewBox: "0 0 1024 1024",
        width: "20",
        height: "20",
        transform: "translate(0,4)"
      }
    },
    [
      _c("path", {
        attrs: {
          d:
            "M650.721435 191.690834c-8.782014 0-17.565051 3.235694-24.26873 9.708106L328.968383 488.573451c-13.408381 12.932544-13.408381 33.9226 0 46.855144l297.485345 287.172465c13.408381 12.9438 35.130102 12.9438 48.538483 0 13.408381-12.932544 13.408381-33.9226 0-46.855144L401.774573 512.001023l273.215592-263.747963c13.408381-12.932544 13.408381-33.9226 0-46.855144C668.286486 194.926528 659.504472 191.68981 650.721435 191.690834z"
        }
      })
    ]
  )
}
var PreBtnvue_type_template_id_bde14276_staticRenderFns = []
PreBtnvue_type_template_id_bde14276_render._withStripped = true


// CONCATENATED MODULE: ./packages/Pagination/src/PreBtn.vue?vue&type=template&id=bde14276&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/Pagination/src/PreBtn.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  PreBtnvue_type_template_id_bde14276_render,
  PreBtnvue_type_template_id_bde14276_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/Pagination/src/PreBtn.vue"
/* harmony default export */ var PreBtn = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/Pagination/src/NextBtn.vue?vue&type=template&id=19dbf9e6&
var NextBtnvue_type_template_id_19dbf9e6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        viewBox: "0 0 1024 1024",
        width: "20",
        height: "20",
        transform: "translate(0,4)"
      }
    },
    [
      _c("path", {
        attrs: {
          d:
            "M372.679931 191.690834c8.782014 0 17.565051 3.235694 24.26873 9.708106l297.484322 287.175535c13.408381 12.932544 13.408381 33.9226 0 46.855144l-297.485345 287.172465c-13.408381 12.9438-35.130102 12.9438-48.53746 0-13.408381-12.932544-13.408381-33.9226 0-46.855144l273.215592-263.744893L348.411201 248.25306c-13.408381-12.932544-13.408381-33.9226 0-46.855144C355.11488 194.926528 363.897917 191.68981 372.679931 191.690834z"
        }
      })
    ]
  )
}
var NextBtnvue_type_template_id_19dbf9e6_staticRenderFns = []
NextBtnvue_type_template_id_19dbf9e6_render._withStripped = true


// CONCATENATED MODULE: ./packages/Pagination/src/NextBtn.vue?vue&type=template&id=19dbf9e6&

// CONCATENATED MODULE: ./packages/Pagination/src/NextBtn.vue

var NextBtn_script = {}


/* normalize component */

var NextBtn_component = Object(componentNormalizer["a" /* default */])(
  NextBtn_script,
  NextBtnvue_type_template_id_19dbf9e6_render,
  NextBtnvue_type_template_id_19dbf9e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var NextBtn_api; }
NextBtn_component.options.__file = "packages/Pagination/src/NextBtn.vue"
/* harmony default export */ var NextBtn = (NextBtn_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/Pagination/src/Pagination.vue?vue&type=script&lang=js&
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





/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
	name:'x-pagination',
	components:{PreBtn: PreBtn,NextBtn: NextBtn},
	props:{
		page:{ // 当前页
			type:Number,
			default:1
		},
		count:{ // 数据总条数
			type:Number,
			default:0
		},
		jump:{ // 跳转功能
			type:Boolean,
			default:true
		},
		pageSize:{
			type:Number,
			default:8
		}
	},
	data(){
		return {
			nowPage:this.page,
			pageCount:8 // 默认分页按钮数
		}
	},
	computed:{
		pageNum(){ // 总共分页数
			return Math.ceil(this.count/this.pageSize)
		}
	},
	methods:{
		jumpValChange(e){
			if(this.nowPage > this.pageNum){
				this.nowPage = this.pageNum
			}
			if(this.nowPage < 1){
				this.nowPage = 1
			}
			this.$emit('change',this.nowPage)
		},
		pageChange(page){ // 当前页变更
			if( page <= 0 ){
				page = 1
			}else if( page >= this.pageNum ){
				page = this.pageNum
			}
			this.nowPage = page
			this.$emit('update:page',this.nowPage)
			this.$emit('change',this.nowPage)
		}
	}
});

// CONCATENATED MODULE: ./packages/Pagination/src/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Pagination/src/Pagination.vue?vue&type=style&index=0&lang=scss&
var Paginationvue_type_style_index_0_lang_scss_ = __webpack_require__(46);

// CONCATENATED MODULE: ./packages/Pagination/src/Pagination.vue






/* normalize component */

var Pagination_component = Object(componentNormalizer["a" /* default */])(
  src_Paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Pagination_api; }
Pagination_component.options.__file = "packages/Pagination/src/Pagination.vue"
/* harmony default export */ var Pagination = (Pagination_component.exports);
// CONCATENATED MODULE: ./packages/Pagination/index.js


Pagination.install = function(Vue){
	Vue.component(Pagination.name,Pagination)
}

/* harmony default export */ var packages_Pagination = __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});