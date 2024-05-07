import React, { useEffect, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import image from "../../Assets/TruAd_White _Logo.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./resource.css";
import MediaCard from "./MediaCard/MediaCard"
import { useMyContext } from "../../MyContext";
import { sortByRating, sortByScore, sortByVotes } from "../../utils";

export default function ResourceManagement() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
        try {
  
          const response = await fetch(
            `https://truad-dashboard-backend.onrender.com/get-ids`
          );
          const data = await response.json();
          // console.log(data.ids)
          setMedia(data.ids);
  
          const originalArray = data.ids;
          const uniqueArray = [...new Set(originalArray)];
          setMedia(uniqueArray);
  
          
          console.log(data)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchMedia();
  }, []);


  return (
    <React.Fragment>
      <div style={{ height: "100%" }}>
        <main className="main">
          <div className="main_div">
            <div className="main-heading">
              <h3 className="dm-sans" style={{ fontWeight: "bold" }}>
                Place Promotions
              </h3>
            </div>
            <div className="mainHelp_icon">
              <div className="align-self-center" style={{ width: "50%" }}>
                <p className="p-2 pt-3 dm-sans" style={{ textAlign: "end" }}>
                  Help
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
                <div class="col-4">
                  <h5 className="dm-sans" style={{ fontWeight: "bold" }}>
                    Place Promotions
                  </h5>
                </div>
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
              </div>
            </div>
            <div class="col-8 text-end">
              {/* <button
                type="button"
                class="add_resource dm-sans"
                style={{ fontSize: "medium" }}
              >
                Add New Resource
              </button> */}
            </div>
          </div>
          <div
            className="m-4 mb-0 rounded-3 overflow-hidden"
            style={{ background: "#656261" }}
          >
            {/* <div className="pt-3">
              
            </div> */}
            <div className="card_container">
              {media.map((el, i) => {
                return <MediaCard key={i} el={el} image={image} />;
              })}
            </div>
          </div>
        </main>
      </div>
      {/* <Dialog handleClose={handleClose} open={open} /> */}
    </React.Fragment>
  );
}