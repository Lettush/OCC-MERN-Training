
//access json webtoken functionalities
const jwt = require("jsonwebtoken");



//checks whether a user is authenticated to update its own data by extracting a token from the token header and unlocks 
const verifyToken = (req, res, next) => {
    
    //retrieve the JWT token from the token header of the incoming HTTP request
    const authHeader = req.headers.token

    //if token header is present in the http request
    if (authHeader) {

        //.split()[1] : separates the authhead with a space and extracts only the token without the Bearer
        const token = authHeader.split(" ")[1];
        
        //token, process.env.JWT_SEC : token header is being verified using the JWT Secret Key
        //err : if token is invalid because it is expired
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) {
                res.status(403).json("Token is not valid!");
            } else {
                req.user = user; //attaches the user object to the req object.
                next();
            }
        })
    } 
    
    //if token header is not present
    else {
        return res.status(401).json("You are not authenticated")
    }
};



const verifyTokenAndAuthorization = (req,res,next) => {
    verifyToken(req,res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else{
            res.status(403).json("You are not allowed")
        }
    })
}



//verify whether user is admin
const verifyTokenAndAdmin = (req,res,next) => {
    verifyToken(req,res, () => {
        if(req.user.isAdmin) {
            next();
        } else{
            res.status(403).json("You are not allowed")
        }
    })
}



//used by the auth.js, user.js router
module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };