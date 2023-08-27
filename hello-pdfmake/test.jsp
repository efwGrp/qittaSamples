<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="efw" uri="efw" %> 
<!DOCTYPE HTML>
<HTML>
<HEAD>
	<META HTTP-EQUIV="CONTENT-TYPE"CONTENT="TEXT/HTML;CHARSET=UTF-8">       
	<TITLE>efw Output Test</TITLE>
	<!-- Efwクライアントの取り込み-->
	<efw:Client lang="jp"/>
</HEAD>
<BODY>
<button onclick="Efw('test');">テスト</button><br>
<iframe id="pdf" src="" style="width:1200px;height:500px"></iframe>
</BODY>
</HTML>