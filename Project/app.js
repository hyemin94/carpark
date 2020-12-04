var http = require('http');
var express = require('express');
var ejs = require('ejs');
var router = express.Router();
var mysql      = require('mysql');
var dbconfig   = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);

const app = express();
const server = http.createServer(app);

//20201203
var bodyparser = require('body-parser')

const hostname = '127.0.0.1';
const port = 3000;

// 뷰 엔진 설정
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', (req, res) => {
  res.render('index');
});

var paramcountry = require.param.country;
var paramcity = require.param.city;

var sql = "CARPARK_NM, LOCATION_ADDRESS, CARPARK_OPDAYS from parking where LOCATION_ADDRESS like '%?%' and LOCATION_ADDRESS like '%?%'";

app.use('/users', (req, res) => {
  connection.query("select CARPARK_NM, LOCATION_ADDRESS, CARPARK_OPDAYS from parking where LOCATION_ADDRESS like '%서울특별시%' and LOCATION_ADDRESS like '%강남구%'", (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.json(rows);
  });
});


console.log('요청파라미터 : '+ paramcountry+'and'+paramcity);


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
