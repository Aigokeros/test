var index = require('../controllers/index.controller');

module.exports = function(app){
	app.get('/', index.render);
	app.get('/product', index.product);
	app.get('/main',index.renderHome);
}

//มาพาร์ทไหน , ทำอะไร