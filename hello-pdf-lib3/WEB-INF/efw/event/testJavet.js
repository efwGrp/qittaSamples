var testJavet={};
testJavet.paramsFormat={
	pdf:null
};
testJavet.fire=function(params){
	var initscript=`
		const PDFLib = require(_eventfolder+"/pdf-lib.min.js");
		const fontkit = require(_eventfolder+"/fontkit.umd.min.js");
		function byteToUint8Array(byteArray) {
			var uint8Array = new Uint8Array(byteArray.length);
			uint8Array.set(Array.from(byteArray));
			return uint8Array;
		}
		var embedderIPAexgothic;
		(async function(){
			embedderIPAexgothic=await PDFLib.CustomFontSubsetEmbedder.for(
				fontkit, 
				byteToUint8Array(bytesIPAexgothic), 
				"IPAexゴシック", 
				{}
			);
		})();
	`;
	var runscript=`
		var pdfDataUri;
		(async function(){
			var pdfDoc=await PDFLib.PDFDocument.create();
			var myfont=PDFLib.PDFFont.of(pdfDoc.context.nextRef(), pdfDoc, embedderIPAexgothic);
			pdfDoc.fonts.push(myfont);
			var page = pdfDoc.addPage([500, 400]);
			page.setFont(myfont);
			page.moveTo(10, 200);
			page.drawText('Hello World!こんにちは東京'+createdate);
			pdfDataUri=await pdfDoc.saveAsBase64({ dataUri: true });
		})();
	`;
	var pdfDataUri=loadWithGlobalPool({
		name:"pdf-lib-javet",
		max:10,
		initializer:initscript,
		script:runscript,
		context:{bytesIPAexgothic:bytesIPAexgothic,createdate:new Date().format("mm:ss SSS")},
		engine:"javet",
		returnVar:"pdfDataUri",
	});
	return new Result().eval("$('"+params.pdf+"')[0].src='" +pdfDataUri +"'");
	
}