module.exports = function(app){
	
	var index = require('../controllers/index.controller');	
	
	app.get('/', index.render);
	app.get('/product', index.product);
	app.get('/main',index.renderHome);
	app.get('/test',index.test);
	
}

//มาพาร์ทไหน , ทำอะไร