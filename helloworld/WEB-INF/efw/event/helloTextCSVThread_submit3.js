var helloTextCSVThread_submit3={};
helloTextCSVThread_submit3.paramsFormat={
	mode:null,
};
helloTextCSVThread_submit3.mylocker = new java.util.concurrent.locks.ReentrantLock();//�}���`�X���b�h�o�b�t�@�[�𑀍삷�邽�߂̃��b�J�[
helloTextCSVThread_submit3.fire=function(params){
	file.remove("text&csv/seperated");
	file.makeDir("text&csv/seperated");
	var ret=new Result().eval("elfinder1.setHome('text&csv/seperated')");
	
	//��P�A�e�퐧�����l���������׋C�ȗ�
	if (params.mode=="1"){//////////////////////////////////////////////////////
		var ary=new CSVReader(
		    "text&csv/myText3.csv",//�ǂݎ��t�@�C��
		    ",", "\"",
		    "MS932"//���ڂ��Ƃ̕����R�[�h
		).readAllLines();//�S�����R�[�h���ꊇ�œǂݎ��
		for(var i=0;i<ary.length;i++){
		    //ID�ŕۑ������肷��B
		    var writer= new CSVWriter("text&csv/seperated/"+ary[i][0]+".csv", ",", "\"", "MS932");
		    writer.writeLine(ary[i]);//���R�[�h����������
		    writer.close();
		}
	//��Q�A�P���������̐T�d�h�̗�
	}else if (params.mode=="2"){////////////////////////////////////////////////
		new CSVReader(
		    "text&csv/myText3.csv",//�ǂݎ��t�@�C��
		    ",", "\"",
		    "MS932"//���ڂ��Ƃ̕����R�[�h
		).loopAllLines(function(fields,index){//�S�����R�[�h���P�����ǂݎ��
		    //ID�ŕۑ������肷��B
		    var writer= new CSVWriter("text&csv/seperated/"+fields[0]+".csv", ",", "\"", "MS932");
		    writer.writeLine(fields);//���R�[�h����������
		    writer.close();
		});
	//��R�A���b�g�ʂ�IO�𕪂����
	}else if (params.mode=="3"){////////////////////////////////////////////////
		var buffer=[];//���b�g�����̃o�b�t�@�[
		new CSVReader(
		    "text&csv/myText3.csv",//�ǂݎ��t�@�C��
		    ",", "\"",
		    "MS932"//���ڂ��Ƃ̕����R�[�h
		).loopAllLines(function(fields,index){//�S�����R�[�h���P�����ǂݎ��
		    buffer.push(fields);
		    if (index % 10 == 0){//���b�g���ɒB�����ǂ������f
		        saveBuffer();//���b�g��ۑ�����
		    }
		});
		saveBuffer();//���b�g�������̎c�f�[�^��ۑ�����
		//------�ȉ��̓o�b�t�@�[�ۑ��p�̓����֐�
		function saveBuffer(){
		    for (var i=0;i<buffer.length;i++){
		        //ID�ŕۑ������肷��B
		        var writer= new CSVWriter("text&csv/seperated/"+buffer[i][0]+".csv", ",", "\"", "MS932");
		        writer.writeLine(buffer[i]);//���R�[�h����������
		        writer.close();
		    }
		    buffer=[];//�o�b�t�@�[������������
		}
	//��S�A���C�^�[�̎g���܂킵��
	}else if (params.mode=="4"){////////////////////////////////////////////////
		var buffer=[];//���b�g�����̃o�b�t�@�[
		var writers={};//���C�^�[���i�[����}�b�v
		new CSVReader(
		    "text&csv/myText3.csv",//�ǂݎ��t�@�C��
		    ",", "\"",
		    "MS932"//���ڂ��Ƃ̕����R�[�h
		).loopAllLines(function(fields,index){//�S�����R�[�h���P�����ǂݎ��
		    buffer.push(fields);
		    if (index % 10 == 0){//���b�g���ɒB�����ǂ������f
		        saveBuffer();//���b�g��ۑ�����
		    }
		});
		saveBuffer();//���b�g�������̎c�f�[�^��ۑ�����
		saveWriters();//���C�^�[���ꊇ�ŕ���
		//------�ȉ��̓o�b�t�@�[�ۑ��p�̓����֐�
		function saveBuffer(){
		    for (var i=0;i<buffer.length;i++){
		        //ID�ŕۑ������肷��B
		        var writer=writers[buffer[i][0]];
		        if (writer==null){
		            writer=new CSVWriter("text&csv/seperated/"+buffer[i][0]+".csv", ",", "\"", "MS932");
		            writers[buffer[i][0]]=writer;
		        }
		        writer.writeLine(buffer[i]);//���R�[�h����������
		    }
		    buffer=[];//�o�b�t�@�[������������
		}
		//--------���C�^�[���ꊇ�ŕ���֐�
		function saveWriters(){
		    for(var key in writers){
		        if (key=="debug")continue;
		        writers[key].close();
		    }
		}
	//��T�A�o�b�t�@�[�̔z���ID�ʂɕ������
	}else if (params.mode=="5"){////////////////////////////////////////////////
		var buffer={};//���b�g�����̃o�b�t�@�[�}�b�v�AID�ʂ̔z����i�[����
		new CSVReader(
		    "text&csv/myText3.csv",//�ǂݎ��t�@�C��
		    ",", "\"",
		    "MS932"//���ڂ��Ƃ̕����R�[�h
		).loopAllLines(function(fields,index){//�S�����R�[�h���P�����ǂݎ��
		    //����ID�ʂ̔z�񂪂܂����݂��Ȃ��ꍇ�A���̔z�������������
		    if (buffer[fields[0]]==null)buffer[fields[0]]=[];
		    buffer[fields[0]].push(fields);
		    if (index % 10 == 0){//���b�g���ɒB�����ǂ������f
		        saveBuffer();//���b�g��ۑ�����
		    }
		});
		saveBuffer();//���b�g�������̎c�f�[�^��ۑ�����
		//------�ȉ��̓o�b�t�@�[�ۑ��p�̓����֐�
		function saveBuffer(){
		    for (var key in buffer){
		        if (key=="debug")continue;
		        var ary=buffer[key];
		        var writer=new CSVWriter("text&csv/seperated/"+key+".csv", ",", "\"", "MS932");
		        for(var i=0;i<ary.length;i++){
		             writer.writeLine(ary[i]);//���R�[�h����������
		        }
		        writer.close();
		    }
		    buffer={};//�o�b�t�@�[������������
		}
	
	//��U�A�}���`�X���b�h�̗�
	}else if (params.mode=="6"){////////////////////////////////////////////////
		var buffer={};//���b�g�����̃o�b�t�@�[�}�b�v�AID�ʂ̔z����i�[����
		var hasDataFlag=false;//�f�[�^�L���t���O
		var lot=0;
		var offsetBytes=0;
		var offsetRows=0;
		do{
			hasDataFlag=false;//�����lfalse
			var threads = new Threads(2);
			threads.add({from:0+lot*10 ,run:makeCsvBuffer,offsetBytes:offsetBytes,offsetRows:offsetRows,isMax:false});
			threads.add({from:5+lot*10 ,run:makeCsvBuffer,offsetBytes:offsetBytes,offsetRows:offsetRows,isMax:true});
			var obj=threads.run().seek("isMax","eq",true).getSingle();//�}���`�X���b�h�����s����
			offsetBytes=obj.offsetBytes;
			offsetRows=obj.offsetRows;
			saveBuffer();//�o�b�t�@�[��ۑ�����B�f�[�^����ꍇ�AhasDataFlag��true�ɂ���
			lot++;
		}while(hasDataFlag);
		//------�ȉ���CSV�o�b�t�@�[���쐬����֐�
		function makeCsvBuffer(){
			var csvreader=new CSVReader(
			    "text&csv/myText3.csv",//�ǂݎ��t�@�C��
			    ",", "\"",
			    "MS932",//���ڂ��Ƃ̕����R�[�h
				this.from,//�ǂݍ��݊J�n���R�[�h�ԍ�
				5//�ǂݍ��݌����A���b�g����/�X���b�h��
			).loopAllLines(function(fields,index){//�S�����R�[�h���P�����ǂݎ��
			    //����ID�ʂ̔z�񂪂܂����݂��Ȃ��ꍇ�A���̔z�������������
				helloTextCSVThread_submit3.mylocker.lock();//���b�N����
			    	if (buffer[fields[0]]==null)buffer[fields[0]]=[];
			    	buffer[fields[0]].push(fields);
				helloTextCSVThread_submit3.mylocker.unlock();//���b�N��������
			});
		}
		//------�ȉ��̓o�b�t�@�[�ۑ��p�̓����֐�
		function saveBuffer(){
		    for (var key in buffer){
		        if (key=="debug")continue;
		        var ary=buffer[key];
		        var writer=new CSVWriter("text&csv/seperated/"+key+".csv", ",", "\"", "MS932");
		        for(var i=0;i<ary.length;i++){
		             writer.writeLine(ary[i]);//���R�[�h����������
		        }
		        writer.close();
		    	hasDataFlag=true;
		    }
		    buffer={};//�o�b�t�@�[������������
		}
	}
	return ret.alert("The file has been seperated.");
	
}