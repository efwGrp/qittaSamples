var test1={};
test1.paramsFormat={
	pdf:null
};
test1.fire=Java.synchronized(function(params){
	var pdfDataUri;
	var pdfDoc=await(PDFLib.PDFDocument.create());
	pdfDoc.registerFontkit(fontkit);
	var myfont=PDFLib.PDFFont.of(pdfDoc.context.nextRef(), pdfDoc, embedderIPAexgothic);
	pdfDoc.fonts.push(myfont);
	var page = pdfDoc.addPage([500, 400]);
	page.setFont(myfont);
	page.moveTo(10, 200);
	page.drawText('Hello World!こんにちは東京');
	pdfDataUri=await(pdfDoc.saveAsBase64({ dataUri: true }));
	return new Result().eval("$('"+params.pdf+"')[0].src='" +pdfDataUri +"'");
},test1);
