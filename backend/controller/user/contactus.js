const contactUs = require("../../models/contactUs")

async function contactusController(req,res){
    try{
      console.log('Hey i am trggering',req.body)
      const {name, mobile, email, msg}=req.body
      if(!name){
        throw new Error("provide name")
      }
      if(!mobile){
        throw new Error("provide mobile  number")
      }
      if(!email){
        throw new Error("provide email")
      }
      if(!msg){
        throw new Error("provide msg")
      }
      
      const payload={
        ...req.body,
      }

      const contactdetail=new contactUs(payload)
      const savedata= await contactdetail.save()

      res.status(201).json({
        data: savedata,
        success: true,
        error: false,
        message: "user details added succesfully!"
      })
      
    }catch(err){
        res.json({
           message: err.message || err,
           erroe:true,
           success:false, 
        })
    }
}
module.exports=contactusController