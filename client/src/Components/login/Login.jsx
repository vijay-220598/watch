import React from "react";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="back">
        <div className="whole_continer min-vh-100  justify-content-center align-items-center">
          <div className="login_page">
            <h3 className="mb-3 text-center" style={{ fontWeight: "bolder" }}>
              Login page
            </h3>
            <form>
              {" "}
              <div className="mb-3 ">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email Address"
                  name="Email"
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
                  name="Password"
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

export default Login;
