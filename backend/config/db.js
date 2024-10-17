const mongoose = require("mongoose")


async function connetDB() {

    try {
        await mongoose.connect(process.env.MONGODB_URI)

    }
    catch (err) {

        console.log(err)
    }
}

module.exports = connetDB