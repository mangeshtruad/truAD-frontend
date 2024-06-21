import React, { useState, useEffect } from "react";
import Uploadvideo from "../Dialog/Uploadvideo";
const MediaCard = ({ el }) => {
  const [media, setMedia] = useState({});
  const [clips, setClips] = useState([]);
  const [open, setOpen] = useState(false);

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
        `https://www.omdbapi.com/?i=${el.imdbID}&apikey=${apiKey}`
      );

      const data = await response.json();
      setMedia(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchVids = async () => {
    try {
      const response = await fetch(
        "https://truad-backend.onrender.com//get-existingItem",
        {
          method: "POST",
          body: JSON.stringify({
            id: el.imdbID,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const data2 = data.locations.map((elem) => ({
        ...elem,
        location: elem.location.split("?AWS")[0],
        name: elem.name.split("upload/")[1],
      }));

      console.log("data", data2);
      setClips((prev) => [...prev, ...data2]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    searchMovies();
    fetchVids();
  }, []);

  return (
    <>
      <div key={media.imdbID} className="card" onClick={handleClickOpen}>
        <div className="card-text dm-sans">{media.Title}</div>
        <div className="card-image">
          <img src={media.Poster} alt="" />
          <div className="hover-data rounded-bottom-3">{media.Plot}</div>
        </div>
      </div>
      {clips.length === 0 ? (
        <Uploadvideo
          handleClose={handleClose}
          open={open}
          setClips={setClips}
        />
      ) : (
        // <Dialog handleClose={handleClose} open={open} clips={clips} name={el.Title}/>
        <Uploadvideo
          handleClose={handleClose}
          open={open}
          setClips={setClips}
        />
      )}
    </>
  );
};

export default MediaCard;
