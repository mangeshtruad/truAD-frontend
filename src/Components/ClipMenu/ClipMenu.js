import React from 'react'
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./ClipMenu.css"

const ClipMenu = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["user", "userdata"]);
    const navigate = useNavigate();
  return (
    <div className="ticket-box">
      <p>Clips</p>
      <div className="ticket-divider"></div>
      {/* Add more ticket items here */}
      <div className="tickets">
            <button             onClick={() => {
              navigate("/dashboard/");
            }}>Go to Ticketing</button>
            {/* <button             onClick={() => {
              navigate("/dashboard/raiseticket");
            }}>Raise a New Ticket</button> */}
      </div>
    </div>)
}

export default ClipMenu