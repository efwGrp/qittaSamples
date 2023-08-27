/*
var test={};
test.paramsFormat={};
test.fire=function(params){
	var docDefinition = {
        content: [
            { text:"hello world!", fontSize: 20},
        ],
	};
	var pdfDataUri;
	var doc=pdfMake.createPdf(docDefinition);
	pdfDataUri=await(
		new Promise(function(resolve,reject){
			doc.getDataUrl(function(data){
				resolve(data);
			});
		})
	);
	return new Result().eval("$('#pdf')[0].src='" +pdfDataUri +"'");
}
*/
var test={};
test.paramsFormat={};
test.fire=function(params){
	var docDefinition = {
		content: [
			{ text:"hello world!こんにちは東京", fontSize: 20 },
		],
		defaultStyle: {
			font:"IPAexゴシック"
		}
	};
	var fonts={
		"IPAexゴシック":{
			normal:"ipaexg00401.ttf",
			bold:"ipaexg00401.ttf",
			italics:"ipaexg00401.ttf",
			bolditalics:"ipaexg00401.ttf",
		},
	}
	var pdfDataUri;
	var doc=pdfMake.createPdf(docDefinition,null,fonts);
	pdfDataUri=await(
		new Promise(function(resolve,reject){
			doc.getDataUrl(function(data){
				resolve(data);
			});
		})
	);
	return new Result().eval("$('#pdf')[0].src='" +pdfDataUri +"'");
}
