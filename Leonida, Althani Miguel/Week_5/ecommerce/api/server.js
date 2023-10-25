
//access modules
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")



//access express functionalities
const express = require("express"); 
const app = express(); 

//access the env file
const env = require("dotenv");
env.config();

//access mongoose functionalities
const mongoose = require("mongoose");



//starts a server to start accepting html requests
app.listen(process.env.PORT || 5000, () => {
    console.log("Listening to port 5000")
})



//.connect : mongoose functionality to connect to mongodb database
mongoose.connect(process.env.DATABASE_URL)

.then(() => {
    console.log("DB Connection successful")}) //.then : execute a code if connected successfully

.catch((err) => {
    console.log(err) //.catch : prints the error if an error occurred
})


//allows handling of JSON
app.use(express.json());

//middleware : registering and logging in accounts
app.use("/api/auth", authRoute);

//middleware : functions that can access the request and response objects 
app.use("/api/users", userRoute);

//middleware : CRUD for products
app.use("/api/products", productRoute);

//middleware : CRUD for cart
app.use("/api/carts", cartRoute);

//middleware : CRUD for order
app.use("/api/orders", orderRoute);




