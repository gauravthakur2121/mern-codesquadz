'Access-Control-Allow-Origin'
const express = require("express")
const app = express();
require("dotenv").config();
const myRoute = require('./Routes/myRoutes')
const userRoute = require('./Routes/userRoutes')
const cors  = require('cors')
require('./Database/mydatabaseconnection')



app.use(express.json())
app.use(cors())

app.get('/' , (req , res)=>{
    res.send("welcome to expree js")
})

app.use('/api',myRoute)
app.use('/api/users',userRoute)

const myport = process.env.PORT || 8000
app.listen(myport , ()=>{
    console.log(`server is running http://localhost:${myport}`)
})
