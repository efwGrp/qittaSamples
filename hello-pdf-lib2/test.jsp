<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="efw" uri="efw" %> 
<!DOCTYPE HTML>
<HTML>
<HEAD>
	<META HTTP-EQUIV="CONTENT-TYPE"CONTENT="TEXT/HTML;CHARSET=UTF-8">       
	<TITLE>efw Output Test</TITLE>
	<!-- Efwクライアントの取り込み-->
	<efw:Client lang="jp"/>
	<script>
	function test1(){
		$("#pdf0")[0].src="";
		$("#pdf1")[0].src="";
		$("#pdf2")[0].src="";
		$("#pdf3")[0].src="";
		$("#pdf4")[0].src="";
		$("#pdf5")[0].src="";
		$("#pdf6")[0].src="";
		$("#pdf7")[0].src="";
		$("#pdf8")[0].src="";
		$("#pdf9")[0].src="";
		Efw('test1',{pdf:'#pdf0'});
		Efw('test1',{pdf:'#pdf1'});
		Efw('test1',{pdf:'#pdf2'});
		Efw('test1',{pdf:'#pdf3'});
		Efw('test1',{pdf:'#pdf4'});
		Efw('test1',{pdf:'#pdf5'});
		Efw('test1',{pdf:'#pdf6'});
		Efw('test1',{pdf:'#pdf7'});
		Efw('test1',{pdf:'#pdf8'});
		Efw('test1',{pdf:'#pdf9'});
	}
	function test2(){
		$("#pdf0")[0].src="";
		$("#pdf1")[0].src="";
		$("#pdf2")[0].src="";
		$("#pdf3")[0].src="";
		$("#pdf4")[0].src="";
		$("#pdf5")[0].src="";
		$("#pdf6")[0].src="";
		$("#pdf7")[0].src="";
		$("#pdf8")[0].src="";
		$("#pdf9")[0].src="";
		Efw('test2',{pdf:'#pdf0'});
		Efw('test2',{pdf:'#pdf1'});
		Efw('test2',{pdf:'#pdf2'});
		Efw('test2',{pdf:'#pdf3'});
		Efw('test2',{pdf:'#pdf4'});
		Efw('test2',{pdf:'#pdf5'});
		Efw('test2',{pdf:'#pdf6'});
		Efw('test2',{pdf:'#pdf7'});
		Efw('test2',{pdf:'#pdf8'});
		Efw('test2',{pdf:'#pdf9'});
	}
	</script>
</HEAD>
<BODY>
<button onclick="test1();">テスト1</button>
<button onclick="test2();">テスト2</button><br>
<iframe id="pdf0" src="" style="width:400px;height:300px"></iframe>
<iframe id="pdf1" src="" style="width:400px;height:300px"></iframe>
<iframe id="pdf2" src="" style="width:400px;height:300px"></iframe>
<iframe id="pdf3" src="" style="width:400px;height:300px"></iframe>
<iframe id="pdf4" src="" style="width:400px;height:300px"></iframe>
<iframe id="pdf5" src="" style="width:400px;height:300px"></iframe>
<iframe id="pdf6" src="" style="width:400px;height:300px"></iframe>
<iframe id="pdf7" src="" style="width:400px;height:300px"></iframe>
<iframe id="pdf8" src="" style="width:400px;height:300px"></iframe>
<iframe id="pdf9" src="" style="width:400px;height:300px"></iframe>
</BODY>
</HTML>