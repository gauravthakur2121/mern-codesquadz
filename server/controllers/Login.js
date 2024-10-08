const User = require('../Models/loginModel');

module.exports.Loginuser = async(req , res)=>{
    try{
        const {email , password} = req.body
        const adduser = await User.create({
            email , password
        })
        await adduser.save();
        res.status(200).json({msg: "user is Logged in" , adduser:adduser})
        console.log(adduser)
    }
    catch{
        res.status(500).json({msg: "internal server Error"})
    }
}

