const express    = require('express');
const mysql      = require('mysql');
const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

const app = express();

// configuration
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('Root');
});

app.get('/users', (req, res) => {
  connection.query('select * from parking', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.json(rows);
  });
});

//app.post('/views/success', (req, res) => {
//    console.log(req.body);
//});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});
