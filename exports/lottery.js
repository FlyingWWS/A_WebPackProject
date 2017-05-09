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

/***/ })
/******/ ]);