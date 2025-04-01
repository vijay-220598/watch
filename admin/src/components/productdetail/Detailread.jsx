import React, { useEffect, useState } from "react";
import "../admincontact/contactread.css";
import { Client } from "../../Client";
import { ToastContainer, toast } from "react-toastify";

const Detailread = () => {
  const [details, setDetails] = useState([]);

  const getUserData = async () => {
    try {
      const response = await Client.get("/productUpload/productget");

      if (response.status === 200) {
        setDetails(response.data.getproductUpdate);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const response = await Client.delete(
        `/productUpload/productdelete/${id}`
      );
      if (response.status === 200) {
        getUserData();
      }
      toast.success("Deleted Successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
    } catch (error) {
      console.error("Error deleting product:", error.message);
      alert("Failed to delete product");
    }
  };

  return (
    <>
      <div className="container mt-5 ">
        <ToastContainer />
        <div className="">
          <h1>Product Details</h1>
        </div>

        <table className="contact_table table table-bordered table-striped">
          <thead>
            <tr className="table-primary">
              <th>Image</th>
              <th>Product Name</th>
              <th>Product Quantity</th>
              <th>Product Rate</th>
              <th>Product Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {details.map((user, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={user?.image?.url || "fallback_image_url"}
                    style={{
                      height: "80px",
                      width: "80px",
                      objectFit: "cover",
                    }}
                    className="text-center img-thumbnail card-img-top rounded"
                    alt="Product"
                    onError={(e) => {
                      e.target.src = "fallback_image_url";
                    }}
                  />
                </td>
                <td>{user.pname}</td>
                <td>{user.pquantity}</td>
                <td>{user.prate}</td>
                <td>{user.pdescription}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          className="modal fade"
          id="deleteModal"
          tabIndex="-1"
          aria-labelledby="deleteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">
                  Confirm Delete
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this enquiry?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  //    onClick={del}
                  data-bs-dismiss="modal"
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailread;
