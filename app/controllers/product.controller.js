const Product = require('../models/product.model');
const {use} = require("express/lib/router");
const constants = require("constants");

// FETCH all Products
exports.products = (req, res) => {
    Product.find().select('-__v').then(productInfos => {
        res.status(200).json(productInfos);
    }).catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
};

//search
exports.searchProduct = async(req, res) => {
    // Ingredient.find().select('-__v')
    // console.log(req);
    let searchProductName=req.body.searchProductName;
    console.log('back')
    console.log(searchProductName);
    // let trueIngredients=[];

    let ingredientList=await Product.find({name:searchProductName}).select('includedIngredients');

    // for (let i = 0; i < ingredients.length; i++) {
    //
    //     let ers=await Ingredient.find({ingredientName:ingredients[i]}).select(['includedIngredients']);
    //     if(ers.length!=0){
    //         trueIngredients.push(ers[0]);
    //     }
    // }
    // console.log(trueIngredients);
    return res.status(200).send(ingredientList);
};
