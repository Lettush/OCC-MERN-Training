
//access mongoose functionality
const mongoose = require("mongoose");

//create a new schema
const UserSchema = new mongoose.Schema(
    {
        username: {type: String, required:true, unique:true},
        email: {type: String, required:true, unique:true},
        password: {type: String, required:true},
        isAdmin: {
            type: Boolean,
            default: false
        }, 
    }, {timestamps: true}
);


//"User" : Mongoose Model called User. The name of the collection for this data will be based from this parameter. mongoDB automatically creates a collection with a name using the plural form of the first parameter
//UserSchema : basis of the model
module.exports = mongoose.model("User", UserSchema)