import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import PopUp from "../UploadBand/Popup";

const BandPage = () => {
  const location = useLocation();
  const [bands, setBands] = useState([]);
  const [selectedBand, setSelectedBand] = useState(null);
  const [processedVideoUrl, setProcessedVideoUrl] = useState(null);
  const [open, setOpen] = useState(false);

  const togglePopup = () => {
    setOpen(!open);
  };

  const fetchBands = async () => {
    try {
      const response = await fetch("https://truad-backend.onrender.com/band");
      const data = await response.json();
      setBands(data.bands);
      console.log(data.bands);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBands();
  }, []);

  const handleSubmit = async () => {
    const form = new FormData();
    form.append("video_url", location.state.location.location);
    form.append("aston_band_url", selectedBand.location);

    try {
      const response = await fetch("http://127.0.0.1:5000/process", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        console.log("Processed video URL:", url);
        setProcessedVideoUrl(url);
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (processedVideoUrl) {
      console.log("Updated processedVideoUrl:", processedVideoUrl);
    }
  }, [processedVideoUrl]);

  return (
    <div style={{ display: "flex", height: "99.8vh" }}>
      {open && <PopUp togglePopup={togglePopup} />}
      <div
        style={{
          width: "75%",
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#343a40",
          color: "#fffffff5",
          borderRadius: "7px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <h6
          style={{
            textAlign: "center",
            paddingTop: "15px",
            paddingBottom: "5px",
          }}
        >
          Resource
        </h6>
        {!processedVideoUrl && (
          <video
            style={{
              width: "95%",
              margin: "0 auto",
              height: "40%",
              borderRadius: "7px",
              boxShadow: "rgba(0, 0, 1, 0.74) 0px 3px 8px",
              backgroundColor: "white",
            }}
            title="Video Player"
            controls
          >
            <source src={location.state.location.location} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {processedVideoUrl && (
          <video
            style={{
              width: "95%",
              margin: "0 auto",
              height: "40%",
              borderRadius: "7px",
              boxShadow: "rgba(0, 0, 1, 0.74) 0px 3px 8px",
              backgroundColor: "white",
            }}
            title="Video Player"
            controls
          >
            <source src={processedVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "7px",
            height: "40px",
            position: "relative",
          }}
        >
          <h6
            style={{ textAlign: "center", position: "absolute", bottom: "0px" }}
          >
            Selected Band
          </h6>
        </div>

        <div style={{ width: "95%", margin: "0 auto", height: "40%" }}>
          {selectedBand && (
            <img
              src={selectedBand.location}
              alt=""
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "7px",
                boxShadow: "rgba(0, 0, 0.5, 0.74) 0px 3px 8px",
              }}
            />
          )}
        </div>
        <Button
          component="div"
          sx={{
            borderRadius: 2,
            margin: 2,
            marginBottom: 1.3,
            padding: 1,
            color: "white",
            bgcolor: "rgba(0, 0, 0, 0.38);",
            "&:hover": {
              bgcolor: "red",
            },
          }}
          onClick={handleSubmit}
        >
          Blend
        </Button>
      </div>

      {/* rightSide */}
      <div
        style={{
          backgroundColor: "#343a40",
          color: "#fffffff5",
          margin: "10px",
          borderRadius: "7px",
          width: "25%",
          textAlign: "center",
        }}
      >
        <button onClick={togglePopup}>Add bands</button>
        <h6
          style={{
            textAlign: "center",
            marginTop: "10px",
            borderRadius: "7px",
          }}
        >
          All Bands
        </h6>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            height: "95%",
            padding: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "10px",
              display: "grid",
              gridTemplateColumns: "repeat(1  , 1fr)",
              gap: "20px",
              overflowY: "auto",
              maxHeight: "calc(100% - 20px)",
            }}
          >
            {bands?.map((elem, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              >
                <img
                  src={elem?.location}
                  onClick={() => setSelectedBand(elem)}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                    borderRadius: "7px",
                    maxHeight: "200px",
                    boxShadow: "rgba(0, 0, 1, 0.74) 0px 3px 8px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandPage;
