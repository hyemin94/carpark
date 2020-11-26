// 데이터베이스 커넥트 부분
// config 변수=> local 프로퍼티를 이용하여 db_info.js local 객체 config 변수 바인딩
// init 메서드 : 바인딩시킨 config값 기반 mysql connection 생성
// 2020.11.18

var mysql = require('mysql');
var config = require('../db/db_info').local;

module.exports = function(){
    return{
        init : function(){
            return mysql.createConnection({
                host : config.host,
                port : config.port,
                user : config.user,
                password : config.password,
                database : config.database
            })
        },

        test_open: function(con){
            con.connect(function(err){
                if(err){
                    console.log('mysql connection error : '+err);
                } else{
                    console.log('mysql is connected successfully.');
                }
            })
        }
    }
};
