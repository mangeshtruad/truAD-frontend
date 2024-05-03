import React, { useState } from "react";
import logo from "../../Assets/TruAd_White _Logo.png";
import pass_show from "../../Assets/pass-show.png";
import pass_hide from "../../Assets/pass-hide.png";
import { useNavigate } from "react-router";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({})
  const [error, setError] = useState('')

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@(?:(?!gmail\.com)[^\s@]+\.)?truad\.co$/;
    return emailRegex.test(email);
  }


  const handleChange = (e) => {
    setError("")
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async() => {
  const valid = isValidEmail(user.email);

    if (valid) {
      try {
        const response = await fetch(
          "https://truad-dashboard-backend.onrender.com/api/register",
          {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 409) {
          return setError("User already exists");
        }

        if (response.status === 200) {
          // const data = await response.json();
          // console.log(data);
          console.log("sucess")
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError("Invalid email format");
    }
  }

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
              <input type="email" placeholder="Jeff Bezoz" name="name" onChange={(e) => handleChange(e)}/>
              <label>Email:</label>
              <input type="email" placeholder="mail@shimple.com" name="email" onChange={(e) => handleChange(e)}/>

              <label>Password:</label>
              <input
                type={showPassword ? "email" : "password"}
                placeholder="Min. 8 characters"
                name="password"  onChange={(e) => handleChange(e)}
              />
               {error && <p style={{ color: 'red' }}>{error}</p>}
              <img
                src={showPassword ? pass_show : pass_hide}
                onClick={() => setShowPassword(!showPassword)}
              ></img>
              {/* <div className="checkbox">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <input type="checkbox" id="pass" />
                  <label for="pass" style={{fontSize: "12px"}}> Keep me logged in</label>
                </div>
                <span><a>Forgot Password</a></span>
              </div> */}
              <button type="button" onClick={handleSubmit}>Sign Up</button>

              <div className="signup-form-end">
                <span>
                  Already have an account?{" "}
                  <a onClick={() => navigate("/")}>Sign In</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
