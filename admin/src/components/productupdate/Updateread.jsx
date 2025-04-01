import React, { useState } from "react";
import "./updateread.css";
import { ToastContainer, toast } from "react-toastify";
import { Client } from "../../Client";

const Updateread = () => {
  const initialData = { pname: "", pquantity: "", prate: "", pdescription: "" };

  const [image, setImage] = useState();
  const [user, setUser] = useState(initialData);

  const handleImage = (e) => {
    console.log(e.target.files);
    const actualFile = e.target.files[0];
    setImage(actualFile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit file");
    console.log(image);
    console.log(user);

    try {
      const formData = new FormData();

      formData.append("image", image);
      formData.append("pname", user.pname);
      formData.append("pquantity", user.pquantity);
      formData.append("prate", user.prate);
      formData.append("pdescription", user.pdescription);

      const fileUpload = await Client.post(
        "/productUpload/productimage",
        formData
      );
      console.log(fileUpload);
      if (fileUpload.status === 200) {
        toast.success("Submitted Succesfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored",
        });
        setUser(initialData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Product Image:
            </label>
            <input
              className="form-control"
              type="file"
              name="image"
              id="formFile"
              onChange={handleImage}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Product Name:
            </label>
            <input
              className="form-control"
              type="text"
              name="pname"
              value={user.pname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Product Quantity:
            </label>
            <input
              className="form-control"
              type="number"
              name="pquantity"
              value={user.pquantity}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Product Rate:
            </label>
            <input
              className="form-control"
              type="text"
              name="prate"
              value={user.prate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Product Description:
            </label>
            <input
              className="form-control"
              type="text"
              name="pdescription"
              value={user.pdescription}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Updateread;
