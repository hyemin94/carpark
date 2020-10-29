var express = require('express')
    , http = require('http');

//express 객체 생성
var app = express();

// app 기본 포트를 app객체에 속성으로 설정
app.set('port', process.env.PORT||3000);

//express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작했습니다 : '+app.get('port'));
});
