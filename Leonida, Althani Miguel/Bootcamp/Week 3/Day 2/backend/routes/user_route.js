//import router from the express framework
const router = require('express').Router();

//import CRUD function
const {addUser, userLogin} = require("../controllers/user_controller");


//define the route when user signs up
router.post('/signup', addUser);

//define the route where user logs in
router.post('/login', userLogin);




module.exports = router;