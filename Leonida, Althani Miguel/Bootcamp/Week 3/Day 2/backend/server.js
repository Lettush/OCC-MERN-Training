const express = require("express");
const app = express();

const mongoose = require("mongoose");

//import the routes
const book_router = require("./routes/book_route");
const user_router = require("./routes/user_route");

const cors = require("cors");

//start server
app.listen(3000, () => console.log("Ready to listen in PORT 3000"));

//connection to mongoDB
mongoose.connect("mongodb+srv://test_user:pass@cluster0.snvqjh4.mongodb.net/bookstore?retryWrites=true&w=majority")
.then(() => console.log("Database Connection successful"))
.catch((error) => console.log(error));


//middleware: converts JSON to JS Object
app.use(express.json());

// const corsOptions = {
//     origin: 'http://localhost:3001',
// };

// app.use(cors(corsOptions));

//middleware: define root path
app.use('/api/books', cors(), book_router);

//middleware: define root path
app.use('/api/users', user_router);