var index = require('../controllers/index.controller');

module.exports = function(app){
	app.get('/', index.render);
	app.get('/product', index.product);
	app.route('/chatbot')
	.get(index.chatbot)
	.post(index.chatbotRes);
}

//มาพาร์ทไหน , ทำอะไร