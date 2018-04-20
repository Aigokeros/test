var config = require('./config');
var mongoose = require('mongoose');	

module.exports = function(){
	mongoose.set('debug', config.debug);
	
	var db = mongoose.connect(process.env.MONGOLAB_URI || config.mongoUri);
	
	mongoose.connection.on('connected', function() {
    	console.log('Mongoose connected to ' + config.mongoUri);
	});
	mongoose.connection.on('error', function(err) {
    	console.log('Mongoose connection error: ' + err);
	});
	mongoose.connection.on('disconnected', function() {
    	console.log('Mongoose disconnected');
	});

	require('../app/models/store.model'); 
	require('../app/models/user.model'); //ประกาศให้รู้จัก model user ยกทั้งโค๊ดมาเลย เช่น var UserModel = new Schema
	return db;
}