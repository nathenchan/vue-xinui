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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
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

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/SlideVerify/src/SlideVerify.vue?vue&type=template&id=457684f4&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "loading",
          rawName: "v-loading",
          value: _vm.loadingNum < 2,
          expression: "loadingNum<2"
        }
      ],
      staticClass: "picture-puzzle"
    },
    [
      _c("div", { staticClass: "picture" }, [
        _c("img", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.loadingNum >= 2,
              expression: "loadingNum>=2"
            }
          ],
          staticClass: "dragbg",
          attrs: { src: _vm.verifyData.imgs.dragBg }
        }),
        _vm._v(" "),
        _c("img", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.dragImgShow,
              expression: "dragImgShow"
            }
          ],
          staticClass: "dragimg",
          style: { width: _vm.dragImgWidth + "px" },
          attrs: { src: _vm.verifyData.imgs.dragImg }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "dragverify" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.dragBlockShow,
                expression: "dragBlockShow"
              }
            ],
            staticClass: "dragblock",
            class: _vm.error ? "error" : ""
          },
          [
            _c(
              "svg",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.error && !_vm.success,
                    expression: "!error && !success"
                  }
                ],
                staticClass: "icon-arrow",
                attrs: { viewBox: "0 0 1264 1024", width: "22" }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M1250.057513 473.992162L794.480863 15.313483a50.054101 50.054101 0 0 0-72.069473 0l-72.00924 73.394612a52.22251 52.22251 0 0 0 0 73.213911l246.716726 247.680464H52.674262C23.551328 409.60247 0 432.491228 0 460.801009v102.397079c0 28.309781 23.551328 51.198539 52.704379 51.198539h841.613636l-246.837193 247.740697a52.342977 52.342977 0 0 0 0 73.304261l72.039356 73.424729c19.78673 20.178248 52.102043 20.178248 72.069474 0l458.467861-461.47954a52.824846 52.824846 0 0 0 0-73.394612",
                    "p-id": "1980",
                    fill: "#1296db"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "svg",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.error,
                    expression: "error"
                  }
                ],
                staticClass: "icon-close",
                attrs: { width: "28", viewBox: "0 0 1024 1024" }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M597.795527 511.488347 813.564755 295.718095c23.833825-23.833825 23.833825-62.47489 0.001023-86.307691-23.832801-23.832801-62.47489-23.833825-86.307691 0L511.487835 425.180656 295.717583 209.410404c-23.833825-23.833825-62.475913-23.833825-86.307691 0-23.832801 23.832801-23.833825 62.47489 0 86.308715l215.769228 215.769228L209.410915 727.258599c-23.833825 23.833825-23.833825 62.47489 0 86.307691 23.832801 23.833825 62.473867 23.833825 86.307691 0l215.768205-215.768205 215.769228 215.769228c23.834848 23.833825 62.475913 23.832801 86.308715 0 23.833825-23.833825 23.833825-62.47489 0-86.307691L597.795527 511.488347z",
                    fill: "#d91e18"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "svg",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.success,
                    expression: "success"
                  }
                ],
                staticClass: "icon-success",
                attrs: { viewBox: "0 0 1336 1024", width: "28", height: "32" }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M49.588224 883.816448M1139.531776 883.816448M86.939648 862.977024M538.459136 960.381952c109.876224-153.544704 223.55968-289.842176 308.03968-385.787904 49.87392-56.639488 96.715776-108.155904 141.549568-154.500096 40.576-41.945088 80.805888-80.405504 119.478272-116.59264 65.92-61.693952 142.984192-130.034688 191.446016-159.30368l-61.891584-82.050048c-89.732096 56.139776-176.10752 116.103168-242.799616 162.18112-38.863872 26.855424-74.928128 52.667392-108.915712 77.252608-33.668096 24.356864-68.429824 51.106816-105.081856 79.166464-63.633408 48.712704-145.388544 114.194432-224.555008 181.860352L357.07904 374.989824 123.885568 558.770176 538.459136 960.381952zM1335.92064 862.977024",
                    fill: "#1afa29"
                  }
                })
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "tips", class: _vm.error && "errortips" }, [
          _vm._v(_vm._s(_vm.tipsText))
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/SlideVerify/src/SlideVerify.vue?vue&type=template&id=457684f4&

// CONCATENATED MODULE: ./src/utils/isWap.js
var isWap = function () {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return true
    } else {
        return false
    }
}

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/SlideVerify/src/SlideVerify.vue?vue&type=script&lang=js&
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

	/**
	 * 流程： 请求数据(图片) 滑动结束后简单判断用户所用时间(后端给的x值不能太小)
	 * 后端安全性： 碎片图正确位置随机性、碎片图和背景图扣块位置随机生成（后端随机生成这两张图返给前端），ip请求接口的防刷,
	 * finish 滑动拼图至正确位置的回调	
	 * error 错误回调
	 * 错误次数限制
	 * slideverifyData:{
			imgs:{
				dragImg:'',
					dragBg:''
			},
			dx:null
		}
 	 *	
	 */
	

	// 数据实例
	/* harmony default export */ var SlideVerifyvue_type_script_lang_js_ = ({
		name:'x-slide-verify',
		props:{
			maxError:{
				type:[Number,String],
				default:8
			},
			verifyData:{
				type: Object,
				default() {
					return {
						imgs:{
							dragImg:'',
	  						dragBg:''
						},
						dx:null,
						dragImgWidth:0,
						dragBgWidth:0
					}
				}
			},
			autoInit:{
				type:Boolean,
				default:true
			}
		},
		data(){
			return {
				elWidth:0, // 元素的显示宽 
				dragImgWidth:'',
				loadingNum:0,
				tipsText:'向右拖动滑块填充拼图',
				dragImg:'',
				dragBg:'',
				dragImgShow:false,
				dragBlockShow:true,
				errorNum:0,
				moveX:0,
				dragVerify:null,
				pictureIndex:0,
				dragblockText:'&gt;&gt;', // &gt;&gt;
				error:false,
				success:false,
				timer:null
			}
		},
		methods:{
			init(){
				var dragVerify = this.$el.querySelector('.dragverify'),
					dragBlock = dragVerify.querySelector('.dragblock'),
					dragBg = this.$el.querySelector('.dragbg'),
					dragImg = this.$el.querySelector('.dragimg'),
					maxLeft = dragVerify.clientWidth - dragBlock.offsetWidth,
					tips = this.$el.querySelector('.picture-puzzle .tips'),
					moveX = 0,
					pointsX = 0,
					pageX = 0,
					useTime = 0,
					dx = 0 

				var imgLoad = ()=>{
					this.loadingNum++
					if(this.loadingNum>=2){
						setTimeout(_=>{
							this.elWidth = dragBg.offsetWidth
							dx = (this.elWidth/this.verifyData.dragBgWidth)*this.verifyData.dx // 正确位置需要等比例缩放
							this.dragImgWidth = (this.elWidth/this.verifyData.dragBgWidth)*this.verifyData.dragImgWidth // 碎片图尺寸等比例缩放
							this.dragImgShow = true
						},30)
					}
				}

				dragBg.onload = imgLoad
				dragImg.onload = imgLoad

				var downFunc = '',
					moveFunc = '',
					upFunc = ''

				if( isWap() ){

					downFunc = 'touchstart'
					moveFunc = 'touchmove'
					upFunc = 'touchend'

					// 阻止移动端滑动页面
					this.$el.addEventListener('touchmove',function(e){
						e.preventDefault()
					})
				}else{
					
					downFunc = 'mousedown'
					moveFunc = 'mousemove'
					upFunc = 'mouseup'

				}

				dragBlock.addEventListener(downFunc,(event)=>{
					clearTimeout(this.timer)
					pageX = isWap() ? event.changedTouches[0].pageX : event.pageX
					pointsX  = pageX - dragBlock.offsetLeft - dragVerify.offsetLeft
					tips.style.display = 'none'
					useTime = new Date().getTime()
					document.addEventListener(moveFunc,moveScrollX,{ passive: false })
					document.addEventListener(upFunc,dragFinish)
				})

				// 小拼图滑动
				dragImg.addEventListener(downFunc,(event)=>{
					clearTimeout(this.timer)
					pageX = isWap() ? event.changedTouches[0].pageX : event.pageX
					pointsX  = pageX - dragBlock.offsetLeft - dragVerify.offsetLeft
					tips.style.display = 'none'
					document.addEventListener(moveFunc,moveScrollX,{ passive: false })
					document.addEventListener(upFunc,dragFinish)
				})

				var moveScrollX =  (event) => {
					pageX = isWap() ? event.touches[0].pageX : event.pageX
					moveX = pageX - dragVerify.offsetLeft - pointsX
					// 拖动范围最大值于最小值的判断
					if( moveX <= 0 ){ moveX = 0 }
					if( moveX >= maxLeft ){ moveX = maxLeft }
					dragBlock.style.left = moveX+'px'
					if( dragImg.offsetWidth + moveX > dragBg.offsetWidth ){
						dragImg.style.left = ( dragBg.offsetWidth - dragImg.offsetWidth )+'px'
					}else{
						dragImg.style.left = moveX+'px'
					}
					this.moveX = moveX
					event.preventDefault()
				}

				var resetStatus = ()=>{
					dragBlock.style.left = 0+'px' 
					dragImg.style.left = 0+'px'
					this.dragblockText = '&gt;&gt;'
					this.error = false
					this.success = false
					tips.style.display = 'block'
				}
				
				var dragFinish = event=>{
					useTime = new Date().getTime() - useTime
					document.removeEventListener(moveFunc,moveScrollX)
					document.removeEventListener(upFunc,dragFinish)
					event.preventDefault()
					this.tipsText = ''
					// 提示信息
					if(moveX < 80 ){
						tips.style.display = 'block'
					}
					// 拼图完成 接近即可
					if( Math.abs(moveX - dx) < 6 && useTime > 300 ){
						this.success = true
						this.timer = setTimeout(_=>{
							useTime = 0
							resetStatus()
							this.$emit('finish')
						},500)
					}else{
						this.errorNum++
						this.dragblockText = 'X'
						this.error = true
						this.timer = setTimeout(_=>{
							useTime = 0
							resetStatus()
							if(this.errorNum >= this.maxError){ // 错误次数过多
								this.tipsText = '错误次数过多'
								this.error = true
								this.dragImgShow = false
								this.dragBlockShow = false
							}
							this.$emit('error',this.errorNum)
						},300)
					}
				}
			}
		},
		mounted(){
			this.init()
		},
		created(){
			this.$emit('preload')
		}
	});

// CONCATENATED MODULE: ./packages/SlideVerify/src/SlideVerify.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_SlideVerifyvue_type_script_lang_js_ = (SlideVerifyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/SlideVerify/src/SlideVerify.vue?vue&type=style&index=0&lang=scss&
var SlideVerifyvue_type_style_index_0_lang_scss_ = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/SlideVerify/src/SlideVerify.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_SlideVerifyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/SlideVerify/src/SlideVerify.vue"
/* harmony default export */ var SlideVerify = (component.exports);
// CONCATENATED MODULE: ./packages/SlideVerify/index.js


SlideVerify.install = function(Vue){
	Vue.component(SlideVerify.name,SlideVerify)
}

/* harmony default export */ var packages_SlideVerify = __webpack_exports__["default"] = (SlideVerify);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideVerify_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideVerify_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideVerify_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideVerify_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ });
});