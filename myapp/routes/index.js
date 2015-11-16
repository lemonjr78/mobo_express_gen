var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');





mongoose.connect('mongodb://localhost/data2');

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
/*router.get('/:title/:name', function(req,res){
	res.render('index' , req.params);
});
*/

var movieSchema = new mongoose.Schema({
  title: { type: String }
, rating: String
, releaseYear: Number
, hasCreditCookie: Boolean
});
var Movie = mongoose.model('Movie', movieSchema);

router.get('/h' , function(req,res){
  // mongoose.model('users').find(function(err , users){
  // 	res.send(users);
  // });



	// var thor = new Movie({
	//   title: 'Thor3'
	// , rating: 'PG-13'
	// , releaseYear: '2011'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
	// , hasCreditCookie: true
	// });

	// thor.save(function(err, thor) {
	//   if (err) return console.error(err);
	//   //console.dir(thor);
	// });

	Movie.find(function(err, movies) {
	  if (err) return console.error(err);
	  res.send(movies);
	  //console.log('movies');
	  //res.send('movies');
	});

	// var db = mongoose.connection;
	// db.on('error', console.error);
	// db.once('open', function() {
	//   // Create your schemas and models here.



	// });

  	
})

module.exports = router;
