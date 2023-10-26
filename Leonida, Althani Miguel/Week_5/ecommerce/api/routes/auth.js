//access router functionalities
const router = require("express").Router();

//access crypto-js functionalities
const CryptoJS = require("crypto-js");

//access json webtoken functionalities
const jwt = require("jsonwebtoken");

//Refer to User Mongoose Model as we need the data model to be the basis of the user account creation and login
const User = require("../models/User");



//USER SIGN-UP
//await : wait before the data has been saved before executing the next code
router.post("/register", async (req, res) => {
    const newUser = new User({
        //based from the User Model
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SEC).toString()
        //encrypts the password using a Secret Key. password becomes a hash
        //.toString() : for the password to be saved to the database 
    });

    try {
        //saves the inputted data to the database
        const savedUser = await newUser.save();

        //sends(prints) a response to the client(browser) that a resource(data) has been successfully created
        res.status(201).json(savedUser);
    }
    catch (err) {
        //sends(prints) a response to the client(browser) that an error has occurred
        res.status(500).json(err);
    }

});



//USER LOG-IN
router.post("/login", async (req, res) => {
    
    try {

        //storing the object data of the searched user
        const user = await User.findOne({ username: req.body.username });

        //if no user has been found, it will send an error message to the client
        if (!user) {
            return res.status(401).json("Wrong username")

        }



        //decrypting the long string encrypted password from database using the secret key
        //stores the original password
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SEC);

        //Crypto.enc.Utf8 : ensures that the original password is UTF-8 encoded
        const origPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        //if the decrypted password from database is not equal to user input password, it sends an error
        if (origPassword !== req.body.password) {
            return res.status(401).json("Wrong password");
        }



        //create JWT if username and password is correct
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SEC, {expiresIn: "3d"})



        //returns all data inside _doc object except for password
        const { password, ...others } = user._doc;

        //if username and password is correct, sends to the client the object data of the searched user
        res.status(200).json({...others, accessToken});

    }
    catch (err) {
        res.status(500).json(err)
    }
});








//exporting this module or file
//used by server.js
module.exports = router