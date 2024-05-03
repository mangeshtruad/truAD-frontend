import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TuneIcon from "@mui/icons-material/Tune";
import Avatar from "@mui/material/Avatar";
import { Divider, Box, Button } from "@mui/material";
import TablePagination from "./Pagination";
import image from "../../Assets/TruAd_White _Logo.png";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./raiseticket.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function RaiseTicket() {
  return (
    <div style={{ height: "100%" }}>
      <main className="main_container">
        <div className="main_div">
          <div className="main-heading">
            <h3 className="dm-sans" style={{ fontWeight: "bold" }}>
              Help
            </h3>
          </div>
          <div className="mainHelp_icon">
            <div className="align-self-center" style={{ width: "50%" }}>
              <p className="p-2 pt-3 dm-sans">
                <Box
                  className="mainHelp_text"
                  sx={{
                    "& svg": {
                      m: 1,
                    },
                  }}
                >
                  Knowledgebase
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{
                      borderColor: "white",
                      borderWidth: "1px",
                      opacity: "0.7",
                      marginInline: 1,
                    }}
                  />{" "}
                  Announcment
                </Box>
              </p>
            </div>
            <div className="icon">
              <div>
                <NotificationsIcon />
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-moon-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                </svg>
              </div>
              <div>
                <ErrorOutlineOutlinedIcon />
              </div>
              <div>
                <Avatar alt="Remy Sharp" src="#" />
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
          <div class="col-8 text-end">
            <Button
              endIcon={<KeyboardArrowRightIcon />}
              variant="contained"
              className="add_resource dm-sans"
            >
              Send for AI detection
            </Button>
          </div>
        </div>
        <div className="table_div">
          <ul className="row table_navbar" style={{ flexWrap: "nowrap" }}>
            <li className="col navigationItem">All(10)</li>
            <li className="col navigationItem">Resoved(5)</li>
            <li className="col navigationItem">Pending(4)</li>
            <li className="col-7"></li>
          </ul>
          <table id="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">
                  Ticket ID <ArrowDownwardIcon />
                </th>
                <th scope="col">
                  Subject <ArrowDownwardIcon />
                </th>
                <th scope="col">Ticket Status</th>
                <th scope="col">
                  Support <ArrowDownwardIcon />
                </th>
                <th scope="col">
                  Ticket raise Date & Time <ArrowDownwardIcon />
                </th>
                <th scope="col">Last Updated</th>
                <th scope="col">Action</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {[1,2,3,4,5,6,7,8,9,10].map((el) => {
                return (
                  <tr>
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
                <td>EN001</td>
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
                      Qayyum@gmail.com
                      <br />
                      Truad Pvt Ltd
                    </div>
                  </div>
                </td>
                <td>
                  <p className="status-label rounded-pill">Resolved</p>
                </td>
                <td>ABC</td>
                <td>12 Feb 2024 | 13:30</td>
                <td>5 days ago</td>
                <td>
                  <Button
                    className="button-outlined-small rounded-3"
                    variant="outlined"
                    size="small"
                  >
                    View File
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
