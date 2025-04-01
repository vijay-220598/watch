const imageModel = require("../Model/ImageModel");
const multer = require("multer");
const streamifier = require("streamifier");
const cloudinary = require("../Cloudinary");

const multerConfig = multer({
  storage: multer.memoryStorage(),
});

exports.upload = multerConfig.single("image");

exports.imageUpload = async (req, res, next) => {
  console.log(req);
  console.log("imageUpload");
  if (!req.file) {
    return res.status(400).json({ error: "no file uploaded" });
  }
  try {
    const fileName = `intern_${Date.now()}`;
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "intern",
        public_id: fileName,
        resource_type: "auto",
      },
      (err, result) => {
        // if (err) {
        //   console.log("cloudinary upload error", err);
        //   return res.status(500).json({ error: "cloudinary upload failed" });
        // }
        if (!result) {
          return res.status(500).json({ error: "Upload failed" });
        }
        console.log(result);
        req.cloudResult = result;
        next();
      }
    );
    streamifier.createReadStream(req.file.buffer).pipe(stream);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
};

exports.fileSave = async (req, res) => {
  console.log("im from file save");
  if (!req.cloudResult) {
    return res
      .status(500)
      .json({ error: "cloudinary upload did not complete" });
  }
  console.log(req.file);
  const { url, public_id } = req.cloudResult;
  const { pname, pquantity, prate, pdescription } = req.body;

  try {
    const fileUpload = await imageModel.create({
      image: { url: url, public_id: public_id },
      pname,
      pquantity,
      prate,
      pdescription,
    });
    console.log("getting data from file save", fileUpload);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error", error: error.message });
  }
};

exports.getFile = async (req, res) => {
  try {
    const getproductUpdate = await imageModel.find();
    if (!getproductUpdate || getproductUpdate.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json({ message: "success", getproductUpdate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.readMore = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  console.log("getting details of the images");

  try {
    const imageReadmore = await imageModel.findById({ _id: id });
    if (imageReadmore) {
      res.status(200).json({
        message: "success",
        imageReadmore,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteFile = async (req, res) => {
  const { id } = req.params;
  console.log("Deleting Product with ID:", id);

  try {
    const product = await imageModel.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.image && product.image.public_id) {
      await cloudinary.uploader.destroy(product.image.public_id);
    }

    await imageModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
