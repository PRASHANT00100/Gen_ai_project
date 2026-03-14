const express = require('express');
const app =express();
const cors = require('cors');

app.use(express.json());

app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}));


const cookieParser = require('cookie-parser');
app.use(cookieParser());    

// require all the routes here
const AuthRouter = require('./routes/Auth_routes');

// using all the routes here
app.use('/api/auth', AuthRouter);

module.exports = app ;