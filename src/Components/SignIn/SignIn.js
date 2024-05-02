import React, { useState } from "react";
import logo from "../../Assets/TruAd_White _Logo.png";
import pass_show from "../../Assets/pass-show.png";
import pass_hide from "../../Assets/pass-hide.png";
import "./SignIn.css";
import { useNavigate } from "react-router";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const handleUserChange = (e) => {
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSignIn = async() => {
    try {
      const response = await fetch('https://truad-dashboard-backend.onrender.com/api/login', {
        method: 'POST',
        body: JSON.stringify({ email: user.email, password: user.password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 401) {
        console.log("Invalid Password");
      }

      if (response.status === 404) {
        console.log("User not found");
      }

      if (response.status === 403) {
        console.log("User Email is not verified");
      }

      if (response.status === 200) {
        const data = await response.json();
        // Cookies.set("token", data.token, {
        //   secure: true,
        //   sameSite: "strict",
        //   httpOnly: true,
        // });
        // setCookie("user", data.token);
        // setCookie("userdata", data);
        // setloader(false)
        console.log("logged in", data)
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  }

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
              <input type="email" placeholder="mail@shimple.com" name="email" onChange={(e) => handleUserChange(e)}/>

              <label>Password:</label>
              <input type={showPassword? "email" : "password"} placeholder="Min. 8 characters" name="password" onChange={(e) => handleUserChange(e)}/>
              <img src={showPassword ? pass_show : pass_hide} onClick={() => setShowPassword(!showPassword)}></img>
              <div className="checkbox">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <input type="checkbox" id="pass" />
                  <label for="pass" style={{fontSize: "12px"}}> Keep me logged in</label>
                </div>
                <span><a href="#">Forgot Password</a></span>
              </div>
              <button type="button" onClick={handleSignIn}>Sign In</button>

              <div className="login-form-end">
                <span>
                  Not registered yet? <a onClick={() => navigate("/signup")} href="#">Create an Account</a>
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
