var oracledb = require('\sqldeveloper\jdbc\lib\ojdbc8.jar');
var dbConfig = require('U')

module.exports = {
     user : process.env.NODE_ORECLEDB_USER || "hr",
    password : process.env.NODE_ORECLEDB_PASSWORD || "hr",
    connectString : process.env.NODE_ORECLEDB_CONNECTSTRING || "localhost/xe",
};

oracledb.autoCommit = true;

//select
router.post('/dbtestselect', function(request, response){
    oracledb.getConnection({
        user : dbConfig.user,
        password : dbConfig.password,
        connectString : dbConfig.connectString
    },
    function(err, connection){
        if(err){
            console.error(err.message);
            return;
        }
        console.log('=>userlist search query');

        var query =
            'select * from address';

        // sql문 실행
        connection.execute(query, function(err, result))
        if(err){
            console.error(err.message);

            doRelease(connection);
            return;
        }

        console.log(result.rows);

        doRelease(connection, result.rows);
    });
});
function doRelease(connection, userlist){
    connection, close(function(err){
        if(err){
            console.error(err.message);
        }

        //db종료 완료 시 최종 응답
        console.log('list size'+userlist.lengh);
        for(var i=0; i<userlist.lengh; i++){
            console.log('name : '+userlist[i][1]);
        }
        response.send(userlist);
    });
};
