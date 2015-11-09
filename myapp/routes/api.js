var express = require('express');
var router = express.Router();

/*customer api*/

router.route('/customer')

	.post(function(req,res){
		var customerDao = require ('../Dao/customerDao.js');
		console.log('stut:' + req.body.place);
		customerDao.createCustomer(req.body);
		res.send( { message : 'success' });

	})

	.get(function(req,res){
		var customerDao = require ('../Dao/customerDao.js');
		customerDao.getAllCustomers(function (data){
			res.send(data);
		});		
	})


;


router.route('/customer/:customer_id')

	
	.delete(function(req,res){
		var customerDao = require ('../Dao/customerDao.js');
		
		customerDao.deleteCustomer(req.params.customer_id);
		res.send( { message : 'success delete' });
	})
	.put(function(req,res){
		var customerDao = require ('../Dao/customerDao.js');
		
		customerDao.updateCustomer(req.body);
		res.send( { message : 'success update' });
	})

;


module.exports = router;