var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;


var UserModel = new Schema({
	firstName : String,
	lastName:String,
	username :{
		type: String, 
		unique: true, 
		trim :true,
		required:'Username is required'
		},
	email:{type: String, 
		   index: true,
		   unique: true,
		   required: 'Email is required'
		   },
	password:{
		type: String,
		validate:[ 
					function(password){

					  return password && password.length >= 6; //password = เช็คว่าว่างป่าว และเป็นของ body ที่ส่งเข้้ามา
					  					}
					,'password must be at least 6 characters'
		         ],
		required:'Password is required'
		},
	phone: String,
    salt:{ //ช่วยป้องกัน rainblow attk
		type: String
		},
	provider:{ //บอกว่าใช้ provider ตัวไหนเช่น facebook/twiter/google
		type: String,
		required: 'Provider is required'
		},
	providerId: String, //userID ที่ได้จาก provider
	providerData:{}, //ไว้เก็บข้อมูลจาก provider แต่ละที่ให้ไม่เหมือนกัน
	create:{type:Date, default: Date.now}
});

	UserModel.pre('save', function(next){ //ก่อน save ทำการเปลี่ยน password ให้เป็นรูปแบบ hash 
					if(this.password){
						this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');//generate ค่า salt
						this.password = this.hashPassword(this.password); //password ผ่านการ hash
					}
					next();
	});
		
	UserModel.methods.hashPassword = function(password){
		return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');	
	}
	
	UserModel.methods.authenticate = function(password){
		console.log("authen----");
		return this.password === this.hashPassword(password);
	}
	
	UserModel.statics.findUniqueUsername = function(username, suffix, callback){
		var _this = this;
		var posibleUsername = username + (suffix || '');
		_this.findOne({
		
		}, function(err,user){
			if(!err){
					if(!user) callback(possibleUsername);
					else return _this.findUniqueUsername(username, (suffix || 0)+1, callback);
					
			}else{
				callback(null);
			}
		});
	}

	mongoose.model('User',UserModel);