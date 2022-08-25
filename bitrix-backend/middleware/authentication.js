const jwt = require("jsonwebtoken");
require('dotenv').config();

const authentication = (req, res, next)=>{
    const user_token = req.headers.authorization;

    jwt.verify(user_token, process.env.SECRET_KEY, (err, decoded)=>{
        if(err){
            return res.send("Please login Again")
        }
        req.body.email = decoded.email;
        next()
    })
}
module.exports = authentication