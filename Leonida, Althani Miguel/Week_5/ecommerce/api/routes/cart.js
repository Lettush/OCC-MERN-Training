
//Refer to User Mongoose Model as we are modifying the data model
const Cart = require("../models/Cart");

//access router functionalities
const router = require("express").Router();

//access the verifyToken
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")



//CREATE A PRODUCT
router.post("/", verifyToken, async (req,res) => {
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);

    }
    catch(err) {
        res.status(500).json(err)

    }
})



//UPDATE A CART
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {


    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedCart);

    } catch (err) {
        res.status(500).json(err);
    }

})



//DELETE A CART
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted")
    }
    catch (err) {
        res.status(500).json(err)
    }

})



//GET A USER CART
router.get("/:userId", verifyTokenAndAuthorization, async (req, res) => {

    try {

        //extracts user data object through the id
        const cart = await Cart.find({userID: req.params.userId});

        //sends the user data object to the client without the password information
        res.status(200).json(cart)

    }
    catch (err) {
        res.status(500).json(err)
    }

})



//GET ALL 
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {

        //extracts user data object through the id
        const carts = await Cart.find();
        res.status(200).json(carts)

    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router