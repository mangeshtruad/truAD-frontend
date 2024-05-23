import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import image from "../../Assets/TruAd_White _Logo.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import "./resource.css";
import MediaCard from "./MediaCard/MediaCard";
import { useMyContext } from "../../MyContext";
import { sortByRating, sortByScore, sortByVotes } from "../../utils";
import dark_mode from "../../Assets/dark_mode.png";
import bell from "../../Assets/bell.png";
import info from "../../Assets/info.png";

export default function ResourceManagement() {
  const [media, setMedia] = useState([]);
  const { value } = useMyContext();
  const [filter, setFilter] = useState("rating");
  const [searchTerm, setSearchTerm] = useState("");

  const typeOptions = [
    { name: "IMDB Votes",
      value: "votes" },
    {
      name: "IMDB Rating",
      value: "rating",
    },
    {
      name: "MetaScore",
      value: "score",
    },
  ];
  useEffect(() => {
    const fetchMedia = async () => {
      console.log(filter)
      try {
        const apiKey = "37f889dd"; // Replace with your OMDb API key
        const fetchedMedia = await Promise.all(
          value.map(async (movie) => {
            const response = await fetch(
              `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`
            );
            const data = await response.json();
            return data;
          })
        );
        if (filter === "rating") {
          const filtered = await sortByRating(fetchedMedia);
          setMedia(filtered);
        } else if (filter === "votes") {
          const filtered = await sortByVotes(fetchedMedia);
          setMedia(filtered);
        } else if (filter === "score") {
          const filtered = await sortByScore(fetchedMedia);
          setMedia(filtered);
        }
        console.log("Media:", fetchedMedia);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMedia();
  }, [filter, value]);

  const handleFilter = (option) => {
    setFilter(option);
  };

  const searchMovies = async (text) => {
    const apiKey = "37f889dd"; // Replace with your OMDb API key
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${text}&apikey=${apiKey}`
      );
      const data = await response.json();
      setMedia(data.Search);
     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSearch = (event) => {
    const text = event.target.value;
    setSearchTerm(text)
    if (text === "") {
      searchMovies("Comedy");
    } else {
      searchMovies(text);
    }
  };
  return (
    
      <div style={{ height: "100%" }}>
        <main className="main">
          <div className="main_div">
            <div className="main-heading">
              <h3 className="dm-sans" style={{ fontWeight: "bold" }}>
                Popular Picks
              </h3>
            </div>
            <div className="material-searchbar">
              <div className="material-searchbar-container">
                <div className="material-searchbar-icons">
                  <img src={bell} alt=""></img>
                  <img src={dark_mode} alt=""></img>
                  <img src={info} alt=""></img>
                  <div className="material-profile">
                    <img alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row px-4">
            <div class="col-5">
              <div class="row align-items-center">
                <div class="col-4">
                  <h5 className="dm-sans" style={{ fontWeight: "bold" }}>
                    Popular Picks
                  </h5>
                </div>
                <div class="col-8 resource-searchbar" style={{maxWidth:"250px"}}>
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
                      onChange={(e)=>handleSearch(e)}
                      value={searchTerm}
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
                  <li className="list-item dm-sans" style={{width:"15%"}}>
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
                        Sort By
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={filter}
                        onChange={(e) => {
                          handleFilter(e.target.value);
                        }}
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
                            <MenuItem key={i} value={type.value}>
                              {type.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </li>
                  <li
                  style={{ width: "85%", borderBottom: "1px solid #e6e7e8" }}
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
  );
}