//This file defines the structure (schema) of the document.


const mongoose = require("mongoose"); //To use mongoose functionalities
const Schema = mongoose.Schema; //A mongoose functionality that allows manual setting of document structure (schema)


//required: "true" forces users to input data for a certain field. If not, error occurs.
//title, reps, load: field names
const workoutSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        reps: {
            type: Number,
            required: true
        },
        load: {
            type: Number,
            requried: true
        }
    }, { timestamps: true }) //timestamps would generate the time when the document was created


//Used by controller.js module
module.exports = mongoose.model('Workout', workoutSchema);