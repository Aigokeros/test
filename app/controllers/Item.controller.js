var Item = require('mongoose').model('Item');
var sendCheck = false;
var sendPost = false;




exports.renderSearch = function(req, res){
	res.render('search', {title:'SEARCH', description:'THIS IS SEARCH PAGE'});
}


exports.findItem = function(req, res){
		Item.find({name: new RegExp(req.body.name, 'i')},function(err,data){
			if(err){
					
			}else{
				res.json(data);
			}
		}).sort({"date":-1})
}

exports.findItemByName = function(req, res){
		Item.find({name: new RegExp(req.body.name, 'i')},function(err,data){
			if(err){
					
			}else{
				res.json(data);
			}
		}).sort({name:req.body.order})
}

exports.filter = function(req, res){
		Item.find({},function(err,data){
			if(err){
					
			}else{
			
				res.render('filter', {title:'SEARCH', description:'THIS IS FILTER PAGE',test:data});
			}
	});
}


exports.DetailList = function(req, res){
	
	Item.findOne({name:req.body.name}, function(err , data){
		if(err){
			
		}else{
			res.json(data);
		}
	});
	
}



































/*
exports.sendEmail = function(req,res){
	console.log('in this');
	

exports.renderForget = function(req,res){
				res.render('retryPassword',{
				title:'retry Password',
				message: req.flash('error') || req.flash('info'),
				sendCheck:sendCheck
			
	});
}

exports.renderFail = function(req,res){
	res.render('fail',{title:'login',
					   message: req.flash('error')|| req.flash('info')
	});
}

exports.logout = function(req,res){
	req.logout(); //passport แปะ ฟังก์ชัน log out ไว้ให้
	res.redirect('/');
}

exports.renderLogin = function(req,res){
	sendCheck=false;
	if(!req.user){
		res.render('login',{
					title:'login',
					message: req.flash('error') || req.flash('info')
				 });
	}else{
		return res.redirect('/main');
	}
}

exports.renderSignup = function(req,res){
	if(!req.user){
		res.render('createAccount',{
			title: 'Sign up',
			message: req.flash('error') || req.flash('info')
		})
	}else{
		return res.redirect('/main');
	}
	
};

exports.signup  = function(req,res,next){
		if(!req.user){
			var user = new User(req.body);// พอ new มันก็จะไป validate ว่า pass ครบไหม ไรงี้
			user.provider = 'local';
			user.save(function(err){
				if(err) {
					var message = getErrorMessage(err);
					req.flash('error',message);//หรือ บรรจุค่า error ให้กับ key error
					return res.redirect('/signup'); 
				}
				req.login(user, function(err){ //passport แปะ ฟังก์ชัน login/logout ไว้ให้
					if(err) return next(err);
					return res.redirect('/main');
				});
			});
			
		} else{
			return res.redirect('/main');
		}
}

var getErrorMessage = function(err){
	var message ='';
	
	if(err.code){
		switch(err.code){
			case 11000:
			case 11001:
				message = 'Username already exitsts';
				break;
			default:
				message = 'Something went wrong';
		}
	}else{
		for(var errName in err.errors){
			if(err.errors[errName].message){
			message = err.errors[errName].message;
			}
		}
	}
	return message;
}

exports.delete = function(req,res,next){
	req.user.remove(function(err){
		if(err){
			return next(err);
		}else{
			res.json(req.user);
		}
	});
}

exports.update = function(req,res,next){
	User.findOneAndUpdate({username:req.user.username},req.body,function(err,user){
	   if(err){
	       return next(err)
	   }else{
	   		res.json(user);
	   }
	});
}

exports.read = function(req,res){ // ไม่ต้อง qurey ข้อมูลเพราะ params userByusername จะไปทำมาก่อน
	res.json(req.user);
}

exports.userByUsername = function(req,res,next,username){
	User.findOne({username: username }, //ฝั่งซ้ายคือชื่อฟิล username ฝั่งขวาคือตัวแปรที่รับเข้ามาจากอากิวเม้น
	             function(err,user){
			if(err){
				return next(err);
			}else{
				req.user = user;
				next();
			}
	});
};

exports.list = function(req,res,next){
	User.find({}, function(err,data){
		if(err){
			return next(err);
		}else{
			res.json(data);
		}
	});
}

exports.create = function(req,res,next){
	var user = new User(req.body);
	user.save(function(err){
		if(err){
			return next(err);
		}else{
			res.json(user);
		}
	});
};


exports.renderContact = function(req,res){
		res.render("contact",{username:req.user.username,message:"",msg:sendPost});
		sendPost=false;
}

exports.contact = function(req, res){
var c = new cont(req.body);
c.author = req.user.name;
	c.save(function(err){
		if(err) {console.log(err);sendPost = false;}
		sendPost=true;
		console.log("save post success..");
		return res.redirect("/contact");
	})

}

*/

/*exports.login = function(req, res){
	req.checkBody('email', 'Invalid email').notEmpty.isEmail();
	req.sanitizeBody('email').nomalizeEmail();
	var errors = req.validationErrors();
	if(errors){
		res.render('index',{message:'There have been validate errors: ' + JSON.stringify(errors),
							isLoggedIn: true					
		});
	};
	
	if(req.body.remember === 'rmb'){
		req.session.remember = true;
		req.session.email = req.body.email;
		req.sessionOptions.maxAge = 300000;
		req.session.cookie.maxAge = 600000;
	}
	
	 console.log(req.body);
	 console.log(req.body.email)
	 console.log(req.body.password)
	 
	 res.render('index',{message:'Logged in is'+req.body.email,
	 					 isLoggedIn: true
	 });
};*/


/*exports.logout = function(req,res){
	res.render('index', {message:'See you again later',
						isLoggedIn:false
		});
		req.session = null;
	
	
};*/
