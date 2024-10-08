
const Data=require('../Models/dataModel')


module.exports.home=async(req,res)=>{
    try {
        const mydbs =  await Data.find({})
        console.log(mydbs)
        res.status(200).json({msg:"all data is here",mydbs:mydbs})
        
    } catch (error) {
        res.status(500).json({msg:"error"})
    }

}

module.exports.deleterecord=async(req,res)=>{
    try{
        const {id} = req.params;
        const del = await Data.findByIdAndDelete({"_id":id});
        console.log(del);
        res.status(256).json(del);
    }
    catch (error) {
        res.status(500).json({msg:"error"})
    }
}



module.exports.addData=async(req,res)=>{
    try {
        const {name, age, classe, department}=req.body;

        if(!name ||!age ||!classe||!department){
            res.status(400).json({msg:"All fields are required"})
        }
        const newData = await Data.create({
            name:name,
            age:age,
            classe:classe,
            department:department
        })
        res.status(201).json({msg:"data added successfully",data:newData})
    } catch (error) {
        res.status(500).json({msg:"Internal Server Error",error:error.message})
    }
}