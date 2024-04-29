import React, { useEffect } from "react";
import SideBar from './Components/SideBar/index';
import { Outlet } from "react-router-dom";
// import { CookiesProvider, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function DashBoardContainer() {
//   const [cookies, setCookie, removeCookie] = useCookies(["user"]);

//   useEffect(() => {
//     if (!cookies.user) {
//       navigate("/");
//     }
//     // removeCookie("user", {path:'/'})
//   }, [cookies]);

//   const navigate = useNavigate();

  return (
 <div style={{
  height:"99.8vh",
  display:"grid",
  gridTemplateColumns: "repeat(12, 1fr)"
 }}>
  <div style={{ gridColumn: "span 2"}}><SideBar/></div>
  <div style={{ gridColumn: "span 10" }}> <Outlet /></div>
 </div>
  );
}

export default DashBoardContainer;
