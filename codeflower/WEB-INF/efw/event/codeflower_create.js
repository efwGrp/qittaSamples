var codeflower_create={};
codeflower_create.paramsFormat={};
codeflower_create.fire=function(params){
	//�ċA�I��upload�t�@�C���̒��g�𕪐͂���JSON���쐬����B
	function getChildrenFromFolder(folder){
		var lst=absfile.list(folder,true);
		var ret=[];
		for(var i=0;i<lst.length;i++){
			var item=lst[i];
			if(item.mineType=="directory"){
				if (!item.isHidden)//��\���t�H���_��Ώۂ��Ȃ�
				ret.push({"name":item.name,"children":getChildrenFromFolder(item.absolutePath)});
			}else{
				var size=Math.sqrt(item.length);//�t�@�C���T�C�Y�̕������̐����ŉ�ʂ̉~�̑傫�������߂�
				var showSize=(item.length/1000).format("#,##0.0")+" kb";
				ret.push({"name":item.name,"size":size,"showSize":showSize});
			}
		}
		return ret;
	}
	//�e���v���[�g��ǂ�
	var html=file.readAllLines("template/template.html","UTF-8");
	//upload�t�H���_�̓��e��JSON���쐬
	var json={"name":"root","children":getChildrenFromFolder(file.getStorageFolder()+"/upload")};
	//�e���v���[�g���e��JSON��������B
	html=html.replace("{@@@@}",JSON.stringify(json));
	//html�t�@�C�����쐬����
	file.writeAllLines("myflower.html",html,"UTF-8");
	return (new Result())
	.runat("body")
	.attach("myflower.html")//�_�E�����[�h
	.deleteAfterDownload();//�T�[�o�t�@�C�����폜
}

