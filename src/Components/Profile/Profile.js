import React from 'react'
import "./Profile.css"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Profile = ({name, email}) => {
    const [cookies, setCookie, removeCookie] = useCookies(["user", "userdata"]);
    const navigate = useNavigate();
  return (
    <div className="profile-box">
      <p>Profile</p>
      <div className="profile-divider"></div>
      {/* Add more profile items here */}
      <div className="profiles">
        <div className="profile">
          <h6>{cookies.userdata.username}</h6>
          <p>{cookies.userdata.email}</p>
        </div>
            <button             onClick={() => {
              removeCookie("user", { path: "/" });
              navigate("/");
            }}>Sign Out</button>
      </div>
    </div>
  )
}

export default Profile