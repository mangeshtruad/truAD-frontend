import React from 'react'
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./TicketMenu.css"

const TicketMenu = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["user", "userdata"]);
    const navigate = useNavigate();
  return (
    <div className="ticket-box">
      <p>Tickets</p>
      <div className="ticket-divider"></div>
      {/* Add more ticket items here */}
      <div className="tickets">
            <button             onClick={() => {
              navigate("/dashboard/raiseticket");
            }}>Go to Ticketing</button>
            {/* <button             onClick={() => {
              navigate("/dashboard/raiseticket");
            }}>Raise a New Ticket</button> */}
      </div>
    </div>)
}

export default TicketMenu