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
import Dialog from "./Dialog/Uploadvideo";
import Uploadvideo from "./Dialog/Uploadvideo";
import "./resource.css";
import MediaCard from "./MediaCard/MediaCard";

export default function ResourceManagement() {
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState([])

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const searchMovies = async () => {
    const apiKey = "37f889dd"; // Replace with your OMDb API key
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${"Comedy"
        }&apikey=${apiKey}`
      );

      const data = await response.json()
      console.log(data.Search);
      setMedia(data.Search)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    searchMovies();
  }, []);
  return (
    <React.Fragment>
      <div style={{ height: "100%" }}>
        <main className="main">
          <div className="main_div">
            <div className="main-heading">
              <h3 className="dm-sans" style={{ fontWeight: "bold" }}>
                Resource Management
              </h3>
            </div>
            <div className="mainHelp_icon">
              <div className="align-self-center" style={{ width: "50%" }}>
                <p className="p-2 pt-3 dm-sans">Help</p>
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
                    Resource
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
              <button
                type="button"
                class="add_resource dm-sans"
                style={{ fontSize: "medium" }}
              >
                Add New Resource
              </button>
            </div>
          </div>
          <div
            className="m-4 mb-0 rounded-3 overflow-hidden"
            style={{ background: "#656261" }}
          >
            <div className="pt-3">
              <nav>
                <ul className="nav_list p-0">
                  <li className="list-item dm-sans">
                    <FormControl variant="standard" sx={{ width: "100%", }}>
                      <InputLabel
                        id="demo-simple-select-standard-label"
                        sx={{
                          color: "white",
                          // left:"1rem",
                          width: "80%",
                          "&.Mui-focused": {
                            color: "#2fbda3",
                          },
                        }}
                      >
                        Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        // value={age}
                        // onChange={handleChange}
                        label="Age"
                        sx={{
                          "&:hover:not(.Mui-disabled, .Mui-error):before": {
                            borderBottom: "2px solid #2fbda3",
                          },
                          "& .MuiSelect-icon": {
                            color: "white", // Default color of the arrow icon
                            fontSize: "1.5rem", // Default size of the arrow icon
                          },
                          "&:before": {
                            borderBottomColor: "#e6e7e8",
                          },
                          "&:after": {
                            borderBottomColor: "#2fbda3",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </li>

                  <li className="list-item dm-sans">
                    <FormControl variant="standard" sx={{ width: "100%" }}>
                      <InputLabel
                        id="demo-simple-select-standard-label"
                        sx={{
                          color: "white",
                          width: "80%",
                          "&.Mui-focused": {
                            color: "#2fbda3",
                          },
                        }}
                      >
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        // value={age}
                        // onChange={handleChange}
                        label="Age"
                        sx={{
                          "&:hover:not(.Mui-disabled, .Mui-error):before": {
                            borderBottom: "2px solid #2fbda3",
                          },
                          "& .MuiSelect-icon": {
                            color: "white", // Default color of the arrow icon
                            fontSize: "1.5rem", // Default size of the arrow icon
                          },
                          "&:before": {
                            borderBottomColor: "#e6e7e8",
                          },
                          "&:after": {
                            borderBottomColor: "#2fbda3",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </li>

                  <li className="list-item dm-sans">
                    <FormControl variant="standard" sx={{ width: "100%" }}>
                      <InputLabel
                        id="demo-simple-select-standard-label"
                        sx={{
                          color: "white",
                          width: "80%",
                          "&.Mui-focused": {
                            color: "#2fbda3",
                          },
                        }}
                      >
                        Certification
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        // value={age}
                        // onChange={handleChange}
                        label="Age"
                        sx={{
                          "&:hover:not(.Mui-disabled, .Mui-error):before": {
                            borderBottom: "2px solid #2fbda3",
                          },
                          "& .MuiSelect-icon": {
                            color: "white", // Default color of the arrow icon
                            fontSize: "1.5rem", // Default size of the arrow icon
                          },
                          "&:before": {
                            borderBottomColor: "#e6e7e8",
                          },
                          "&:after": {
                            borderBottomColor: "#2fbda3",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </li>
                  <li
                    style={{ width: "70%", borderBottom: "1px solid #e6e7e8" }}
                  ></li>
                </ul>
              </nav>
            </div>
            <div className="card_container">
              {media.map((el) => {
                return (
                  <MediaCard el={el} handleClickOpen={handleClickOpen} image={image}/>
                );
              })}
            </div>
          </div>
        </main>
      </div>
      {/* <Dialog handleClose={handleClose} open={open} /> */}
      <Uploadvideo handleClose={handleClose} open={open} />
    </React.Fragment>
  );
}