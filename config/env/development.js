module.exports = {
	debug: true,
	mongoUri : 'mongodb://flok:1593572468za@localhost:27017/nfShop',
	sessionSecret: 'dev_secret_key',
	facebook: {
		clientID: '277560409449230',
		clientSecret: '682df626d836799dee1a751b922fccba',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	}
};