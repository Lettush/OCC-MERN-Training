const Workout = require("../models/schema");
const mongoose = require('mongoose');

//get all workout document
const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1});
    res.status(200).json(workouts);
}


//get a single workout document
const getWorkout = async (req,res) => {
    const {id} = req.params; //this is done as this function affects one document via id. it is also stated in workouts.js ('/:id', (req,res))
    
    //this code validates the object id used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'});
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: "No such workout"});
    }

    res.status(200).json(workout)
}


//create new workout document
const createWorkout = async (req,res) => {
    const {title,load,reps} = req.body;

    //adds document to a collection
    try {
        const workout = await Workout.create({title,load,reps});
        res.status(200).json(workout)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a workout document
const deleteWorkout = async (req,res) => {

    const {id} = req.params; //this is done as this function affects one document via id. it is also stated in workouts.js ('/:id', (req,res))

    //this code validates the object id used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'});
    }

    const workout = await Workout.findOneAndDelete({_id: id});

    if (!workout) {
        return res.status(404).json({error: "No such workout"});
    }

    res.status(200).json(workout)


}

//update a workout document

const updateWorkout = async (req,res) => {

    const {id} = req.params; //this is done as this function affects one document via id. it is also stated in workouts.js ('/:id', (req,res))

    //this code validates the object id used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'});
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({error: "No such workout"});
    }

    res.status(200).json(workout)
} 

//This is done for other files to use createWorkout module
module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}