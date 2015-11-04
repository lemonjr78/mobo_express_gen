
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
	}
};