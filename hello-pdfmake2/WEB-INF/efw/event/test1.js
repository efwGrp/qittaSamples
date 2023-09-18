var test1={};
test1.paramsFormat={
	"pdf":null
};
test1.fire=Java.synchronized(function(params){
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
	return new Result().eval("$('"+params.pdf+"')[0].src='" +pdfDataUri +"'");
},test1);
