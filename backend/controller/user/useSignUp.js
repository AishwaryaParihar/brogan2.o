const userModel = require("../../models/userModel");
const bcrypt = require("bcryptjs");

async function userSignUpController(req, res) {
  try {
    console.log(req.body);
    const {name, email, password } = req.body;

    console.log({ name,email, password})

    const user = await userModel.findOne({ email });

    console.log(user);
    if (user) {
      throw new Error("Already user exits");
    }

    if (!email) {
      throw new Error("Plese provide email");
    }
    if (!password) {
      throw new Error("Plese provide password");
    }

    if (!name) {
      throw new Error("Plese provide name");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(password, salt);

    console.log(hashPassword);

    if (!hashPassword) {
      throw new Error("somthng is wrong");
    }

    const payload = {
      ...req.body,
      role: "GENERAL",
      password: hashPassword,
    };

    const userData = new userModel(payload);
    const saveUser = await userData.save();

    return res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User created successfull..!",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
