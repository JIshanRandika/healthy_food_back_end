

const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productName: String,
    includedIngredients: String

});

module.exports = mongoose.model('Product', ProductSchema);
