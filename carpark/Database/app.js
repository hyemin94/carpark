// Express 기본 모듈 불러오기
var express = require('express')
    , http = require('http')
    , path = require('path');

// Express 미들웨어 불러오기
var bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , static = require('serve-static')
    , errorHandler = require('errorhandler');

//오류 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

// Session 미들웨어 불러오기
var expressSession = require('express-session');

// MySQL 데이터베이스 사용 모듈 불러오기
var mysql = require('mysql');

// MySQL 데이터베이스 연결 설정
var pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : 'gpals22**',
    database : carpark,
    debug : false
});

// 익스프레스 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT||3000);

// body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParrser.urlencoded({ exteded: false}));

// body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());

//public 폴더를 static으로 오픈
app.use('/public', static(path.join(__diirname, 'public')));

// cookie-parser 설정
app.use(cookiParser());

// 세션 설정
app.use(expressSession({
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));


//===라우팅 함수 등록 ===//

// 라우터 객체 참조
var router = express.Router();


// 라우터 객체 등록
app.use('/',router);

// 주소 인증 함수
var authUser = function(id, collback){
    console.log('주소인증:'id);
};

    // 커넥션 풀에서 연결 객체를 가져옴
    pool.getConnection(function(err, conn){
        if (err){
            if (conn){
                conn.release();
            }
            callback(err,null);
            return;
        }
        console.log('database스레드 아이디 : '+ conn.threadId);

        var colums =

    })

/*
// 주소 처리 함수 - 데이터베이스 정보 비교
router.route('/process/carpark').post(function(req, res){
    console.log('/process/carpark 호출됨');

    // 요청 파라미터 확인
    var paramId = req.body.id||req.query.id;
    var paramcounty = req.body.county||req.query.county;

    console.log('요청 파라미터 : '+paramId+','+paramcounty);

    if
    // pool 객체 초기화
    console.log('')
});
*/
// 404 오류 페이지
var errorHandler = expressErrorHandler({
    static: {
        '404':'/public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

// 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('서버 시작 port : '+ app.get('port'));
});

