import React, { useEffect, useState } from "react";
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
import Dialog from "./Dialog/Dialog";
import { useCookies } from "react-cookie";
import dark_mode from "../../Assets/dark_mode.png";
import bell from "../../Assets/bell.png";
import info from "../../Assets/info.png";
import "./raiseticket.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function RaiseTicket() {
  const [open, setOpen] = React.useState(false);
  const [cookies, setCookie] = useCookies(["user"]);
  const [user, setuser] = useState({});
  const [ticket, setticket] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const getTicket = async () => {
      try {
        const data = await fetch(
          "https://truad-dashboard-backend.onrender.com/api/user",
          {
            method: "GET", // Added method for clarity, assuming it's a GET request
            headers: {
              Authorization: `Bearer ${cookies.user}`,
              "Content-Type": "application/json",
            },
          }
        );
        const ticketData = await data.json();
     
        const formatter = new Intl.DateTimeFormat("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
        const ticketdata = ticketData.user.raiseTicket.map((el, ind) => {
          const createddate = new Date(el.createdAt);
          const updateddate = new Date(el.updatedAt);
          const formattedcreateddate = formatter
            .format(createddate)
            .replace(", ", " | ");
          const formattedupdateddate = formatter
            .format(updateddate)
            .split(",")[0];
          return {
            id: el._id,
            subject: el.subject,
            status: el.status,
            createdAt: formattedcreateddate,
            updatedAt: formattedupdateddate,
            viewImage: el.viewImage,
          };
        });
        setuser(ticketData.user);
        setticket(ticketdata);
      } catch (error) {
        console.log("error=>", error);
      }
    };
    getTicket();
  }, [cookies]);

  return (
    <React.Fragment>
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
                    component={"h6"}
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
              <div className="material-searchbar" style={{width:"none"}}>
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
                onClick={handleClickOpen}
              >
                Raise a new Ticket
              </Button>
            </div>
          </div>
          <div className="table_div">
            {/* <ul className="row table_navbar" style={{ flexWrap: "nowrap" }}>
              <li className="col navigationItem">All(10)</li>
              <li className="col navigationItem">Resoved(5)</li>
              <li className="col navigationItem">Pending(4)</li>
              <li className="col-7"></li>
            </ul> */}
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
                {ticket.map((el, ind) => {
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
                      <td>{el.id}</td>
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
                            {user.email}
                            <br />
                            Truad Pvt Ltd
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="status-label rounded-pill">{el.status}</p>
                      </td>
                      <td>{el.supportTeam}</td>
                      <td>{el.createdAt}</td>
                      <td>{el.updatedAt}</td>
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
      <Dialog handleClose={handleClose} open={open} user_email={user.email}/>
    </React.Fragment>
  );
}
