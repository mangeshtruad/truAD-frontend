import React, { useEffect, useRef } from "react";
import "./AIPopUp.css";

const AIPopUp = ({ togglePopup, selectedClipId }) => {
  const popupRef = useRef(null);

  const aiDetection = async () => {
    try {
      const response = await fetch(
        "https://truad-backend.onrender.com//blend-clip",
        {
          method: "POST",
          body: JSON.stringify({
            id: selectedClipId._id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 500) {
        console.log("Internal Server Error");
        togglePopup();
        return;
      }

      if (response.status === 200) {
        console.log("Success");
        togglePopup();
        return;
      }
      togglePopup();
    } catch (error) {
      togglePopup();
      console.log(error);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        togglePopup();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="aipopup" ref={popupRef}>
      <div className="aipopup-header">
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
        <p>Send for AI Detection</p>
      </div>
      <div className="aipopup-video">
        <video autoPlay muted loop playsInline>
          <source src={selectedClipId?.location} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="aipopup-submit-btn">
        <button className="aipopup-next-btn" onClick={aiDetection}>
          Send for AI Detection
        </button>
      </div>
    </div>
  );
};

export default AIPopUp;
