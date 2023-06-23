<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="efw" uri="efw" %> 
<!DOCTYPE HTML>
<HTML>
<HEAD>
	<META HTTP-EQUIV="CONTENT-TYPE"CONTENT="TEXT/HTML;CHARSET=UTF-8">       
	<TITLE>efw CodeFlower</TITLE>
	<!-- Efwクライアントの取り込み-->
	<efw:Client lang="jp"/>
</HEAD>
<BODY>
	<h1>世界に一つだけの花を作りましょう</h1>
	<efw:elFinder home="upload" />
	<br>
	<button onclick="Efw('codeflower_create')">作成 & ダウンロード</button><br>
</BODY>
</HTML>
