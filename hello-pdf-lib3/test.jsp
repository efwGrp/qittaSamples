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
	function testNashorn(){
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
		Efw('testNashorn',{pdf:'#pdf0'});
		Efw('testNashorn',{pdf:'#pdf1'});
		Efw('testNashorn',{pdf:'#pdf2'});
		Efw('testNashorn',{pdf:'#pdf3'});
		Efw('testNashorn',{pdf:'#pdf4'});
		Efw('testNashorn',{pdf:'#pdf5'});
		Efw('testNashorn',{pdf:'#pdf6'});
		Efw('testNashorn',{pdf:'#pdf7'});
		Efw('testNashorn',{pdf:'#pdf8'});
		Efw('testNashorn',{pdf:'#pdf9'});
	}
	function testJavet(){
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
		Efw('testJavet',{pdf:'#pdf0'});
		Efw('testJavet',{pdf:'#pdf1'});
		Efw('testJavet',{pdf:'#pdf2'});
		Efw('testJavet',{pdf:'#pdf3'});
		Efw('testJavet',{pdf:'#pdf4'});
		Efw('testJavet',{pdf:'#pdf5'});
		Efw('testJavet',{pdf:'#pdf6'});
		Efw('testJavet',{pdf:'#pdf7'});
		Efw('testJavet',{pdf:'#pdf8'});
		Efw('testJavet',{pdf:'#pdf9'});
	}
	</script>
</HEAD>
<BODY>
<button onclick="testNashorn();">テストNashorn</button>
<button onclick="testJavet();">テストJavet</button>
<br>
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