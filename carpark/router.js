var mysql_dbc = require('../db/db_con')();
var connection = mysql_dbc.init();
mysql_dbc.text_open(connection);

router.get('/mysql/test', function(req, res){
    var stmt = 'select * from address';
    connection.query(stmt, function(err, result){

    })
});
