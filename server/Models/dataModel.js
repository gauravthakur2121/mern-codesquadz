const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    age:{
        type: String,
        required:true
    },
    classe:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    }
    
});

module.exports =  mongoose.model("data" , dataSchema)
// module.exports = mysch


