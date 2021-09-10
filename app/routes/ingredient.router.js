const ingredients = require("../controllers/ingredient.controller");


module.exports = function(app) {

    var ingredients = require('../controllers/ingredient.controller');

    app.get('/api/ingredient/healthy', ingredients.getHealthyIngredient);
    app.get('/api/ingredients', ingredients.ingredients);
    app.get('/api/get', ingredients.get);
    app.post('/api/getsome', ingredients.ingredintget);

    app.post('/api/check', ingredients.ckeckIngredient);

}
