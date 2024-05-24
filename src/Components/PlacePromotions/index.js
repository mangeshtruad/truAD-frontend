import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import image from "../../Assets/TruAd_White _Logo.png";

import MediaCard from "./MediaCard/MediaCard";

import dark_mode from "../../Assets/dark_mode.png";
import bell from "../../Assets/bell.png";
import info from "../../Assets/info.png";
import Loader from "../Loader/Loader";
import Notification from "../Notification/Notification";
import Information from "../Information/Information";
import Profile from "../Profile/Profile";


export default function ResourceManagement() {
  const [media, setMedia] = useState([]);
  const [isLoading, setisLoading] = useState(true)
  const [openBox, setOpenBox] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const handleBoxToggle = (boxName) => {
    setOpenBox(openBox === boxName ? null : boxName); // Toggle the box visibility
  };

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
        setisLoading(false)
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMedia();
  }, []);

  return (
    <React.Fragment>
      {isLoading ? <Loader/> : (<div style={{ height: "100%" }}>
        <main className="main">
          <div className="main_div">
            <div className="main-heading">
              <h3 className="dm-sans" style={{ fontWeight: "bold" }}>
                Place Promotions
              </h3>
            </div>
            <div className="material-searchbar">
              <div className="material-searchbar-container">
                <div className="material-searchbar-icons">

                <div
                  className="material-searchbar-icons-notif"
                  style={{ position: "relative" }}
                >
                  <img
                    src={bell}
                    alt=""
                    onClick={() => handleBoxToggle("notification")}
                  />
                  {openBox === "notification" && (
                    <Notification notifications={notifications} />
                  )}

                </div>
                <img src={dark_mode}></img>
                <div
                  className="material-searchbar-icons-info"
                  style={{ position: "relative" }}
                >
                  <img
                    src={info}
                    alt=""
                    onClick={() => handleBoxToggle("info")}
                  ></img>
                  {openBox === "info" && <Information />}
                </div>
                <div
                  className="material-profile"
                  style={{ position: "relative" }}
                >
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                    onClick={() => handleBoxToggle("profile")}
                  ></img>
                  {openBox === "profile" && <Profile />}
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class="row px-4">
            <div class="col-5">
              <div class="row align-items-center">
                <div class="col-5">
                  <h5 className="dm-sans" style={{ fontWeight: "bold" }}>
                    Place Promotion
                  </h5>
                </div>
                <div class="col-7 resource-searchbar" style={{maxWidth:"250px"}}>
                  <div class="input-group flex-nowrap overflow-hidden rounded-pill" style={{height:"30px"}}>
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
      </div>)}
      {/* <Dialog handleClose={handleClose} open={open} /> */}
    </React.Fragment>
  );
}
