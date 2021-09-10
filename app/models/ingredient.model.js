

const mongoose = require('mongoose');

const IngredientSchema = mongoose.Schema({
    ingredientName: String,
    status: String,
    description: String,
    alternate: String,
    image: String

});

module.exports = mongoose.model('Ingredient', IngredientSchema);
