var test={};
test.paramsFormat={};
test.fire=function(params){
	/*
	var pdfDataUri="";
	var pdfDoc=await(PDFLib.PDFDocument.create());
	var page = pdfDoc.addPage([350, 400]);
	page.moveTo(110, 200);
	page.drawText('Hello World!');
	var pdfDataUri=await(pdfDoc.saveAsBase64({ dataUri: true }));
	return new Result().eval("$('#pdf')[0].src='" +pdfDataUri +"'");
	*/
	
	var pdfDoc=await(PDFLib.PDFDocument.create());
	pdfDoc.registerFontkit(fontkit);
	var myfont = await(pdfDoc.embedFont(fontBytes["IPAexゴシック"],{ subset: true }));
	var page = pdfDoc.addPage([500, 400]);
	page.setFont(myfont);
	page.moveTo(110, 200);
	page.drawText('Hello World!こんにちは東京');
	var pdfDataUri=await(pdfDoc.saveAsBase64({ dataUri: true }));
	return new Result().eval("$('#pdf')[0].src='" +pdfDataUri +"'");
	
}