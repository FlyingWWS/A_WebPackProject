
//example
// var exa = require("./modules/exa.js");


var global_webpack = {};

//global_webpack.imgProcess  图片处理：图片预览
require("./modules/ImgProcess/imgProcess.js")(global_webpack);
//global_webpack.lottery  刮刮卡
require("./modules/simpleApp/lottery.js")(global_webpack);

//global
window.global_webpack = module.exports =  global_webpack;