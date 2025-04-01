import { useState, useEffect } from "react";
import { Client } from "../../Client";
import "./productdet.css";
// import { motion } from "motion/react";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

const Productdet = () => {
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

  // const deleteProduct = async (id) => {
  //   try {
  //     const response = await Client.delete(
  //       `/productUpload/productdelete/${id}`
  //     );
  //     if (response.status === 200) {
  //       getUserData();
  //     }
  //     //   toast.success("Deleted Successfully!", {
  //     //     position: "top-center",
  //     //     autoClose: 3000,
  //     //     hideProgressBar: false,
  //     //     closeOnClick: true,
  //     //     pauseOnHover: false,
  //     //     draggable: true,
  //     //     theme: "colored",
  //     //   });
  //   } catch (error) {
  //     console.error("Error deleting product:", error.message);
  //     alert("Failed to delete product");
  //   }
  // };

  return (
    <>
      <div className="productdet-container">
        <div className="detail-head">{/* <h1>Product Details</h1> */}</div>
        <div className="card-f">
          {details.map((user, index) => (
            <div className="f" key={index}>
              <div className="card-t">
                <Link
                  to={`/readmore/${user._id}`}
                  style={{
                    listStyle: "none",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <img
                    src={user?.image?.url || "fallback_image_url"}
                    className="img-detail"
                    alt="Product"
                    onError={(e) => (e.target.src = "fallback_image_url")}
                  />
                </Link>

                <div className="detail-card">
                  <h5 className="card-title">{user.pname}</h5>
                  {/* <p className="card-text">Quantity : {user.pquantity}</p> */}
                  <p className="card-text">₹ {user.prate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Productdet;
