var mongoose = require('mongoose');

function connect(connectionString){
	mongoose.connect(connectionString)

	var db = mongoose.connection
	db.on('error', console.error.bind(console,'connection error'))
	db.once('open' , function callback(){
		console.log('Mongoose connected at : ' , connectionString)
		
	})
}

module.exports = connect

connect('mongodb://localhost/test');

/*

		var schema = mongoose.Schema({
			name: String,
			description: String
		})

		var Model = mongoose.model('ItemTemplate' , schema)
var itemTemplate = new Model({name: 'Oger knife', description: 'Awesome knife'})
		itemTemplate.save(function(err){
			if(err) return consol.log('error' , err.message)

			console.log('it saved' , itemTemplate.name)

			itemTemplate.name = 'Ogre knife'
			itemTemplate.save(function(err){
				if(err) return console.log('problem saveing:', err.messag)
				getKnife();	
			})

			
		})

		function getKnife(){
			Model.find({name: 'Oger knife'} , function(err,records){
				if(err) return console.log('Error retrieve knife', err.message)
				console.log('We got the', records[0].name . '!');

			})
		}*/