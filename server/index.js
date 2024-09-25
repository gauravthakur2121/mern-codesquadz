const express = require("express")
const app = express();
require("dotenv").config();
const myroute = require('./Routes/myroutes')
require('./Database/mydatabaseconnection')
const myport = process.env.PORT || 8000

app.use(myroute)
app.use(express.json())

app.listen(myport , ()=>{
    console.log(`server is running ${myport}`)
})
