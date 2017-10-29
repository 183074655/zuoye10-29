var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'gqq123..',
  database : 'item'
});

/* GET home page. */
router.get('/list', function(req, res, next) {
  connection.query('SELECT id,name FROM baobao', function(err, rows, fields) {
  	res.header("Access-Control-Allow-Origin","*")
  res.send(rows)
});
});
router.post('/detail', function(req, res, next) {
	var n=req.body.id;
  connection.query("SELECT detail FROM baobao where id="+n, function(err, rows, fields) {
  	res.header("Access-Control-Allow-Origin","*");
        res.send(rows)
});
});
module.exports = router;
