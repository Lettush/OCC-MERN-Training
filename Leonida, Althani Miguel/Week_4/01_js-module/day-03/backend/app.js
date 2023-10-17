const express = require('express');

//create express application
const app = express();

//Route Handler
//once get method is used, request and response objects are automatically created and shoudl be used
app.get('/', (req, res) => {
    res.json({message: "Hello, API!"}); //Displayed in website
    console.log(req);
});


app.get('/users', (req,res) => {
    res.send("You are in the users section").status(200); //Displayed in website
    console.log(res);
})


//Listen for incoming requests
app.listen(3000, () => {
    console.log("Listening to port 3000");
});
