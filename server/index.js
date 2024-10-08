'Access-Control-Allow-Origin'
const express = require("express")
const app = express();
require("dotenv").config();
const myRoute = require('./Routes/dataRoutes')
const userRoute = require('./Routes/userRoutes')
const loginRoute = require('./Routes/loginRoutes')
const cors  = require('cors')
require('./Database/mydatabaseconnection')



app.use(express.json())
const corsOptions = {
  origin: 'http://localhost:3000', // Frontend origin
  methods: ['GET', 'POST', 'DELETE', 'PUT'], // Allowed HTTP methods
  credentials: true, // If you need to send cookies or HTTP authentication
  optionsSuccessStatus: 200, // Some browsers (IE11, etc.) choke on 204
};

// Apply CORS options globally
app.use(cors(corsOptions));


app.get('/' , (req , res)=>{
    res.send("welcome to expree js")
})

app.use('/api',myRoute)
app.use('/api/users',userRoute)
app.use('/api/login',loginRoute)

const myport = process.env.PORT || 8000
app.listen(myport , ()=>{
    console.log(`server is running http://localhost:${myport}`)
})
