import React, { useState } from "react";
import "./VerifyOTP.css";
import pass_show from "../../Assets/pass-show.png";
import pass_hide from "../../Assets/pass-hide.png";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const VerifyOTP = () => {
  const [email, setEmail] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOTPChange = (e) => {
    setOtp(e.target.value);
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://truad-backend.onrender.com/api/forgot",
        {
          //https://truad-backend.onrender.com/api/register
          method: "POST",
          body: JSON.stringify({
            email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 404) {
        return setError("User does not exist");
      }

      if (response.status === 500) {
        return setError("Something went Wrong");
      }

      if (response.status === 200) {
        return setEmailEntered(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(otp);
    try {
      const response = await fetch(
        "https://truad-backend.onrender.com/verifyOtp",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            otp,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 403) {
        return setError("Invalid OTP");
      }

      if (response.status === 404) {
        return setError("User not found");
      }

      if (response.status === 200) {
        const data = await response.json();
        console.log("data", data);
        setCookie("token", data.token);
        navigate("/confirmNew");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="verify-container">
      <div className="verify-email-input">
        <form>
          {!emailEntered ? (
            <>
              <label>Email:</label>
              <input
                type="email"
                placeholder="mail@shimple.com"
                name="email"
                onChange={(e) => handleEmailChange(e)}
              />
              <button onClick={handleGenerate} type="submit">
                Generate OTP
              </button>
            </>
          ) : (
            <>
              <label>OTP</label>
              <input
                type={showPassword ? "email" : "password"}
                name="email"
                value={otp}
                onChange={(e) => handleOTPChange(e)}
              />
              <button onClick={handleVerify} type="submit">
                Submit
              </button>
            </>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {emailEntered && (
            <img
              src={showPassword ? pass_show : pass_hide}
              onClick={() => setShowPassword(!showPassword)}
              alt="password"
            ></img>
          )}
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
