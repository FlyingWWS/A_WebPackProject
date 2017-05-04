
'use strict'

module.exports = function(global_webpack){
	//global
	var lazyload = global_webpack.lazyload = {};

	//图片懒加载
	//attr: 必须,需要懒加载的图片属性;值填真实的url;
	//例：<img src="fake.png" data-img="true.png">
	lazyload.imgload = function(attrVal){
		console.log("simpleApp lazyload.imgload 图片懒加载");

		//元素是否在可视区域
		var isInView = function(el){
			var offset = el.offset || 0;
			// 获取页面元素坐标位置
			var coords = el.getBoundingClientRect();
			var a = (coords.top >= 0 && coords.left >= 0 && coords.top);
			var b = (window.innerHeight || document.documentElement.clientHeight) + parseInt(offset);
			// console.log(a);
			// console.log(b);
			// console.log(a<=b); //true表示已经替换过了
			// console.log("+++");
			return (a<=b);
		}
		var isDeal = function(el){
			return (el.getAttribute('src')!==el.getAttribute(attrVal));
		}
		var lazyImg = function(){
			var imgs = document.querySelectorAll("img["+attrVal+"]");
			var len = imgs.length;
			for(var i=0;i<len; i++){
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
					img.setAttribute('src',src);
				}
			}
		}

		lazyImg();
		if (document.addEventListener) {
		    window.addEventListener('scroll', lazyImg, false);
	    } else {
	      window.attachEvent('onscroll', lazyImg);
	    }

	}
}