const bcrypt = require("bcryptjs");
const userModel = require("../../models/userModel");
const jwt = require('jsonwebtoken');
async function userSignInController(req, res) {
  try {
    const { email, password } = req.body;
    console.log({ email, password });

    if (!email) {
      throw new Error("Plese provide email");
    }
    if (!password) {
      throw new Error("Plese provide password");
    }
    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const checkPassword =  bcrypt.compareSync(password, user.password);
    console.log("checkPassword", checkPassword)
     

    if (checkPassword){
      const tokenData ={
        _id : user._id,
        email : user.email,
      }
      const token =  await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });
      const tokenOption = {
        httpOnly : true,
        secure : true,
        sameSite: 'None'
      }
      res.cookie("token", token, tokenOption).json({
        message : "Login succesfully",
        data : token, 
        success : true,
        error : false
      })
    }else{
      throw new Error("please check password")
    }


    // added by anuj 
    // return res.status(200).json({
    //   message: "User found",
      
    // })
  // added by anuj 


  } catch (err) {
    console.log(err)
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = userSignInController;
