import React, { useState } from "react";
import logo from "../../Assets/TruAd_White _Logo.png";
import pass_show from "../../Assets/pass-show.png";
import pass_hide from "../../Assets/pass-hide.png";
import "./SignIn.css";
import { useNavigate } from "react-router";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-logo">
          <img src={logo} />
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
              <input type="email" placeholder="mail@shimple.com" />

              <label>Password:</label>
              <input type={showPassword? "email" : "password"} placeholder="Min. 8 characters" />
              <img src={showPassword ? pass_show : pass_hide} onClick={() => setShowPassword(!showPassword)}></img>
              <div className="checkbox">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <input type="checkbox" id="pass" />
                  <label for="pass" style={{fontSize: "12px"}}> Keep me logged in</label>
                </div>
                <span><a>Forgot Password</a></span>
              </div>
              <button type="button">Sign In</button>

              <div className="login-form-end">
                <span>
                  Not registered yet? <a onClick={() => navigate("/signup")}>Create an Account</a>
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
