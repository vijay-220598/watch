const RegistrationSchema = require("../Model/RegistrationModel");
const bcrypt = require("bcryptjs");

exports.newRegistration = async (req, res) => {
  console.log("new contactreg controller");

  const { name, email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  try {
    const addRegistration = await RegistrationSchema.create({
      name,
      email,
      password: hashPassword,
    });

    if (addRegistration) {
      res.status(200).json({
        message: "success",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
