var testJavet={};
testJavet.paramsFormat={
	pdf:null
};
testJavet.fire=function(params){
	var initscript=`
		const pdfMake = require(_eventfolder+"/pdfmake.min.js");
		//require(_eventfolder+"/vfs_fonts.min.js");
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
		var pdfDataUri;
		(async function(){
			pdfDataUri=await new Promise(function(resolve,reject){
					doc.getDataUrl(function(data){
						resolve(data);
					});
				});
		})();
		
		pdfDataUri="aaaa";
	`;
	var pdfDataUri=loadWithGlobalPool({
		name:"pdfMake-javet",
		max:10,
		initializer:initscript,
		script:runscript,
		context:{ipaexg00401_ttf:ipaexg00401_ttf},
		engine:"javet",
		returnVar:"pdfDataUri",
	});
	return new Result().eval("$('"+params.pdf+"')[0].src='" +pdfDataUri +"'");
	
}