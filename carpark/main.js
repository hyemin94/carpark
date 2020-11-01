var express = require('express')
    , http = require('http')
    , path = require('path');

var bodyParser = require('body-parser')
    , static = require('serve-static');

var app = express();

app.set('port', process.env.PORT||3000);

app.use(bodyParser.urlencoded({extend: false}));

app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));

app.use(function(req, res, next){
    console.log('첫 번째 미들웨어 요청을 처리함.');
    console.log(req);

    var paramCity = req.body.id||req.query.id;
    var paramcounty = req.body.county||req.query.county;

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>입력한 정보 입니다.</h1>');
    res.write('<div><p>paramCity : '+paramCity+'</p></div>');
    res.write('<div><p>paramcounty : '+paramcounty+'</p></div>');
    res.end();
});

http.createServer(app).listen(3000, function(){
    console.log('Express server start');
});
