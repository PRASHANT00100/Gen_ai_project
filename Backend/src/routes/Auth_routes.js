const {Router} = require('express');
const Authcontroller = require('../controllers/Auth_controller');
const AuthRouter = Router();
const AuthMiddleware = require('../middlewares/auth_middleware');

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */

 AuthRouter.post('/register' , Authcontroller.registerUserController );

 /**
  * @route POST /api/auth/login
  * @description login user with email and password
  * @access Public
  */
 
 AuthRouter.post('/login',Authcontroller.loginUserController);

 /**
  * @route  GET /api/auth/logout
  * @description clear token from user cookies and add the token in blacklist
  * @access  public 
  */

 AuthRouter.get('/logout',Authcontroller.logoutUserController);
 
 /**
  * @route GET /api/auth/get-me
  * @description get the current logged in user details
  * @access private
  */

 AuthRouter.get('/get-me', AuthMiddleware.AuthUser , Authcontroller.getmeController);

module.exports = AuthRouter ;