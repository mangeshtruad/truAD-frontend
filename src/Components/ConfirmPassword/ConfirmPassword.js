import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import pass_show from "../../Assets/pass-show.png";
import pass_hide from "../../Assets/pass-hide.png";
import "./ConfirmPassword.css";

const ConfirmPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Please enter correct Password in both the fields");
    }

    try {
      const response = await fetch(
        "https://truad-backend.onrender.com//resetPassword",
        {
          method: "POST",
          body: JSON.stringify({
            newPassword: password,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );

      if (response.status === 403) {
        return setError("Unauthorized");
      }

      if (response.status === 404) {
        return setError("User not found");
      }

      if (response.status === 400) {
        return setError(
          "Password must be at least 8 characters long and contain at least one special character, one uppercase character, and one number."
        );
      }
      setError("Password Updated");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="confirm-container">
      <div className="confirm-email-input">
        <form>
          <label className="newPass">
            New Password
            <img
              src={showNewPass ? pass_show : pass_hide}
              onClick={() => setShowNewPass(!showNewPass)}
            ></img>
          </label>
          <input
            type={showNewPass ? "email" : "password"}
            name="email"
            onChange={(e) => handlePasswordChange(e)}
            className="newPass"
          />

          <label className="confirmPass">
            Confirm New Password
            <img
              src={showConfirmPass ? pass_show : pass_hide}
              onClick={() => setShowConfirmPass(!showConfirmPass)}
            ></img>
          </label>
          <input
            type={showConfirmPass ? "email" : "password"}
            name="email"
            onChange={(e) => handleConfirmPasswordChange(e)}
            className="confirmPass"
          />
          <button onClick={handleReset} type="submit">
            Reset
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default ConfirmPassword;
