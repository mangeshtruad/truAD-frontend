import React, { useEffect, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import TablePagination from "./Pagination";
import image from "../../Assets/TruAd_White _Logo.png";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dark_mode from "../../Assets/dark_mode.png";
import bell from "../../Assets/bell.png";
import info from "../../Assets/info.png";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function RaiseTicket() {
  return (
    <div style={{ height: "100%" }}>
      <main className="main">
        <div
          className="main_div"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 2rem",
          }}
        >
           <div className="main-heading">
              <h3 className="dm-sans" style={{ fontWeight: "bold" }}>
                Invoice
              </h3>
            </div>
          <div className="material-searchbar">
            <div className="material-searchbar-container">
              <div className="material-searchbar-icons">
                <img src={bell}></img>
                <img src={dark_mode}></img>
                <img src={info}></img>
                <div className="material-profile">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row px-4">
          <div class="col-4">
            <div class="row align-items-center">
              <div class="col-8 resource-searchbar">
                <div class="input-group flex-nowrap overflow-hidden rounded-pill">
                  <span class="input-group-text" id="addon-wrapping">
                    <SearchIcon />
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="search_bar"
                    placeholder="Enter Ticket ID"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div class="col-4">
                <TuneIcon sx={{ color: "#2FBDA3" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="table_div">
          {/* <ul className="row table_navbar" style={{ flexWrap: "nowrap", margin:0}}>
              <li className="col navigationItem">All(10)</li>
              <li className="col navigationItem">Paid(5)</li>
              <li className="col navigationItem">Pending(4)</li>
              <li className="col navigationItem">Refunded(5)</li>
              <li className="col-6"></li>
            </ul> */}
          <table id="table">
            <thead>
              <tr>
                <th scope="col">
                  <Checkbox
                    {...label}
                    sx={{
                      color: "#B8BABC", // Default color
                      paddingBlock: 0,
                      "&.Mui-checked": {
                        // This targets the checkbox when it is checked
                        color: "#2FBDA3", // Change this value to whatever color you want for the checked state
                      },
                    }}
                  />
                </th>
                <th scope="col">
                  Invoice ID <ArrowDownwardIcon />
                </th>
                <th scope="col">
                  Customer Name <ArrowDownwardIcon />
                </th>
                <th scope="col">Invoice Status</th>
                <th scope="col">
                  Amount <ArrowDownwardIcon />
                </th>
                <th scope="col">
                  Date & Time <ArrowDownwardIcon />
                </th>
                <th scope="col">Open Status</th>
                <th scope="col">Action</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, ind) => {
                return (
                  <tr key={ind}>
                    <th scope="row">
                      <Checkbox
                        {...label}
                        sx={{
                          color: "#B8BABC", // Default color
                          "&.Mui-checked": {
                            // This targets the checkbox when it is checked
                            color: "#2FBDA3", // Change this value to whatever color you want for the checked state
                          },
                        }}
                      />
                    </th>
                    <td>#25653</td>
                    <td>
                      <div className="flex-center-end">
                        <div className="image-container">
                          <img
                            src={image}
                            alt="Profile"
                            style={{
                              width: "100%",
                              height: "auto",
                              maxWidth: "40px",
                            }}
                          />
                        </div>
                        <div className="email-details">
                          yashj@truad.co
                          <br />
                          Truad Pvt Ltd
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="status-label rounded-pill"
                        style={{ background: "none" }}
                      >
                        paid
                      </p>
                    </td>
                    <td>Rs 1,28,000</td>
                    <td>12 Feb 2024 | 13.30</td>
                    <td>5 days ago</td>
                    <td>
                      <Button
                        className="button-outlined-small rounded-3"
                        variant="contained"
                        size="small"
                        sx={{ marginRight: "3px" }}
                      >
                        Pay
                      </Button>
                      <Button
                        className="button-outlined-small rounded-3"
                        variant="contained"
                        size="small"
                        sx={{ marginLeft: "3px" }}
                      >
                        Send for review
                      </Button>
                    </td>
                    <td>
                      <IconButton
                        aria-label="delete"
                        size="small"
                        className="icon-button-small"
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <TablePagination />
        </div>
      </main>
    </div>
  );
}
