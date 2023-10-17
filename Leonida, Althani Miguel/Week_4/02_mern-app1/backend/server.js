require('dotenv').config()

const express = require("express");
const workoutRoutes = require('./routes/workouts');
const mongoose = require("mongoose");

//express app
const app = express(); 

//middleware
app.use(express.json());
app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
});


//route handler
app.use('/api/workouts', workoutRoutes) //workout routes is is from workouts.js

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


