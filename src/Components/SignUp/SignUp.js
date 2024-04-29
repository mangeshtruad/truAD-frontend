import React, { useState } from "react";
import logo from "../../Assets/TruAd_White _Logo.png";
import pass_show from "../../Assets/pass-show.png";
import pass_hide from "../../Assets/pass-hide.png";
import { useNavigate } from "react-router";
import "./SignUp.css";

const SignIn = () => {
    const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="signup-logo">
          <img src={logo} />
        </div>
      </div>
      <div className="signup-right">
        <div className="signup-form-container">
          <div className="signup-info">
            <h4>Sign Up</h4>
            <p>Enter your email, password and name to Sign Up!</p>
          </div>
          <div className="signup-form">
            <form>
            <label>Name</label>
              <input type="email" placeholder="Jeff Bezoz" />
              <label>Email:</label>
              <input type="email" placeholder="mail@shimple.com" />

              <label>Password:</label>
              <input type={showPassword? "email" : "password"} placeholder="Min. 8 characters" />
              <img src={showPassword ? pass_show : pass_hide} onClick={() => setShowPassword(!showPassword)}></img>
              {/* <div className="checkbox">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <input type="checkbox" id="pass" />
                  <label for="pass" style={{fontSize: "12px"}}> Keep me logged in</label>
                </div>
                <span><a>Forgot Password</a></span>
              </div> */}
              <button type="button">Sign Up</button>

              <div className="signup-form-end">
                <span>
                  Already have an account? <a onClick={() => navigate("/")}>Sign In</a>
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
