import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TuneIcon from "@mui/icons-material/Tune";
import Avatar from "@mui/material/Avatar";
import { Divider, Box, Button } from "@mui/material";
import "./raiseticket.css";

export default function RaiseTicket() {
  return (
    <div style={{ height: "100%", border: "1px solid red" }}>
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
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: 50, // Example fixed height to ensure visibility of the vertical divider
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
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>
              <div class="col-4">
                <TuneIcon />
              </div>
            </div>
          </div>
          <div class="col-8 text-end">
            <Button
              endIcon={<KeyboardArrowRightIcon />}
              variant="contained"
              class="add_resource dm-sans"
              sx={{
                bgcolor: "#2FBDA3",
                color: "white",
                textTransform: "none",
                fontSize: "small",
                borderRadius: "8px",
                "&:hover": {
                  bgcolor: "rgb(60, 212, 184)",
                },
              }}
            >
              Send for AI detection
            </Button>
          </div>
        </div>
        <div className="table_div">
          <div>d</div>
        </div>
        <div>s
            
        </div>
      </main>
    </div>
  );
}
