//express 객체를 생성하고, express 객체의 메서드를 통해 환경설정을 함
// 정적 파일 호스팅
// express 앱 내 모듈 사용관련 설정(http 요청을 받기위한 모듈, POST 요청 데이터 접근을 위한 모듈 등)
//2020/11/18

var express = require('express')
var routes = require('./routes/index')
var app = express()

app.use('./',routes)
