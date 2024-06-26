import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import image from "../../Assets/TruAd_White _Logo.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./resource.css";
import MediaCard from "./MediaCard/MediaCard";
import { useMyContext } from "../../MyContext";
import dark_mode from "../../Assets/dark_mode.png";
import bell from "../../Assets/bell.png";
import info from "../../Assets/info.png";
import Loader from "../Loader/Loader";
import Notification from "../Notification/Notification";
import Information from "../Information/Information";
import Profile from "../Profile/Profile";

export default function ResourceManagement() {
  const [isLoading, setIsLoading] = useState(true);
  const [option, setoption] = useState("");
  const [o1, seto1] = useState("");
  const [o2, seto2] = useState("");
  const [media, setMedia] = useState([]);
  const { value, setValue } = useMyContext();
  const [openBox, setOpenBox] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const handleBoxToggle = (boxName) => {
    setOpenBox(openBox === boxName ? null : boxName); // Toggle the box visibility
  };

  const typeOptions = ["All", "TV Show", "Movie"];
  const categories = [
    "Comedy",
    "Romance",
    "Romantic Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Action",
    "Adventure",
    "Sci-Fi",
    "Biography",
    "History",
    "Crime",
    "Thriller",
  ];
  const certifications = ["SA", "PG-13", "S+", "TV-MA", "TV-14", "R"];
  const searchMovies = async (text) => {
    const apiKey = "37f889dd"; // Replace with your OMDb API key
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${text}&apikey=${apiKey}`
      );
      const data = await response.json();
      setMedia(data.Search);
      setValue(data.Search);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    searchMovies("Comedy");
  }, []);
  const handleChange = (event) => {
    const text = event.target.value;
    setoption(text);
    if (text === "") {
      searchMovies("Comedy");
    } else {
      searchMovies(text);
    }
  };
  const handleSearch = (event) => {
    const text = event.target.value;
    if (text === "") {
      searchMovies("Comedy");
    } else {
      searchMovies(text);
    }
  };
  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ height: "100%" }}>
          <main className="main">
            <div className="main_div">
              <div className="main-heading">
                <h3 className="dm-sans" style={{ fontWeight: "bold" }}>
                  Resource Management
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
              <div class="col-4">
                <div class="row align-items-center">
                  <div class="col-4">
                    <h5 className="dm-sans" style={{ fontWeight: "bold" }}>
                      Resource
                    </h5>
                  </div>
                  <div class="col-8 resource-searchbar">
                    <div
                      class="input-group flex-nowrap overflow-hidden rounded-pill"
                      style={{ height: "30px" }}
                    >
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
                        onChange={(e)=>handleSearch(e)}
                        
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
              <div className="pt-3">
                <nav>
                  <ul className="nav_list p-0">
                    <li className="list-item dm-sans">
                      <FormControl variant="standard" sx={{ width: "100%" }}>
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
                          value={o1}
                          onChange={(el) => seto1(el.target.value)}
                          label="Type"
                          sx={{
                            color: "white",
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
                          {typeOptions?.map((type, i) => {
                            return (
                              <MenuItem key={i} value={type}>
                                {type}
                              </MenuItem>
                            );
                          })}
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
                          value={option}
                          onChange={handleChange}
                          label="Category"
                          sx={{
                            color: "white",
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
                          {categories?.map((category, i) => {
                            return (
                              <MenuItem key={i} value={category}>
                                {category}
                              </MenuItem>
                            );
                          })}
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
                          value={o2}
                          onChange={(el) => seto2(el.target.value)}
                          label="Certification"
                          sx={{
                            color: "white",
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
                          {certifications?.map((certification, i) => {
                            return (
                              <MenuItem key={i} value={certification}>
                                {certification}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </li>
                    <li
                      style={{
                        width: "70%",
                        borderBottom: "1px solid #e6e7e8",
                      }}
                    ></li>
                  </ul>
                </nav>
              </div>
              <div className="card_container">
                {media?.map((el, i) => {
                  return <MediaCard key={i} el={el} image={image} />;
                })}
              </div>
            </div>
          </main>
        </div>
      )}
      {/* <Dialog handleClose={handleClose} open={open} /> */}
    </React.Fragment>
  );
}
