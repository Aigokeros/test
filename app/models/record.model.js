var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recordModel = new Schema({
	userUpload:{type:String,
			require: "User Uploader is required"
	},
	fileName:String,
	name:{type:String,
		unique:true,
		require:"file name is required"},
	group:{category:String, officail:String},
	
	create:{type:Date, default: Date.now}

})

/*recordModel.exports.test = function(){
}*/

mongoose.model('Record', recordModel);