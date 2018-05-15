var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Product = new Schema({
	id : {
		type:String,
		unique:true
	},
	brand:{
		type: String, 
		unique: true, 
		required:'product name is required'
		},
	name :{
		type: String, 
		unique: true, 
		required:'product name is required'
		},
	size:String,
	price:{
		type:Number,
		default: 0,
		min:0,
		max: 100000,
		required:'Price is required'
		},
	sale: {
		type:Number,
		default: 0,
		min:0,
		max: 100000
		},
    saveMoney:{
		type:String,
		default: "0%"
	},
	shortDetail:{ 
		type: String,
		required: 'Detail is required'
		},
	rating:{
		type: Number,
		default: 0,
		min: 0,
		max: 5
	},
	comment:[{author:String, text:String}]
}, {strict:false});

	Product.pre("save", function(next){
		this.rating = (this.mathRandom(6)+5)/2;
		next();
	});

	Product.methods.mathRandom = function(max){
		return Math.floor(Math.random() * Math.floor(max));
	}
	mongoose.model('Product',Product);