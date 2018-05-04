var product  = require("../controllers/product.controller");

module.exports = function(app){
    app.get('/cart', product.showCart);
}