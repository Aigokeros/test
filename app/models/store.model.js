var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;


var Item = new Schema({
	name : String,
	grade:String,
	address:{street:String,
			 building:String},
	cuisine:String,
	url: String,
	date : String
	
});


	mongoose.model('Item',Item);