const mongoose = require('mongoose')

const myshemadata = new mongoose.Schema({
    name:{ type:String, required:true},
    age:{type:Number, required: true , min:[18 , "not a eligible"] , max:65},
    emailid:{type:String , required:[true , "Please enter the email address"]},
    password:{type:String , required:true}

})