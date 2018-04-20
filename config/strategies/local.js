var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('mongoose').model('User');

module.exports = function(){
	passport.use(new LocalStrategy(function(username,password,done){//ตั้งไว้ ให้ passport ใช้ LocalStrategy หากมีใครเรียกใช้ passport แบบ local จะเข้ามาทำ
		User.findOne({username:username}, function(err,user){
			if(err){ console.log('in this'); return done(err);}
			if(!user || !user.authenticate(password)){//มี user หรือป่าว
				return done(null,false,{
					message: 'Invalid username or password'
				});
			}
			return done(null,user);
		});
		
	}));
}