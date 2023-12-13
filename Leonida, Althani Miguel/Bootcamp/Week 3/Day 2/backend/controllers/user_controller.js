//import mongoose
const mongoose = require("mongoose");

//import bcrypt
const bcrypt = require("bcrypt");

//import jsonwebtoken
const jwt = require("jsonwebtoken");

//import the user data model
const user = require("../models/user_model")



let addUser = async (req, res) => {

    //grabbing the email and password value from the user input
    const { email, password } = req.body;

    try {

        const existing_user = await user.findOne({ email: email });
        if (existing_user) {
            return res.status(400).json({ error: "Username already taken", email: existing_user });
        }

        const hashed_password = await bcrypt.hash(password, 10);
        await user.create({ email, password: hashed_password });

        res.status(200).json("Account successfully added!");
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const userLogin = async (req, res) => {

    const { email, password } = req.body;

    try {

        const existing_user = await user.findOne({ email: email });
        if (!existing_user) {
           return res.status(400).json({ error: "User does not exists" });
        }

        //password validation
        const does_password_match = await bcrypt.compare(password, existing_user.password);
        if(!does_password_match){
            return res.status(400).json({error: "Incorrect password"});
        }

        //generating json web token
        const token = jwt.sign({userId: existing_user._id},"SECRET", {expiresIn: '1h'});

        res.status(200).json({message:"Logged in successfully",token})
    }
    catch(error) {
        res.status(400).json({error: error.message});

    }

}


module.exports = { addUser, userLogin};
