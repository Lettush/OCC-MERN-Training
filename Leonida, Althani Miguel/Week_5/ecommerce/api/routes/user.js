
//Refer to User Mongoose Model as we are modifying the data model
const User = require("../models/User");

//access router functionalities
const router = require("express").Router();

//access crypto-js functionalities
const CryptoJS = require("crypto-js");

//access the verifyToken
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")



//UPDATING USER DATA
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    //update password
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SEC).toString()
        //encrypts the password using a Secret Key. password becomes a hash
        //.toString() : for the password to be saved to the database 
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedUser);

    } catch (err) {
        res.status(500).json(err);
    }
})



//DELETE USER
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    }
    catch (err) {
        res.status(500).json(err)
    }

})



//GET A USER
//Only admins can use this request
router.get("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {

        //extracts user data object through the id
        const user = await User.findById(req.params.id);

        //extract the password field and its data
        //._doc ensures that the data sent are the necessary user data only
        const { password, ...others } = user._doc;

        //sends the user data object to the client without the password information
        res.status(200).json(others)

    }
    catch (err) {
        res.status(500).json(err)
    }

})



//GET ALL USERS
//Only admins can use this request
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    const query = req.query.new

    try {

        //extracts user data object through the id
        const users = query ? await User.find().sort({ _id: -1 }).limit(1) : await User.find();

        //sends the user data object to the client without the password information
        res.status(200).json(users)

    }
    catch (err) {
        res.status(500).json(err)
    }

})



// //GET USER STATS
// //Only admins can use this request
// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
//     const date = new Date();
//     const lastYear = new Date(date);
//     lastYear.setFullYear(date.getFullYear() - 1);

//     try {
//         const data = await User.aggregate([
//             { $match: { createdAt: { $gte: lastYear } } },
//             { $project: { month: { $month: "$createdAt" }, }, },
//             { $group: { _id: "$month" }, total: { $sum: 1 } }
//         ])

//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })



//exporting this module or file
//used by server.js
module.exports = router