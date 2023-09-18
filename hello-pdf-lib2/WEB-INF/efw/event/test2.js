var test2={};
test2.paramsFormat={
	pdf:null
};
test2.fire=function(params){
	var initscript=`
		load(_eventfolder+"/pdf-lib.min.js");
		load(_eventfolder+"/fontkit.umd.min.js");
		var embedderIPAexgothic=await(PDFLib.CustomFontSubsetEmbedder.for(
			fontkit, 
			byteToUint8Array(bytesIPAexgothic), 
			"IPAexゴシック", 
			{}
			)
		);
		function byteToUint8Array(byteArray) {
			var uint8Array = new Uint8Array(byteArray.length);
			uint8Array.set(Java.from(byteArray));
			return uint8Array;
		}
	`;
	var runscript=`
		var pdfDataUri;
		var pdfDoc=await(PDFLib.PDFDocument.create());
		var myfont=PDFLib.PDFFont.of(pdfDoc.context.nextRef(), pdfDoc, embedderIPAexgothic);
		pdfDoc.fonts.push(myfont);
		var page = pdfDoc.addPage([500, 400]);
		page.setFont(myfont);
		page.moveTo(10, 200);
		page.drawText('Hello World!こんにちは東京');
		pdfDataUri=await(pdfDoc.saveAsBase64({ dataUri: true }));
		pdfDataUri;
	`;
	var pdfDataUri=loadWithGlobalPool({
		name:"pdf-lib",
		max:10,
		initializer:initscript,
		script:runscript,
		context:{bytesIPAexgothic:bytesIPAexgothic}
	});
	return new Result().eval("$('"+params.pdf+"')[0].src='" +pdfDataUri +"'");
	
}