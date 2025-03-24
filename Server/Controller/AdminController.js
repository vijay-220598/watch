const AdminloginSchema = require("../Model/AdminLogin");
const bcrypt = require("bcryptjs");

exports.newAdminlogin = async (req, res) => {
  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  try {
    const addAdminlogin = await AdminloginSchema.create({
      email,
      password: hashPassword,
    });

    if (addAdminlogin) {
      res.status(200).json({
        message: "success",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
