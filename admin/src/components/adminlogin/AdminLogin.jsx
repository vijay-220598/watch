import React, { useState } from "react";
import "./adminlogin.css";
import { Client } from "../../Client";

const AdminLogin = () => {
  const initialData = { email: "", password: "" };

  const [user, setUser] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const addNewUser = await Client.post("/adminlogin/adminloginadd", user);

      if (addNewUser.status === 200) {
        alert("Submitted Successfully");
        setUser(initialData);
      } else {
        alert("Failed to Submit.Please try again");
      }
    } catch (error) {
      console.log(error);
      alert("Error Submitting Form");
    }
  };

  return (
    <>
      <div className="back">
        <div className="whole_continer min-vh-100  justify-content-center align-items-center">
          <div className="login_page">
            <h3 className="mb-3 text-center" style={{ fontWeight: "bolder" }}>
              Login page
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 ">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email Address"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="form-control"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="submit_button-whole">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
