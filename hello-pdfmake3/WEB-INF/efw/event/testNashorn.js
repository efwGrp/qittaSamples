var testNashorn={};
testNashorn.paramsFormat={
	"pdf":null
};
testNashorn.fire=function(params){
	var initscript=`
		load(_eventfolder+"/pdfmake.min.js");
		//load(_eventfolder+"/vfs_fonts.min.js");
		pdfMake.vfs={};
		pdfMake.vfs["ipaexg00401.ttf"]=ipaexg00401_ttf;
		var fonts={
			"IPAexゴシック":{
				normal:"ipaexg00401.ttf",
				bold:"ipaexg00401.ttf",
				italics:"ipaexg00401.ttf",
				bolditalics:"ipaexg00401.ttf",
			},
		}
	`;
	var runscript=`
		var docDefinition = {
			content: [
				{ text:"hello world!こんにちは東京", fontSize: 20 },
			],
			defaultStyle: {
				font:"IPAexゴシック"
			}
		};
		var doc=pdfMake.createPdf(docDefinition,null,fonts);
		var pdfDataUri=await(
			new Promise(function(resolve,reject){
				doc.getDataUrl(function(data){
					resolve(data);
				});
			})
		);
		pdfDataUri;
	`;
	var pdfDataUri=loadWithGlobalPool({
		name:"pdfMake-nashorn",
		max:2,
		initializer:initscript,
		script:runscript,
		context:{ipaexg00401_ttf:ipaexg00401_ttf},
		engine:"nashorn",
		returnVar:"pdfDataUri",
	});
	return new Result().eval("$('"+params.pdf+"')[0].src='" +pdfDataUri +"'");
}
