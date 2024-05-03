import React, { useState } from "react";
import logo from "../../Assets/TruAd_White _Logo.png";
import pass_show from "../../Assets/pass-show.png";
import pass_hide from "../../Assets/pass-hide.png";
import "./SignIn.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";

const SignIn = () => {
  const [cookies, setCookie] = useCookies(["user", "userdata"]);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();

  const handleUserChange = (e) => {
    setError("");
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignIn = async () => {
    try {
      setloader(true);
      const response = await fetch(
        "https://truad-dashboard-backend.onrender.com/api/login",
        {
          method: "POST",
          body: JSON.stringify({ email: user.email, password: user.password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 401) {
        setloader(false);
        return setError("Invalid Password");
      }

      if (response.status === 404) {
        setloader(false);
        return setError("User not found");
      }

      if (response.status === 403) {
        setloader(false);
        return setError("User Email is not verified");
      }

      if (response.status === 200) {
        const data = await response.json();
        setCookie("user", data.token);
        setCookie("userdata", data);
        setloader(false);
        console.log("logged in", data);
        navigate("/dashboard");
      }
    } catch (error) {
      setloader(false);
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="login-right">
        <div className="login-form-container">
          <div className="login-info">
            <h4>Sign In</h4>
            <p>Enter your email and password to Sign In!</p>
          </div>
          <div className="login-form">
            <form>
              <label>Email:</label>
              <input
                type="email"
                placeholder="mail@shimple.com"
                name="email"
                onChange={(e) => handleUserChange(e)}
              />

              <label>Password:</label>
              <input
                type={showPassword ? "email" : "password"}
                placeholder="Min. 8 characters"
                name="password"
                onChange={(e) => handleUserChange(e)}
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
              <img
                src={showPassword ? pass_show : pass_hide}
                onClick={() => setShowPassword(!showPassword)}
                alt="password"
              ></img>
              <div className="checkbox">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <input type="checkbox" id="pass" />
                  <label htmlFor="pass" style={{ fontSize: "12px" }}>
                    {" "}
                    Keep me logged in
                  </label>
                </div>
                <span>
                  <a href={{}}>Forgot Password</a>
                </span>
              </div>
              {/* <button type="button" onClick={handleSignIn}>Sign In</button> */}
              {loader ? (
                <CircularProgress color="inherit" sx={{ margin: "auto" }} />
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    handleSignIn();
                  }}
                  // style={{ marginTop: "20px", borderRadius: "5px" }}
                >
                  Sign In
                </button>
              )}

              <div className="login-form-end">
                <span>
                  Not registered yet?{" "}
                  <a onClick={() => navigate("/signup")} href="#">
                    Create an Account
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
