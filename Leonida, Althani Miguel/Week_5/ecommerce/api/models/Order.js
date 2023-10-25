
//access mongoose functionality
const mongoose = require("mongoose");

//create a new schema
const OrderSchema = new mongoose.Schema(
    {
        userID: { type: String, required: true },//who owns the order
        products: [                              //array because an order can contain multiple products
            {
                productID: { type: String },
                quantity: { type: Number, default: 0 }
            }
        ],
        amount: { type: Number, required: true },
        address: {type: Object, required:true},
        status: {type: String, default: "Pending"}
    }, { timestamps: true }
);


//"Order" : Mongoose Model called Order
//OrderSchema : basis of the model
module.exports = mongoose.model("Order", OrderSchema)