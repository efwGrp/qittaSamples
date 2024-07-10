<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="efw" uri="efw" %>
<!DOCTYPE HTML>
<HTML>
<HEAD>
	<title>test Text CSV & Multithread</title>
	<efw:Client lang="jp"/>
</HEAD>
<BODY>
※Run1はBinaryReaderの例です。<br>
Run2はTextReaderの例です。<br>
Run3はCSVReaderの例です。<br>
TextReaderは文字コードを全体に設定する弱点があります。IBMホストサーバの場合利用しづらいです。<br>まだ正規表現で分割する場合バイト数を数えないです。<br>
<br>
例１、各種制限を考慮せず無邪気な例 <button onclick="Efw('helloTextCSVThread_submit',{mode:'1'})">Run1</button> <button onclick="Efw('helloTextCSVThread_submit2',{mode:'1'})">Run2</button> <button onclick="Efw('helloTextCSVThread_submit3',{mode:'1'})">Run3</button><br>
例２、１件ずつ処理の慎重派の例 <button onclick="Efw('helloTextCSVThread_submit',{mode:'2'})">Run1</button> <button onclick="Efw('helloTextCSVThread_submit2',{mode:'2'})">Run2</button> <button onclick="Efw('helloTextCSVThread_submit3',{mode:'2'})">Run3</button><br>
例３、ロット別でIOを分ける例 <button onclick="Efw('helloTextCSVThread_submit',{mode:'3'})">Run1</button> <button onclick="Efw('helloTextCSVThread_submit2',{mode:'3'})">Run2</button> <button onclick="Efw('helloTextCSVThread_submit3',{mode:'3'})">Run3</button><br>
例４、ライターの使いまわし例 <button onclick="Efw('helloTextCSVThread_submit',{mode:'4'})">Run1</button> <button onclick="Efw('helloTextCSVThread_submit2',{mode:'4'})">Run2</button> <button onclick="Efw('helloTextCSVThread_submit3',{mode:'4'})">Run3</button><br>
例５、バッファーの配列をID別に分ける例 <button onclick="Efw('helloTextCSVThread_submit',{mode:'5'})">Run1</button> <button onclick="Efw('helloTextCSVThread_submit2',{mode:'5'})">Run2</button> <button onclick="Efw('helloTextCSVThread_submit3',{mode:'5'})">Run3</button><br>
例６、読み込みマルチスレッドの例 <button onclick="Efw('helloTextCSVThread_submit',{mode:'6'})">Run1</button> <button onclick="Efw('helloTextCSVThread_submit2',{mode:'6'})">Run2</button> <button onclick="Efw('helloTextCSVThread_submit3',{mode:'6'})">Run3</button><br>
<br>
<efw:elfinder id="elfinder1" home="text&csv"/>
</BODY>
</HTML>
