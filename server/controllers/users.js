
const User = require('../Models/userModel')

module.exports.registerUser=async(req,res)=>{
    try {
        
        const {name , email , password , confirmPassword} = req.body;
        const adduser = await User.create({
            name , email , password , confirmPassword
        });
        await adduser.save();
        res.status(200).json({msg:"User Is registered",adduser:adduser});
        console.log(adduser);
        
    } catch (error) {
        res.status(500).json({msg:"Internal Server Error"})
    }
}