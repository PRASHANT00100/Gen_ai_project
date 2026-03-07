const userModel = require("../models/user_model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const tokenBlackListModel = require('../models/blacklist_model');
/**
 * @name  registerUserController
 * @description register a new user , expect username , email and password in the request body
 * @access Public
 */

async function registerUserController(req, res) {
  try {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      return res.status(400).json({
        message: "Please provide username, email and Password ",
      });
    }

    const isUserAlreadyExist = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isUserAlreadyExist) {
      return res.status(400).json({
        message: "Account already exists with this email or username",
      });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      username,
      email,
      password: hash,
    });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.cookie("token", token);

    res.status(201).json({
      message: "User register successfuly !",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * @name loginUserController
 * @description login a user , expects email and password in the request body
 * @access public
 */

async function loginUserController(req, res) {
  try {
    const {email, password} = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "Invalid eamil or password ",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(404).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.cookie("token", token);

    res.status(200).json({
        message : "User loggedIn successfully !" ,
        user : {
            id : user._id ,
            username : user.username,
            email : user.email
        }
    })

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * @name logoutUserController
 * @description logout a user , clear the token from user cookies and add the token in blacklist
 * @access public 
 */ 

async function logoutUserController (req , res ) {
  const token = req.cookies.token;
  if(token){
   await tokenBlackListModel.create({token});
  }
  res.clearCookie("token");

  res.status(200).json({
    message : "User logout successfully !"
  })
}

 /**
  * @name get-me
  * @description get the current logged in user details 
  * @access private
  */

 async function getmeController(req ,res) {
  const user = await userModel.findById(req.user.id);
  res.status(200).json({
    message :"User deatils featch successfully !",
   user : {
      id : user._id,
      username: user.username,
      email : user.email
    }
  })
 }

  
module.exports = {
  registerUserController,
  loginUserController,
  logoutUserController ,
  getmeController ,
};
