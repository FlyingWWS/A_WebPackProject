
'use strict';

module.exports = function(global_webpack){
	//global变量
	var imgProcess = global_webpack.imgProcess = {};

	//预览图片(单张)
	// input.id : file  (必须)
	// img.id : previewImg  （必须）
	imgProcess.previewImgFile = function(){
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
		},  false);

		if(file){
			reader.readAsDataURL(file);
		}
	}

	//预览图片(多张)
	// 注意：input 加 multiple属性 
	// input.id : files  (必须)
	// div.id : previewImgs  (必须)
	imgProcess.previewImgFiles = function(){
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
				},  false);

			    reader.readAsDataURL(file);
			}
		}

		if (files) {
			[].forEach.call(files, readAndPreview);
		}
	}
}
