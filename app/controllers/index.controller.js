
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

