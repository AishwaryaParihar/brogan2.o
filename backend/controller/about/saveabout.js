const aboutModel = require("../../models/aboutModel");
const bcrypt = require("bcryptjs");

async function Saveabout(req, res) {
    const { title, content } = req.body;
    const newAboutUs = new aboutModel({
        title,
        content,
          image: req.file ? req.file.path : null // Handle file upload if applicable
    });

    try {
        const savedAboutUs = await newAboutUs.save();
        res.json(savedAboutUs);
    } catch (error) {
        res.status(500).json({ error: 'Error saving about us content' });
    }
}

module.exports = Saveabout;
