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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function (global_webpack) {
	//global变量
	var imgProcess = global_webpack.imgProcess = {};

	//预览图片(单张)
	// input.id : file  (必须)
	// img.id : previewImg  （必须）
	imgProcess.previewImgFile = function () {
		console.log("ImgProcess imgProcess.previewImgFile 预览单张图片");

		var input = document.getElementById("file");
		var previewImg = document.getElementById("previewImg");

		var file = input.files[0];
		// console.log(file);

		if (!/image\/\w+/.test(file.type)) {
			alert("文件必须为图片！");
			return false;
		}

		var reader = new FileReader();
		reader.addEventListener("load", function () {
			// console.log(this);
			previewImg.src = this.result;
		}, false);

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	//预览图片(多张)
	// 注意：input 加 multiple属性 
	// input.id : files  (必须)
	// div.id : previewImgs  (必须)
	imgProcess.previewImgFiles = function () {
		console.log("ImgProcess imgProcess.previewImgFiles 预览多张图片");

		var input = document.getElementById("files");
		var previewImgs = document.getElementById("previewImgs");

		var files = input.files;
		console.log(files);

		function readAndPreview(file) {
			// Make sure `file.name` matches our extensions criteria
			if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
				var reader = new FileReader();

				reader.addEventListener("load", function () {
					var image = new Image();
					image.height = 100;
					image.title = file.name;
					image.src = this.result;
					previewImgs.appendChild(image);
				}, false);

				reader.readAsDataURL(file);
			}
		}

		if (files) {
			[].forEach.call(files, readAndPreview);
		}
	};
};

/***/ }),
/* 1 */
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function (global_webpack) {
	//global
	var lottery = global_webpack.lottery = {};

	//刮刮卡  
	// canvasID: 必须, 画布id;
	// lineWidth: 必须, 滑线的宽度；
	lottery.scratchCard = function (canvasID, lineWidth) {
		console.log("simpleApp lottery.scratchCard 刮刮卡");

		var isDown = false;
		var lastX;
		var lastY;
		var c = document.getElementById(canvasID);
		var ctx = c.getContext("2d");
		var offsetX = c.offsetLeft;
		var offsetY = c.offsetTop;

		ctx.fillStyle = 'gray';
		var c_width = c.width;
		var c_height = c.height;
		// console.log(c_width);
		ctx.fillRect(0, 0, c_width, c_height);
		ctx.globalCompositeOperation = 'destination-out';
		// ctx.fillRect(10,30,75,50);

		function down(e) {
			e.preventDefault();
			isDown = true;
			if (e.changedTouches) {
				e = e.changedTouches[e.changedTouches.length - 1];
			}
			lastX = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0;;
			lastY = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;;
		}
		function up(e) {
			e.preventDefault();
			isDown = false;
		}
		function move(e) {
			e.preventDefault();
			if (isDown) {
				if (e.changedTouches) {
					e = e.changedTouches[e.changedTouches.length - 1];
				}
				var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0;
				var y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
				console.log(e.pageX + "---" + e.pageY);
				// console.log(x+"---"+y);
				// console.log(offsetX);
				// console.log(offsetY)
				draw(x, y, true);
			}
		}
		function draw(x, y, isDown) {
			if (isDown) {
				ctx.beginPath();
				ctx.lineWidth = lineWidth;
				ctx.lineJoin = "round";
				ctx.moveTo(lastX, lastY);
				ctx.lineTo(x, y);
				ctx.closePath();
				ctx.stroke();
			}
			lastX = x;
			lastY = y;
		}

		c.addEventListener("touchstart", down, false);
		c.addEventListener("touchmove", move, false);
		c.addEventListener("touchend", up, false);
		c.addEventListener("touchleave", up, false);

		c.addEventListener("mousedown", down, false);
		c.addEventListener("mousemove", move, false);
		c.addEventListener("mouseup", up, false);
		c.addEventListener("mouseleave", up, false);
	};
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


//example
// var exa = require("./modules/exa.js");


var global_webpack = {};

//global_webpack.imgProcess  图片处理：图片预览
__webpack_require__(0)(global_webpack);
//global_webpack.lazyload  图片懒加载
__webpack_require__(1)(global_webpack);

//global_webpack.lottery  刮刮卡
__webpack_require__(2)(global_webpack);


//global
window.global_webpack = module.exports =  global_webpack;

/***/ })
/******/ ]);