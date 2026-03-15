require('dotenv').config();
const app =require('./src/app');
const ConnectToDb = require('./src/Config/database');
const invoke = require('./src/services/ai_service.js')

ConnectToDb();

invoke();

app.listen(3000 , ()=>{
    console.log("server is running on port 3000")
})