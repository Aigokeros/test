var user = require('../controllers/user.controller');
var passport = require('passport');

module.exports = function(app){
    
    
           
    app.get('/oauth/facebook', passport.authenticate('facebook', {
         failureRedirect: '/',
         scope: 'email'    // หรือ ['email', 'user_about_me']
    }));

    app.get('/oauth/facebook/callback',  passport.authenticate('facebook', {
        failureRedirect: '/',
        successRedirect: '/product'
    }));

    app.route('/login')
        .get(user.Renderlogin)
        .post(user.login);

}