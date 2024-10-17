const mongoose = require("mongoose");

const aboutUsSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String
});


const aboutModel = mongoose.model("AboutUs", aboutUsSchema)
module.exports = aboutModel