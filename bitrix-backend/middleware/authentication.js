const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send("Please login again");
  }

  const user_token = req.headers.authorization.split(" ")[1];

  jwt.verify(user_token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.send("Please login Again");
    }
    req.body.email = decoded.email;
    req.body.userID = decoded._id;
    // console.log(decoded);
    next();
  });
};
module.exports = authentication;
