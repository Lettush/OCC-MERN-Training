//This file contains the functions for handling HTTP requests


//From schema.js module
//To load a data model or schema used to reference for the CRUD functions
const Workout = require("../models/schema"); 


//To use mongoose functionalities
const mongoose = require('mongoose');


//get all workout document
const getWorkouts = async (req,res) => {

    const user_id = req.user._id
    const workouts = await Workout.find({user_id}).sort({createdAt: -1});
    res.status(200).json(workouts);
    
}


//get a single workout document
const getWorkout = async (req,res) => {
    
    //this is done as this function affects one document via id. it is also stated in workouts.js ('/:id', (req,res))
    //extract the value of the id variable the req.params object and assign it in our id variable
    const {id} = req.params; 
    

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
    
   
    //extracts title, load, and reps values from req.body object and contain it in these variables
    const {title,load,reps} = req.body;
    

    //an array to store the field names that has  missing data
    let emptyFields = [];

    
    //checks whether the fields has missing data. if it has, the field name is inserted in the emptyFields array by adding their corresponding name in string type
    if(!title) {
        emptyFields.push('title');
    }
    if(!load) {
        emptyFields.push('load');
    }
    if(!reps) {
        emptyFields.push('reps');
    }


    //checks if there are any field names in the emptyFields array. if it has, an error message will be displayed
    if(emptyFields.length > 0) {
        return res.status(400).json({error: "Please fill in all the fields",emptyFields})
    }


    //adds document to a collection
    try {
        const user_id = req.user._id;
        const workout = await Workout.create({title,load,reps, user_id});
        res.status(200).json(workout)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}


//delete a workout document
const deleteWorkout = async (req,res) => {

    
    //this is done as this function affects one document via id. it is also stated in workouts.js ('/:id', (req,res))
    //extract the value of the id variable the req.params object and assign it in our id variable
    const {id} = req.params; 


    //this code validates the object id used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'});
    }

    //{_id:id} : specific way of locating a document
    const workout = await Workout.findOneAndDelete({_id: id});

    if (!workout) {
        return res.status(404).json({error: "No such workout"});
    }

    res.status(200).json(workout)


}


//update a workout document
const updateWorkout = async (req,res) => {

    
    //this is done as this function affects one document via id. it is also stated in workouts.js ('/:id', (req,res))
    //extract the value of the id variable the req.params object and assign it in our id variable
    const {id} = req.params; 

    
    //this code validates the object id used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'});
    }

    
    //{_id: id} : used to locate the document
    //{...req.body} : the data the contains the update
    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body})

  
    if (!workout) {
        return res.status(404).json({error: "No such workout"});
    }

    res.status(200).json(workout)
} 

//This is done for other files to use createWorkout module
//Used by workouts.js module
module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}