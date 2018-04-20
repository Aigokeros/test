User = require('mongoose').model('User');

exports.saveOAuthUserProfile = function(req, profile, done){
    User.findOne({
        provider: profile.provider,
        providerId: profile.providerId
    }, function(err, user){
        if(err) return done(err);
        else{
            if(!user){
                var possibleUsername = profile.username
                    || (profile.email ? profile.email.split('@')[0] : '');
                User.findUniqueUsername(possibleUsername, null, function(avalibleUsername){
                    profile.username = avalibleUsername;
                    user = new User(profile);
                    user.save(function(err){
                        if(err){
                            var message = getErrorMessage(err);
                            req.flash('error', message);
                            return req.redirect('/',{login_message: 'login fail'});
                        }
                        return done(err,user);
                    })
                })

            }else{
                return done(err, user);
            }
        }
    });

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