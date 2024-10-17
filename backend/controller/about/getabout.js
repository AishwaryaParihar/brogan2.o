const aboutModel = require("../../models/aboutModel");
const bcrypt = require("bcryptjs");

async function Getabout(req, res) {
  
    try {
        const about = await aboutModel.findById(req.params.id);
        if (about == null) {
          return res.status(404).json({ message: 'About not found' });
        }
        res.json(about);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

module.exports = Getabout;
