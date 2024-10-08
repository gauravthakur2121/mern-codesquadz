const mongoose = require('mongoose')

const Loginschema = new mongoose.Schema({
    email:{
        type: String
    },
    password:{
        type:String
    }
    
});

const Login = mongoose.models.Login || mongoose.model('Login', Loginschema);

module.exports = Login;