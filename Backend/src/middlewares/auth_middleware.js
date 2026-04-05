const jwt = require("jsonwebtoken");
const tokenBlackListModel = require('../models/blacklist_model');

/****
 * @name authMiddleware
 * @description middleware to protect routes that require authentication , it checks for the token in the request cookies and verifies it , if the token is valid it adds the user details to the request object and calls the next middleware , if the token is invalid it returns an error response
 * @access private
 */

 async function AuthUser(req, res, next) {

  const token = await req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized , please login to access this resource",
    });
  }

  const userblacklist = await tokenBlackListModel.findOne({token});

  if(userblacklist){
    res.status(201).json(
     {
      message:'Token is invalid'
     }
    )
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { AuthUser };
