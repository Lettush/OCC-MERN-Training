
//access mongoose functionality
const mongoose = require("mongoose");

//create a new schema
const ProductSchema = new mongoose.Schema(
    {
        title: {type: String, required:true, unique:true},
        description: {type: String, required:true},
        img: {type: String, required:true},
        categories: {type: Array},
        size: {type: String},
        color: {type: String},
        price: {type: Number, required:true},
    }, {timestamps: true}
);


//"Product" : Mongoose Model called Product
//ProductSchema : basis of the model
module.exports = mongoose.model("Product", ProductSchema)