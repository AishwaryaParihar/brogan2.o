const contactUs = require("../../models/contactUs");


async function contactDetailDisplay(req, res){
    try{
        console.log('userid all users details',req.userId)
        console.log("hey contact details")
        const contactDetails = await contactUs.find()

        res.json({
            message : "contact details",
            data : contactDetails,
            success : true,
            error : false
        })
    }
    catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
          });
    }
}

module.exports = contactDetailDisplay