const express = require("express")
const app = express();
const myroute = require('./Routes/myroutes')
require("dotenv").config();
const myport = process.env.PORT || 8000

app.use(myroute)
app.use(express.json())



app.listen(myport , ()=>{
    console.log(`server is running ${myport}`)
})
