var global={};
var bytesIPAexgothic=null;
var embedderIPAexgothic=null;
global.fire=function(){
	load(_eventfolder+"/pdf-lib.min.js");
	load(_eventfolder+"/fontkit.umd.min.js");
	embedderIPAexgothic=await(PDFLib.CustomFontSubsetEmbedder.for(
		fontkit, 
		byteToUint8Array(bytesIPAexgothic=file.readAllBytes("font/ipaexg00401.ttf")), 
		"IPAexゴシック", 
		{}
		)
	);
	efw.register("PDFLib");
	efw.register("fontkit");
	efw.register("bytesIPAexgothic");
	efw.register("embedderIPAexgothic");
	function byteToUint8Array(byteArray) {
		var uint8Array = new Uint8Array(byteArray.length);
		uint8Array.set(Java.from(byteArray));
		return uint8Array;
	}
}

