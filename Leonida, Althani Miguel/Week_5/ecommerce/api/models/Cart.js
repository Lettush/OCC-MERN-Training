
//access mongoose functionality
const mongoose = require("mongoose");

//create a new schema
const CartSchema = new mongoose.Schema(
    {
        userID: { type: String, required: true },//who owns the cart
        products: [                              //array because a cart can contain multiple products
            {
                productID: { type: String },
                quantity: {type: Number, default: 0}
            }
        ]
    }, { timestamps: true }
);


//"Cart" : Mongoose Model called Cart
//CartSchema : basis of the model
module.exports = mongoose.model("Cart", CartSchema)