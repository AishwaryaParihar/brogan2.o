const aboutModel = require("../../models/aboutModel");
const bcrypt = require("bcryptjs");

async function Editabout(req, res) {
  
        const { title, content } = req.body;
        const updateData = {
            title,
            content,
            image: req.file ? req.file.path : null
        };
    
     
    console.log(updateData);
        try {
            const updatedAboutUs = await aboutModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
            res.json(updatedAboutUs);
        } catch (error) {
            res.status(500).json({ error: 'Error updating about us content' });
        }
    
}

module.exports = Editabout;
