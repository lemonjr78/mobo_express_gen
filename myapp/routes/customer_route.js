var express = require('express');
var router = express.Router();

/*hjs*/
/*
router.get('/list', function(req,res){
	var customerDao = require ('../Dao/customerDao.js');
	customerDao.getAllCustomers(function (data){
		console.log(data);
		res.render('customer/list' , {
			customer : data
		});
	});
	
});


router.post('/create', function(req,res){
	var customerDao = require ('../Dao/customerDao.js');
	customerDao.createCustomer(req.body);
	res.redirect( './list' );
});
*/

/*use ng-here*/
router.get('/', function(req,res){
	res.render('customer/index' , req.params);
});

router.get('/list', function(req,res){
	res.render('customer/list' , req.params);
});

router.get('/add', function(req,res){
	res.render('customer/add' , req.params);
});

/*try mongodb*/


router.get('/listmdb', function(req,res){
	var ItemTemplate =  require('../app/models/temTemplate');
	ItemTemplate.find({} , function(err,records){
		if(err) return res.status(422).send('Problem loadiing records', err.message);
		res.send(records);
	})
	//res.render('customer/add' , req.params);
});


module.exports = router;
