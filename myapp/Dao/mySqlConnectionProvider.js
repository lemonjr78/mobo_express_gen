var mysql = require('mysql');
var mysqlConnectionString = require('./mySqlConnectionString.js');

var mysqlConnectionProvider = {

	getSqlConnection : function () {
		var connection = mysql.createConnection( mysqlConnectionString.mySqlConnectionString.connectionString.development );
		connection.connect(function error(){
			//if(error)throw error;
			console.log('mysql connection success');
		});

		return connection;
	},

	closeSqlConnection : function (currentConnection){
		currentConnection.end(function (error){
			//if(error) throw error;
				console.log("close mysql connection success");
		});
	}

}

exports.mysqlConnectionProvider = mysqlConnectionProvider;