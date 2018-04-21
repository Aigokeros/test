var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');

module.exports = function(){

		var app = express();

		app.use(cookieSession({
			name: 'session',
			keys: ['Firts1SecretSession','Second2SecretSession']
		}));

		app.use(session({
			secret: 'secret_key',
			resave: false,
			saveUninitialized:true
		}));


		if(process.env.NODE_ENV === 'development'){
				app.use(logger('dev'));
		}
		
	
		app.use(bodyParser.urlencoded({extended:true}));
		app.use(bodyParser.json());
		app.use(flash());
		app.use(passport.initialize());
		app.use(passport.session());

		app.set('views', './app/views');
		app.set('view engine', 'ejs');
		
		app.use(express.static('./public'));
		
		
		require('../app/routes/index.routes')(app);
		require('../app/routes/user.routes')(app);
		return app;
}

//จะไปเส้นทางไหน