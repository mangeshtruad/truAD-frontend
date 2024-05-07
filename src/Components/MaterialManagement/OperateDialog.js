import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

export default function OprateDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [videos, setVideos] = useState([]);
  const popupRef = useRef(null);
  const navigate = useNavigate()

  const handleUploadButtonClick = () => {
    const filebtn = document.getElementById("fileInput");
    filebtn.click();
  };

  const togglePopup = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
      } catch (error) {
        console.log("error=", error);
      }
      const response = await fetch(
        "https://truad-dashboard-backend.onrender.com/get-video",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      const video = data.data.map((el) => ({
        ...el,
        location: el.location.split("?")[0],
      }));
      if (video.length > 0) {
        setVideos(video);
      }
    };

    fetchData();
  }, []);
  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (popupRef.current && !popupRef.current.contains(event.target)) {
  //       togglePopup()
  //     }
  //   }

  //   // Bind the event listener
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     // Unbind the event listener on clean up
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const handleSubmit = () => {
    console.log('Submit')
  }

  return (
    <React.Fragment>
      {/* <Button
        variant="contained"
        disableElevation
        style={{ width: "50%" }}
        onClick={handleClickOpen}
      >
        Oprate
      </Button> */}
      <div className="material-card-operate-btn" onClick={togglePopup}>
        <p>Operate</p>
      </div>
      {open && (
        <div className="popup" ref={popupRef}>
          <div className="popup-header">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={togglePopup}
            >
              <path
                d="M18 6L6 18"
                stroke="#B8BABC"
                stroke-width="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#B8BABC"
                stroke-width="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Operate</p>
          </div>
          <div className="popup-fields">
            <div className="popup-file">
              <img src={props.item.url}></img>
            </div>
            <div className="popup-file">
              <div className="popup-file-videos">
                <p>Available Clips</p>
                <div className="popup-videos-container">
                  {videos.length > 0 && (
                    videos.map((video) => 
                      <video autoPlay muted loop playsInline onClick={() => navigate('/dashboard/actionpage', {state: {img: props.item, location: video}})}>
                    <source src={video.location} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>)
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="popup-submit-btn">
            <button className="popup-cancel-btn" onClick={togglePopup}>
              Cancel
            </button>
            <button className="popup-next-btn" onClick={handleSubmit}>
              Next
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
