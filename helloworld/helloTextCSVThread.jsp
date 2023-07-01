<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="efw" uri="efw" %>
<!DOCTYPE HTML>
<HTML>
<HEAD>
	<title>test Text CSV & Multithread</title>
	<efw:Client lang="jp"/>
</HEAD>
<BODY>
例１、各種制限を考慮せず無邪気な例 <button onclick="Efw('helloTextCSVThread_submit',{mode:'1'})">Run</button><br>
例２、１件ずつ処理の慎重派の例 <button onclick="Efw('helloTextCSVThread_submit',{mode:'2'})">Run</button><br>
例３、ロット別でIOを分ける例 <button onclick="Efw('helloTextCSVThread_submit',{mode:'3'})">Run</button><br>
例４、ライターの使いまわし例 <button onclick="Efw('helloTextCSVThread_submit',{mode:'4'})">Run</button><br>
例５、バッファーの配列をID別に分ける例 <button onclick="Efw('helloTextCSVThread_submit',{mode:'5'})">Run</button><br>
例６、マルチスレッドの例 <button onclick="Efw('helloTextCSVThread_submit',{mode:'6'})">Run</button><br>
<br>
<efw:elfinder id="elfinder1" home="text&csv"/>
</BODY>
</HTML>
