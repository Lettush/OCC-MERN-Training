const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//defines the structure of the document
//required: true forces users to input data for all fields. If not, error occurs
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
    }, {timestaps: true}) //timestaps would generate the time when he document was created

    module.exports = mongoose.model('Workout',workoutSchema);