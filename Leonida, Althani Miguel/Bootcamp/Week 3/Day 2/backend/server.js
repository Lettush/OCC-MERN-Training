const express = require("express");
const app = express();

const mongoose = require("mongoose");

//import the routes
const book_router = require("./routes/book_route");
const user_router = require("./routes/user_route");

//import CORS for frontend to backend connection
const cors = require("cors");


//start server
app.listen(3000, () => console.log("Ready to listen in PORT 3000"));

//connection to mongoDB
mongoose.connect("mongodb+srv://test_user:pass@cluster0.snvqjh4.mongodb.net/bookstore?retryWrites=true&w=majority")
.then(() => console.log("Database Connection successful"))
.catch((error) => console.log(error));

app.use(cors({origin: '*',}));

//middleware: converts JSON to JS Object
app.use(express.json());

//middleware: define root path
app.use('/api/books', book_router);

//middleware: define root path
app.use('/api/users', user_router);