const contactSchema = require("../Model/ContectModel");

exports.newcontactReg = async (req, res) => {
  console.log("newcontactreg controller");

  const { name, email, message, mobile, address, brand, model } = req.body;

  try {
    const addNewContact = await contactSchema.create({
      name,
      email,
      message,
      mobile,
      address,
      brand,
      model,
    });

    if (addNewContact) {
      res.status(200).json({
        message: "success",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getContact = async (req, res) => {
  console.log("contact read");

  try {
    const getUser = await contactSchema.find();
    console.log("getUser read");

    res.status(200).json({
      message: "success",
      getUser,
    });
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

exports.delContact = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedContact = await contactSchema.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({
      message: "Contact deleted successfully",
      deletedContact,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete contact", error: error.message });
  }
};