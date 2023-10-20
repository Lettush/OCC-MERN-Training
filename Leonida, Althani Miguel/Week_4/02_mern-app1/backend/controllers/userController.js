
//to reference the user records
//To load a data model or schema used to reference for the CRUD functions
const User = require('../models/userModel');


//access json webtoken functionalities
const jwt = require('jsonwebtoken');


//generates the json webtoken
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}


// login a user
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// signup a user
const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await User.signup(email, password); //.signup : function from userModel.j module


        // create a token
        const token = createToken(user._id)

        res.status(200).json({ email, token });

    } catch (error) {

        res.status(400).json({ error: error.message });

    }
}

module.exports = { signupUser, loginUser };