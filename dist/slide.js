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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/Slide/src/Slide.vue?vue&type=template&id=1f239c14&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "x-slide" }, [
    _c(
      "ul",
      { staticClass: "x-slide-imgpage", style: { width: _vm.ulWidth + "px" } },
      [_vm._t("default")],
      2
    ),
    _vm._v(" "),
    _vm.arrowShow
      ? _c("div", { staticClass: "x-slide-arrowbtn" }, [
          _c("span", {
            staticClass: "left-arrow",
            on: { click: _vm.moveLeft }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "rigth-arrow",
            on: { click: _vm.moveRight }
          })
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.paginationShow
      ? _c(
          "ul",
          { staticClass: "x-slide-paginationbtn" },
          _vm._l(_vm.sourceLength, function(item, index) {
            return _c("li", {
              class: [{ active: index == _vm.roundNum }],
              on: {
                click: function($event) {
                  return _vm.moveUL(index)
                }
              }
            })
          }),
          0
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/Slide/src/Slide.vue?vue&type=template&id=1f239c14&

// EXTERNAL MODULE: ./src/utils/dom.js
var dom = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./packages/Slide/src/Slide.vue?vue&type=script&lang=js&
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
 * pc wap 事件
 * 左右箭头+圆点点击
 * 定时器
 * 数据传输
 * 图片 or 其他内容
 */
/* harmony default export */ var Slidevue_type_script_lang_js_ = ({
	name:'x-slide',
	inheritAttrs:false,
	props:{
		autoPlay:{
			type:Boolean,
			default:true
		},
		transitionTime:{
			type:String,
			default:'.3s'
		},
		intervalTime:{
			type:Number,
			default:3000
		},
		paginationShow:{
			type:Boolean,
			default:true
		},
		arrowShow:{
			type:Boolean,
			default:true
		}
	},
	data(){
		return {
			xArr:[], // 位置数组
			slide:null,
			slideUl:null,
			lis:null,
			slideWidth:0, // 父级宽度 = 1张图宽度
			ulWidth:0,
			liLength:0, // 拷贝后的li数
			sourceLength:0, // 拷贝前li数
			moveNum:1,
			roundNum:0,
			onOff:true,
			moveX:0,
			timer:null,
			// wap
			startX:0,
			disX:0,
			UlNowX:0,
			transiting:false, // UL是否正在transition中
			isStart:true // 判读是否正常拖拽
		}
	},
	methods:{
		create(){
			this.init()
			this.slideUlTransitionEnd()
			if(this.autoPlay){this.autoLoop()}
			// mobile event
			this.mobile()
		},
		init(){
			this.slide = this.$el
			this.slideWidth = this.slide.offsetWidth
			this.slideUl = this.$el.querySelector('.x-slide-imgpage')
			this.lis = this.slideUl.querySelectorAll('li')
			this.liLength = this.lis.length+2
			this.sourceLength = this.lis.length
			this.slideUl.insertBefore(this.lis[this.lis.length-1].cloneNode(true),this.lis[0])
			this.slideUl.appendChild(this.lis[0].cloneNode(true))
			this.ulWidth = (this.liLength)*this.slideWidth
			this.moveX = -this.slideWidth
			this.slideUl.style.transform = `translate(-${this.slideWidth}px,0)`
			for(let i=0;i<this.liLength;i++){
				this.xArr.push(-i*this.slideWidth)
			}
		},
		mobile(){ //移动端事件
			/**
			 * 动画执行时不能拖拽
			 */
			this.slide.addEventListener('touchstart',e=>{
				clearInterval(this.timer)
				if(!this.transiting){
					this.isStart = true
					this.slideUl.style.transition = '.0s'
					this.UlNowX = Object(dom["a" /* getStyle */])(this.slideUl,'transform')['translateX']
					this.startX = e.touches[0].clientX
				}
				e.preventDefault()
			})
			this.slide.addEventListener('touchmove',e=>{
				clearInterval(this.timer)
				if(!this.transiting && this.isStart){ // 动画时不能拖拽，并且是正常点击触发，因为有可能动画结束时手指仍在拖动
					this.disX =  parseInt((e.touches[0].clientX - this.startX)*.4)
					this.slideUl.style.transform = `translate(${(this.disX+this.UlNowX)}px,0)`
				}
				e.preventDefault()
			})
			this.slide.addEventListener('touchend',e=>{
				if(!this.transiting){
					this.transiting = true
					this.isStart = false
					if(Math.abs(this.disX) >= 30){ // 滑动幅度大则切换
						this.disX > 0 ? this.moveLeft() : this.moveRight()
					}else if(this.disX != 0){ // 小幅挪动回到原位	
						this.slideUl.style.transition = this.transitionTime
						this.slideUl.style.transform = `translate(${(this.moveX)}px,0)`
					}else if(this.disX == 0 && this.xArr.includes(this.moveX)){ // 点击
						this.transiting = false
						if(this.autoPlay){this.autoLoop()}
					}
					this.disX = 0
				}
				e.preventDefault()
			})
		},
		moveUL(index){
			clearInterval(this.timer)
			this.onOff = false
			this.slideUl.style.transition = this.transitionTime
			this.moveNum = index+1
			this.roundNum = index
			this.slideUl.style.transform = `translate(-${this.moveNum*this.slideWidth}px,0)`
		},
		moveLeft(){
			clearInterval(this.timer)
			if(this.onOff){
				this.onOff = false
				this.transiting = true
				this.slideUl.style.transition = this.transitionTime
				this.roundNum == 0 ? this.roundNum = this.sourceLength-1 : this.roundNum--
				this.moveX = -(--this.moveNum * this.slideWidth)
				this.slideUl.style.transform = `translate(${this.moveX}px,0)`
			}
		},
		moveRight(){
			clearInterval(this.timer)
			if(this.onOff){
				this.onOff = false
				this.transiting = true
				this.slideUl.style.transition = this.transitionTime
				this.roundNum = this.moveNum%this.sourceLength
				this.moveX = -(++this.moveNum * this.slideWidth)
				this.slideUl.style.transform = `translate(${this.moveX}px,0)`
			}
		},
		slideUlTransitionEnd(){ // ul切换动画后检测
			this.slideUl.addEventListener('transitionend',e=>{
				if(this.moveNum == 0){ // 到达最后一张Loop位
					this.slideUl.style.transition = '.0s'
					this.moveNum = this.sourceLength
					this.moveX = -(this.slideWidth*(this.sourceLength))
					this.slideUl.style.transform = `translate(${this.moveX}px,0)`
					this.onOff = true
					this.transiting = false
					if(this.autoPlay){this.autoLoop()}
				}else if(this.moveNum == this.liLength-1){ // 到达第一张Loop位
					this.slideUl.style.transition = '.0s'
					this.moveNum = 1
					this.moveX = -this.slideWidth
					this.slideUl.style.transform = `translate(${this.moveX}px,0)`
					this.onOff = true
					this.transiting = false
					if(this.autoPlay){this.autoLoop()}
				}else{
					this.onOff = true
					this.transiting = false
					if(this.autoPlay){this.autoLoop()}
				}
			})
		},
		autoLoop(){
			clearInterval(this.timer)
			this.timer=setInterval(_=>{
				this.moveRight()
			},this.intervalTime)
		}
	}
});

// CONCATENATED MODULE: ./packages/Slide/src/Slide.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Slidevue_type_script_lang_js_ = (Slidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Slide/src/Slide.vue?vue&type=style&index=0&lang=scss&
var Slidevue_type_style_index_0_lang_scss_ = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/Slide/src/Slide.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Slidevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/Slide/src/Slide.vue"
/* harmony default export */ var Slide = (component.exports);
// CONCATENATED MODULE: ./packages/Slide/index.js


// 单组件引入时需提供install方法给Vue.use单独注册
Slide.install = function(Vue){
	Vue.component(Slide.name,Slide)
}

/* harmony default export */ var packages_Slide = __webpack_exports__["default"] = (Slide);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Slide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Slide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Slide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Slide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ });
});