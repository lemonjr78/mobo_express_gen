var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mobo_mobile'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


 module.exports = {
  connect: function() {
     //connection.connect();
    // console.log('connecting');
  },
       
  viewdata: function( callback ) {
    var data = [];
    connection.query('SELECT * FROM Customer', function(err, rows, fields) {
	  if (err) throw err;
	  //console.log('The solution is: ', rows);
	  rows.forEach(function(row){
	  		data.push(row);
	  } );
	  //console.log(rows)
	  callback(rows);
	  //return rows;
	 
	});
	//console.log(data);
	//return data;
  },

  conclose: function(){
  	connection.end();
  }
};