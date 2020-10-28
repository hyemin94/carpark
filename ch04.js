var http = require('http');
// 웹 서버 객체 생성
var server = http.createServer();

var port = 3300;
server.listen(port, function(){
    console.log('웹서버가 시작: %d', port);
});

// 클라이언트 연결 이벤트 처리
server.on('connection', function(socket){
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다. : %s, %d', addr.address, addr.port);
});

server.on('request', function(req, res){
    console.log('클라이언트 요청이 들어왔습니다.');

    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write(" <head>");
    res.write("     <title>주차장 정보 안내 시스템</title>");
    res.write(" </head>");
    res.write(" <body>");
    res.write("     <h1>주차장 정보 안내 시스템</h1>");
    res.write(" </body>");
    res.write("</html>");
    res.end();
});

server.on('close', function(){
    console.log('서버가 종료됩니다.');
});
