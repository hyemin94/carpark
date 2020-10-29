var http = require('http');
var fs = require('fs');

// 웹 서버 객체 생성
var server = http.createServer();

// 웹 서버를 시작하여 3300번 포트에서 대기하도록 설정
var port = 9000;
server.listen(port, function(){
    console.log('웹서버 시작 : %d', port);
});

// 클라이언트 연결 이벤트 처리
server.on('connection', function(socket){
    var addr = socket.address();
    console.log('클라이언트 접속했습니다.');
});

// 클라이언트 요청 이벤트 처리 ***
server.on('request', function(req, res){
    console.log('클라이언트 요청이 들어왔습니다.');

    var filename = 'node.html';
    var infile = fs.createReadStream(filename, {flags:'r'});
    var filelength = 0;
    var curlength = 0;

    fs.stat(filename, function(err,stats){
        filelength = stats.size;
    });

    // 헤더 쓰기
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

    // 파일 내용 스트림해서 읽어 본문 쓰기
    infile.on('readable', function(){
        var chunk;
        while(null != (chunk = infile.read())){
            console.log('읽어드린 데이터 크기 : %d 바이트', chunk.length);
            curlength += chunk.length;
            res.write(chunk, 'utf-8', function(err){
                console.log('파일 부분 쓰기 완료 : %d, 파일 크기 : %d', curlength, filelength);
                if(curlength >= filelength){
                    res.end();
                }
            });
        }
    });
});

//서버 종료 이벤트 처리
server.on('close', function(){
    console.log('서버가 종료됩니다.');
});
