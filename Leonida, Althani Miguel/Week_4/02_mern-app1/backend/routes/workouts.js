//This file is for routes. This serve as a manager that redirects http request to their designated route handles. 


//To use express related-functionality.
const express = require("express");


//Imported functions from controller.js module.
const {

    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout

} = require('../controllers/controller');


//require auth for all workout routes
const requireAuth = require('../middleware/requireAuth')


//An express-related functionality that allows us to use Express Router objects (.get, .delete, .post, .patch)
const router = express.Router()

router.use(requireAuth)

//GET all workouts
router.get('/', getWorkouts);

//GET a single workout
router.get('/:id', getWorkout);

//POST a new workout
router.post('/', createWorkout);

//DELETE a new workout
router.delete('/:id', deleteWorkout);

//UPDATE a new workout
router.patch('/:id', updateWorkout);

module.exports = router;