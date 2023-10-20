
//to access variables from .env
require('dotenv').config()


//to access express functionalities
const express = require("express");


//to access mongoose functionalities
const mongoose = require("mongoose");


//to access the routes
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');


//express app
const app = express(); 


//middleware
app.use(express.json());
app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
});


//route handler
//workoutRoutes is imported from workouts.js
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI) //connect mongodb atlas database
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
        console.log("Listening on port 4000!");
});

    })
    .catch((error) => {
        console.log(error)
    })


