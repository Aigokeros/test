var AIMLInterpreter = require('AIMLInterpreter');
var aiml = require('aiml');
exports.render = function(req, res){

		/*res.render('login',{title:'How about you',
							username:req.user ? req.user.username: '', //ถ้า login สำเร็จ ตัว pasport จะอา user มาแปะให้ที่ req //condition คือ ถ้า req.user มีค่าหรือเปล่า ถ้ามีก็เอาค่า req.user.username มาแปะ แต่ถ้าไม่มีให้แสดงสตริงว่างๆ
							message: req.flash('error')|| req.flash('info'),
							message2:'This work!'
							//'isLoggedIn':isLoggedIn
	    });*/
		res.render('chic_girl.ejs');
}
//ทำอะไร (ฟังก์ชัน)

exports.product = function(req, res){
	res.render('product.ejs');
}

exports.renderHome = function(req,res){
	res.render('test.ejs');
}

exports.chatbot = function(req, res){
	res.render('chatbot.ejs');
}

exports.chatbotRes = function(req,res){
	
	aiml.parseDir('./public/bot', function(err, topics){
		var engine = new aiml.AiEngine('Default', topics, {name: 'Jonny'});
		var responce = engine.reply({name: 'Billy'}, "HEY BRO", function(err, response){
			console.log(response);
		});
	  });
}

/*exports.chatbotRes = function(req,res){
	console.log(req.body.text);
	var aimlInterpreter = new AIMLInterpreter({name: 'alice', age:'42'});
	aimlInterpreter.loadAIMLFilesIntoArray(['./public/bot/test.aiml']);
	console.log("name : " +aimlInterpreter.name);
	console.log("new line : " + aimlInterpreter);
	var callback = function(answer, wildCardArray, input){
	console.log(answer + ' | ' + wildCardArray + ' | ' + input);
	};
	aimlInterpreter.findAnswerInLoadedAIMLFiles(req.body.text, callback);
}*/
