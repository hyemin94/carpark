// Express 기본 모듈 가져옴
var express = require('express')
    , http = require('http')
    , path = require('path');

// 미들웨어 가져옴
var bodyParser = require('body-parser')
    , static = require('serve-static');

// 오류 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

// 익스프레스 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT||3000);

//body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false}));

//body-parser를 사용해 application/json 파싱
app.use(bodyParser.json())

app.use('/views',static(path.join(__dirname, 'views')));

// 라우터 객체 참조
var router = express.Router();

// 미들웨어에서 파라미터 확인
//app.use(function(req, res, next){

// 라우팅 함수 등록
router.route('/views/carpark/:city').post(function(req, res){
    console.log('/views/carpark/:city 처리함 ' );

    var paramCity = req.params.city;

    var paramId = req.body.id||req.query.id;
    var paramcounty = req.body.county||req.query.county;

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>서버 응답</h1>');
    res.write('<div><p>paramCity : '+paramCity+'</p></div>');
    res.write('<div><p>paramid : '+paramId+'</p></div>');
    res.write('<div><p>paramcounty : '+paramcounty+'</p></div>');
    res.write("<br><br><a href='/views/carpark.html'>main 페이지로 돌아가기</a>");
    res.end();
});

//라우터 객체를 app 객체에 등록
app.use('/',router);

// 등록되지 않은 path 오류처리
app.all('*',function(req, res){
    res.status(404).send('<h1> 404 error 입니다.</h1>');
});

// 모든 router 처리 끝난 후 404 오류 페이지 처리
var errorHandler = expressErrorHandler({
    static: {
      '404': './views/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

// express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('server 3000port start!');
});
