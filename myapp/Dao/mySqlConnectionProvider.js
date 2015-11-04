var mysql = require('mysql');
var mySqlConnectionString = require('./mySqlConnectionString.js');

module.exports = {

	getSqlConnection : function () {
		var connection = mysql.createConnection( mySqlConnectionString.development );
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

};