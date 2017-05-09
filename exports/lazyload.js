/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function (global_webpack) {
	//global
	var lazyload = global_webpack.lazyload = {};

	//图片懒加载
	//attr: 必须,需要懒加载的图片属性;值填真实的url;
	//例：<img src="fake.png" data-img="true.png">
	lazyload.imgload = function (attrVal) {
		console.log("simpleApp lazyload.imgload 图片懒加载");

		//元素是否在可视区域
		var isInView = function isInView(el) {
			var offset = el.offset || 0;
			// 获取页面元素坐标位置
			var coords = el.getBoundingClientRect();
			var a = coords.top >= 0 && coords.left >= 0 && coords.top;
			var b = (window.innerHeight || document.documentElement.clientHeight) + parseInt(offset);
			// console.log(a);
			// console.log(b);
			// console.log(a<=b); //true表示已经替换过了
			// console.log("+++");
			return a <= b;
		};
		var isDeal = function isDeal(el) {
			return el.getAttribute('src') !== el.getAttribute(attrVal);
		};
		var lazyImg = function lazyImg() {
			var imgs = document.querySelectorAll("img[" + attrVal + "]");
			var len = imgs.length;
			for (var i = 0; i < len; i++) {
				var img = imgs[i];
				//获取页面元素位置
				var rect = img.getBoundingClientRect();
				// console.log(rect.top);
				// console.log(document.documentElement.clientTop);
				var viewHeight = document.documentElement.clientHeight;
				// console.log("viewHeight:"+viewHeight);
				// isInView(img);
				if (img.getAttribute(attrVal) === '') return;
				//是否在可视区域 是否已经替换过
				if (isInView(img) && isDeal(img)) {
					var src = img.getAttribute(attrVal);
					console.log(src);
					console.log("----------");
					img.setAttribute('src', src);
				}
			}
		};

		lazyImg();
		if (document.addEventListener) {
			window.addEventListener('scroll', lazyImg, false);
		} else {
			window.attachEvent('onscroll', lazyImg);
		}
	};
};

/***/ })
/******/ ]);