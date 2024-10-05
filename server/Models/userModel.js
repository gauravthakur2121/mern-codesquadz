const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    name:{
        type:String
    },

    email:{
        type: String
    },
    password:{
        type:String
    },
    confirmPassword:{
        type:String
    }
    
});

const Register = mongoose.models.Register || mongoose.model('Register', registerSchema);

module.exports = Register;

// module.exports =  mongoose.model("register" , User)
// // module.exports = mysch