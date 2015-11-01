var express = require('express');
var router = express.Router();

var db_mysql = require('./../my_module/connect_mysql.js');

function test(callback)
{
		var a = 5;
		callback (a);
}

var c;
test(function (b){
		
		c =  b;
	}
)

console.log('tuta' + c);
var datas;
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send(db_mysql.viewdata());
  //
  
  db_mysql.viewdata( function (getting){
  		console.log(getting);
  		datas = getting;
  } )
  
  res.render('about' , {customer : datas});
});

module.exports = router;
