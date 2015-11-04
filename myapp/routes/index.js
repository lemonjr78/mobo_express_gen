var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// router.get('/', function(req,res){
// 	// res.render('index' , {

// 	// 	title : 'C++',
// 	// 	name : 'ali'
// 	// });
// 	res.render('index' , req.query);
// });
router.get('/:title/:name', function(req,res){
	res.render('index' , req.params);
});

router.get('/customerList', function(req,res){
	var customerDao = require ('../Dao/customerDao.js');
	customerDao.getAllCustomers(function (data){
		console.log(data);
		res.render('customer' , {
			customer : data
		});
	});
	
});

module.exports = router;
