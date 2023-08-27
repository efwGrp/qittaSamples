/*
var global={};
global.fire=function(){
	load(file.getStorageFolder()+"/../event/pdfmake.min.js");
	load(file.getStorageFolder()+"/../event/vfs_fonts.min.js");
	efw.register("pdfMake");
}
*/
var global={};
global.fire=function(){
	load(file.getStorageFolder()+"/../event/pdfmake.min.js");
	load(file.getStorageFolder()+"/../event/vfs_fonts.min.js");
	efw.register("pdfMake");
	pdfMake.vfs["ipaexg00401.ttf"]=encodeBytestoBase64forPdfMake(file.readAllBytes("font/ipaexg00401.ttf"));//IPAexゴシック 
//	pdfMake.vfs["ipaexm00401.ttf"]=encodeBytestoBase64forPdfMake(file.readAllBytes("font/ipaexm00401.ttf"));//IPAex明朝
//	pdfMake.vfs["ipag00303.ttf"]=encodeBytestoBase64forPdfMake(file.readAllBytes("font/ipag00303.ttf"));//IPAゴシック
//	pdfMake.vfs["ipam00303.ttf"]=encodeBytestoBase64forPdfMake(file.readAllBytes("font/ipam00303.ttf"));//IPA明朝
//	pdfMake.vfs["ipagp00303.ttf"]=encodeBytestoBase64forPdfMake(file.readAllBytes("font/ipagp00303.ttf"));//IPA Pゴシック
//	pdfMake.vfs["ipamp00303.ttf"]=encodeBytestoBase64forPdfMake(file.readAllBytes("font/ipamp00303.ttf"));//IPA P明朝
}

function encodeBytestoBase64forPdfMake(aBytes) {
	//Byte配列をUint8Arrayに変換する
	var temp = new Uint8Array(aBytes.length);
	temp.set(Java.from(aBytes));
	aBytes=temp;
	//base64の文字列を作成する
	var nMod3 = 2, sB64Enc = '';
	for (var nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
		nMod3 = nIdx % 3;
		if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0) { sB64Enc += '\r\n'; }
			nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
		if (nMod3 === 2 || aBytes.length - nIdx === 1) {
			sB64Enc += String.fromCharCode(uint6ToB64(nUint24 >>> 18 & 63), uint6ToB64(nUint24 >>> 12 & 63), uint6ToB64(nUint24 >>> 6 & 63), uint6ToB64(nUint24 & 63));
			nUint24 = 0;
		}
	}
	return sB64Enc.substr(0, sB64Enc.length - 2 + nMod3) + (nMod3 === 2 ? '' : nMod3 === 1 ? '=' : '==');
	//------------
	function uint6ToB64 (nUint6) {
		return nUint6 < 26 ?
		  nUint6 + 65
		: nUint6 < 52 ?
		  nUint6 + 71
		: nUint6 < 62 ?
		  nUint6 - 4
		: nUint6 === 62 ?
		  43
		: nUint6 === 63 ?
		  47
		:
		  65;
	}
}
