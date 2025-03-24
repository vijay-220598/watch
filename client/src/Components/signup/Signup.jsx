import React, { useState } from "react";
import "./signup.css";
import { Client } from "../../Client";

const Signup = () => {
  const initialData = {
    name: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting data:", user);

    try {
      const addNewUser = await Client.post("/registration/registrationadd", user);
      console.log("Response:", addNewUser);

      if (addNewUser.status === 200) {
        alert("Submitted successfully!");
        setUser(initialData);
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Check console for details.");
    }
  };
  return (
    <>
      <div className="back">
        <div className="whole_continer justify-content-center align-items-center min-vh-100">
          <div className="login_page">
            <h3 className="mb-3 text-center">Registration page</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email Address "
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Confrim Password"
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleChange}
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

export default Signup;
