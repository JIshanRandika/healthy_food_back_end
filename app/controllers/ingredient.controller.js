
const Ingredient = require('../models/ingredient.model');
const {use} = require("express/lib/router");
const constants = require("constants");


// FETCH all Ingredients
exports.ingredients = (req, res) => {
    Ingredient.find().select('-__v').then(ingredientInfos => {
        res.status(200).json(ingredientInfos);
    }).catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
};


exports.get = (req, res) => {
    const query = { status: "Healthy" };
    const options = {projection: {ingredientName: 1, status: 1, description: 0, alternate: 0, image: 0 }}

    var stream = Ingredient.find({$where: function() { return false; }}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
    });
};


// get a Ingredient
exports.getHealthyIngredient = (req, res) => {
    Ingredient.find({ status: { $in: [ "Healthy" ] } }).select('-__v')
        .then(ingredient => {
            res.status(200).json(ingredient);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Ingredient not found with id " ,
                error: err
            });
        }
        return res.status(500).send({
            message: "Error retrieving Ingredient with id " ,
            error: err
        });
    });
};

exports.ingredintget = async(req, res) => {
    // Ingredient.find().select('-__v')
    let ingredients=req.body.ingredients;
    let trueIngredients=[];
    for (let i = 0; i < ingredients.length; i++) {

        let ers=await Ingredient.find({ingredientName:ingredients[i]}).select(['ingredientName', 'status']);
        if(ers.length!=0){
            trueIngredients.push(ers[0]);
        }
    }
    return res.status(200).send(trueIngredients);
};



exports.ckeckIngredient = async(req, res) => {
    // Ingredient.find().select('-__v')
    // console.log(req);
    let ingredients=req.body.ingredientArray;
    console.log(ingredients);
    let trueIngredients=[];
    for (let i = 0; i < ingredients.length; i++) {

        let ers=await Ingredient.find({ingredientName:ingredients[i]}).select(['ingredientName', 'status']);
        if(ers.length!=0){
            trueIngredients.push(ers[0]);
        }
    }
    console.log(trueIngredients);
    return res.status(200).send(trueIngredients);
};




