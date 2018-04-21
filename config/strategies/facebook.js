var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('../config.js');
var user = require('../../app/controllers/user.controller.js');

module.exports = function(){
    passport.use(new FacebookStrategy({
        clientID: '277560409455530',
        clientSecret: '682df626d855599dee1a751b922fccb5' , // form a
        callbackURL : 'https://mysterious-plains-29409.herokuapp.com/oauth/facebook/callback',
        profileFields: ['id', 'email', 'name'],
        passReqToCallback: true
    }, function(req, accessToken, refreshToken, profile, done){
        var providerData = profile._json;
        providerData.accessToken = accessToken;
        providerData.refreshToken = refreshToken;

        var providerUserProfile = {
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value, //or email
            username: profile.username,
            provider: 'facebook',
            providerId: profile.id,
            providerData: providerData
        }
        user.saveOAuthUserProfile(req,providerUserProfile, done);
    }));
}