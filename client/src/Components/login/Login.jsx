import { useState } from "react";
import "./login.css";
import { Client } from "../../Client";
import { useNavigate } from "react-router-dom";

const initialData = { email: "", password: "" };
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialData);
  // const [token, setToken] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  //  const tokens = Cookies.get("jwttoken");
  //     console.log(tokens);
  //     setToken(tokens);

  const submit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const addNewUser = await Client.post("/login/loginuser", user);
      console.log(addNewUser);
      if (addNewUser.status === 200) {
        // toast.success("submitted successfully!", {
        //   position: "top-center",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: false,
        //   draggable: true,
        //   theme: "colored",
        // });
        alert("submitted successfully");

        setUser(initialData);
        // Cookies.set("jwttoken", addNewUser.data.token);
        navigate("/");
        // verify();
      } else {
        alert("Unexpected response from server.");
        navigate("/signup");
      }
    } catch (error) {
      console.log(error);
      // alert(error.response.data.message);

      // if (error.response) {
      //   alert(error.response.data?.message || "Login failed!");
      // } else {
      //   alert("Server error or no response received.");
      // }
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
            <form >
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
                />
              </div>
              <div className="submit_button-whole">
                <button type="submit" onClick={submit} className="btn btn-primary">
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
