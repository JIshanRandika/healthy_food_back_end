

const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    includedIngredients: String

});

module.exports = mongoose.model('Product', ProductSchema);
