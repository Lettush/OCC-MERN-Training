
//to access express functionalities
const express = require('express')


// controller functions from userController.js module
const { loginUser, signupUser } = require('../controllers/userController')


//express functionality that allows us to use .post objects
const router = express.Router()


// login route
router.post('/login', loginUser)


// signup route
router.post('/signup', signupUser)

module.exports = router