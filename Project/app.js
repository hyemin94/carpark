const http = require('http');
const express = require('express');
const ejs = require('ejs');
//var r_home = require('./home');

const mysql      = require('mysql');
const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

const app = express();
const server = http.createServer(app);

const hostname = '127.0.0.1';
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

//app.use('/home', r_home);

app.get('/', (req, res) => {
  res.render('index');
})

var country = require.param.country;
var city = require.param.city;
var sql = "select * from parking where LOCATION_ADDRESS like '%?%' and LOCATION_ADDRESS like '%?%'";

app.post('/views/success', (req, res) => {
    connection.query(sql,[country, city],function(Error, rows){
        if(Error) throw Error;
        console.log('Use info is : ', rows);
        res.json(rows);
    });
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
