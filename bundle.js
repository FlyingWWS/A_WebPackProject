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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


window.imgProcess = exports;

exports.a = function(){
	console.log("exa");
}

//预览图片(单张)
// input.id : file  (必须)
// img.id : previewImg  （必须）
exports.previewImgFile = function(){
    var input = document.getElementById("file");
    var previewImg = document.getElementById("previewImg");
    
    var file = input.files[0];
    // console.log(file);

    if(!/image\/\w+/.test(file.type)){
        alert("文件必须为图片！");
        return false;
    }

    var reader = new FileReader();
    reader.addEventListener("load", function () {
    	// console.log(this);
        previewImg.src = this.result;
	}, false);

	if(file){
		reader.readAsDataURL(file);
	}
}

//预览图片(多张)
exports.previewImgFiles = function(){
	var input = document.getElementById("files");
    var previewImgs = document.getElementById("previewImgs");

    var files = input.files;
    console.log(files);

    function readAndPreview(file) {

    // Make sure `file.name` matches our extensions criteria
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
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
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


//示例
// require("./modules/exa.js");

//图片处理
__webpack_require__(0);

/***/ })
/******/ ]);