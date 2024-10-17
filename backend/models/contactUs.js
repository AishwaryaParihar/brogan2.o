const mongoose = require("mongoose");

const contactDetail = new mongoose.Schema(
    {
    name: {
        type:String,
        require:true,
    },
    mobile:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    msg:String,
},{
    timestamps:true
}
)
const contactUs=mongoose.model("contact", contactDetail)
module.exports = contactUs