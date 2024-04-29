import React from "react";
import "./SideBar.css";
import TruAdlogo from "../../logo/Logo.png";
import list from "./itemList";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [list1, setlist] = React.useState(list);

  return (
    <div>
      <main>
        <div className="logo">
          <img src={TruAdlogo} alt="TruAd Logo" width={"50%"} />
        </div>
        {/* <ul className="list-sidebar">
            <li><a href="#">Dashboard</a></li>
            <li className="active">Popular Picks</li>
            <li>Resource Management</li>
            <li>Material Management</li>
            <li>Invoices</li>
            <li>Place Promotion</li>
            <li>Data Report</li>
        </ul> */}
        <List className="list-sidebar" sx={{paddingLeft:2, marginTop:3}}>
          {list1.map((e, i) => (
            // <Link
            //   to={e.targetLink}
            //   style={{
            //     textDecoration: "none",
            //     color: "white",
            //     fontWeight: "bold",
            //     display: "flex",
            //     justifyContent: "center",

            //   }}
            //   key={i}
            //   onClick={() => {
            //     // handleListColor(i);
            //   }}
            // >
            <ListItem
              disablePadding
              // style={
              //   e.isActive
              //     ? {
              //         backgroundColor: "red",
              //         border: "1px solid black",
              //         borderRadius: "5px",
              //         width: "80%",
              //       }
              //     : { width: "80%" }
              // }
            >
              <ListItemButton
              // onMouseEnter={(event) => handleMouseEnter(event, i)} // Set hovered icon index and position
              // onMouseLeave={handleMouseLeave} // Reset hovered icon
              >
                <ListItemIcon
                  sx={{ color: "#a3aed0" }}
                  style={
                    // collapsed
                    // ? {
                    //   display: "flex",
                    //   justifyContent: "center",
                    //   width: "100%",
                    // }
                    // :
                    {}
                  }
                >
                  {e.icon}
                </ListItemIcon>
                {
                  // !collapsed &&
                  <ListItemText primary={e.name} />
                }
              </ListItemButton>
            </ListItem>
            // </Link>
          ))}
        </List>
        <div className="signout_div">
          <button className="signout_button btn rounded-4 p-1.5">
            Sign Out
          </button>
        </div>
      </main>
    </div>
  );
}
