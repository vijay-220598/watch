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

    const token = jwt.sign({ id: SignupCheck._id }, secertKey, {
      expiresIn: expiryTime,
    });
    console.log("sigin", token);
    if (token) {
      res
        .status(200)
        .cookie("registrationToken", token, {
          httpOnly: true,
          sameSite: "none",
          secure: true,
        })
        .json({ message: "success", token: token });
    }
  } catch (err) {
    console.log(err);
  }
};
