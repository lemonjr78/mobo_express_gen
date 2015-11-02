
var connectionProvider = require('./mySqlConnectionProvider.js');
var customerDao = {

	getAllCustomers : function( callback ){
		var connection = connectionProvider.mysqlConnectionProvider.getSqlConnection();

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
		connectionProvider.mysqlConnectionProvider.closeSqlConnection(connection) ;
	}
};

module.exports.customerDao = customerDao;