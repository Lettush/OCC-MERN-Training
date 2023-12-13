const mongoose = require("mongoose");

const book_Schema = new mongoose.Schema(
    {
        title: {type: String, required:true, unique:true},
        author: {type: String, required:true},
        pages: {type: Number},
        price: {type: Number, required: true}
    },{timestamps: true});

module.exports = mongoose.model("Book",book_Schema);