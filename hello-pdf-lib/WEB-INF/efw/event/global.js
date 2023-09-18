/*
var global={};
global.fire=function(){
	load(_eventfolder+"/pdf-lib.min.js");
	efw.register("PDFLib");
}
*/

var global={};
var fontBytes={};
global.fire=function(){
	load(_eventfolder+"/pdf-lib.min.js");
	load(_eventfolder+"/fontkit.umd.min.js");
	efw.register("PDFLib");
	efw.register("fontkit");
	efw.register("fontBytes");
	function byteToUint8Array(byteArray) {
		var uint8Array = new Uint8Array(byteArray.length);
		uint8Array.set(Java.from(byteArray));
		return uint8Array;
	}
	fontBytes["IPAexゴシック"] = byteToUint8Array(file.readAllBytes("font/ipaexg00401.ttf"));
	//fontBytes["IPAex明朝"] = byteToUint8Array(file.readAllBytes("font/ipaexm00401.ttf"));
	//fontBytes["IPAゴシック"] = byteToUint8Array(file.readAllBytes("font/ipag00303.ttf"));
	//fontBytes["IPA明朝"] = byteToUint8Array(file.readAllBytes("font/ipam00303.ttf"));
	//fontBytes["IPA Pゴシック"] = byteToUint8Array(file.readAllBytes("font/ipagp00303.ttf"));
	//fontBytes["IPA P明朝"] = byteToUint8Array(file.readAllBytes("font/ipamp00303.ttf"));
}

