
var mySqlConnectionProvider = require('./mySqlConnectionProvider.js');


module.exports = {

	getAllCustomers : function( callback ){
		var connection = mySqlConnectionProvider.getSqlConnection();

		var customers = [];
		var sqlStatement = "SELECT * FROM Customer";
		if(connection){
			connection.query (sqlStatement , function(err, rows, fields){
				if (err) throw err;
				rows.forEach(function(row){
					customers.push(row)
				});
				callback(customers);
			});
		}
		mySqlConnectionProvider.closeSqlConnection(connection) ;
	},


	createCustomer : function( customerdata ){
		var connection = mySqlConnectionProvider.getSqlConnection();

		var customers = [];
		var sqlStatement = "INSERT INTO Customer (Name , Place) VALUES('"+customerdata.nama+"','"+customerdata.place+"')";
		if(connection){
			connection.query (sqlStatement , function(err, rows, fields){
				if (err) throw err;
			});
		}
		mySqlConnectionProvider.closeSqlConnection(connection) ;
	},

	deleteCustomer : function( customer_id ){
		var connection = mySqlConnectionProvider.getSqlConnection();

		var customers = [];
		var sqlStatement = "DELETE FROM Customer WHERE Id = '"+customer_id+"'";
		if(connection){
			connection.query (sqlStatement , function(err, rows, fields){
				if (err) throw err;
			});
		}
		mySqlConnectionProvider.closeSqlConnection(connection) ;
	},

	updateCustomer : function( customerdata ){
		var connection = mySqlConnectionProvider.getSqlConnection();

		var customers = [];
		var sqlStatement = "UPDATE Customer SET Name = '"+customerdata.nama+"', Place = '"+customerdata.place+"' WHERE Id = '"+customerdata.id+"'";
		if(connection){
			connection.query (sqlStatement , function(err, rows, fields){
				if (err) throw err;
			});
		}
		mySqlConnectionProvider.closeSqlConnection(connection) ;
	}

};