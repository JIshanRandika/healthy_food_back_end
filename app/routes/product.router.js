const products = require("../controllers/product.controller");


module.exports = function(app) {

    var products = require('../controllers/product.controller');

    app.get('/api/products', products.products);

    app.post('/api/product/ingredient', products.searchProduct);

}
