const express = require("express");

//This is done so the module createWorkout can be used in this file
//arguents are modules/functions from controller.js.
const {createWorkout,getWorkouts, getWorkout, deleteWorkout, updateWorkout} = require('../controllers/controller');

const router = express.Router()

//GET all workouts
router.get('/', getWorkouts);

//GET a single workout
router.get('/:id', getWorkout);

//POST a new workout
router.post('/', createWorkout); //createWorkout is a function from controller.js

//DELETE a new workout
router.delete('/:id', deleteWorkout);

//UPDATE a new workout
router.patch('/:id', updateWorkout);

module.exports = router;