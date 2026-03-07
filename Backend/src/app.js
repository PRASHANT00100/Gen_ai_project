const express = require('express');
const app =express();

app.use(express.json());


const cookieParser = require('cookie-parser');
app.use(cookieParser());    

// require all the routes here
const AuthRouter = require('./routes/Auth_routes');

// using all the routes here
app.use('/api/auth', AuthRouter);

module.exports = app ;