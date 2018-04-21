var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('../config.js');
var user = require('../../app/controllers/user.controller.js');

module.exports = function(){
    passport.use(new FacebookStrategy({
        clientID: '277560409449230',
        clientSecret: '682df626d836799dee1a751b922fccba' ,
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
            email: profile.email[0].value,
            username: profile.username,
            provider: 'facebook',
            providerId: profile.id,
            providerData: providerData
        }
        user.saveOAuthUserProfile(req,providerUserProfile, done);
    }));
}