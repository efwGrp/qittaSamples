var codeflower_create={};
codeflower_create.paramsFormat={};
codeflower_create.fire=function(params){
	//再帰的にuploadファイルの中身を分析してJSONを作成する。
	function getChildrenFromFolder(folder){
		var lst=absfile.list(folder,true);
		var ret=[];
		for(var i=0;i<lst.length;i++){
			var item=lst[i];
			if(item.mineType=="directory"){
				if (!item.isHidden)//非表示フォルダを対象しない
				ret.push({"name":item.name,"children":getChildrenFromFolder(item.absolutePath)});
			}else{
				var size=Math.sqrt(item.length);//ファイルサイズの平方根の数字で画面の円の大きさを決める
				var showSize=(item.length/1000).format("#,##0.0")+" kb";
				ret.push({"name":item.name,"size":size,"showSize":showSize});
			}
		}
		return ret;
	}
	//テンプレートを読む
	var html=file.readAllLines("template/template.html","UTF-8");
	//uploadフォルダの内容でJSONを作成
	var json={"name":"root","children":getChildrenFromFolder(file.getStorageFolder()+"/upload")};
	//テンプレート内容にJSONを代入する。
	html=html.replace("{@@@@}",JSON.stringify(json));
	//htmlファイルを作成する
	file.writeAllLines("myflower.html",html,"UTF-8");
	return (new Result())
	.runat("body")
	.attach("myflower.html")//ダウンロード
	.deleteAfterDownload();//サーバファイルを削除
}

