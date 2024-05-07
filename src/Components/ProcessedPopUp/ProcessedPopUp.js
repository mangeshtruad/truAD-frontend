import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ProcessedPopUp.css";

const ProcessedPopUp = ({ togglePopup, selectedClipId }) => {
  const popupRef = useRef(null);
  const navigate = useNavigate() 

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        togglePopup();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const deleteBlend = async() => {
    try {
        const response = await fetch("http://localhost:4000/remove-blend", {

            method:"POST",
            body: JSON.stringify({
                itemID: selectedClipId._id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="processedpopup" ref={popupRef}>
      <div className="processedpopup-header">
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
      <div className="processedpopup-video">
        <video autoPlay muted loop playsInline>
          <source src={selectedClipId?.location} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="processedpopup-submit-btn">
        <button className="processedpopup-cancel-btn" onClick={deleteBlend}>Delete</button>
        <button className="processedpopup-next-btn" onClick={() => navigate('/dashboard/actionpage', {state: {location: selectedClipId}})}>
          Operate
        </button>
      </div>
    </div>
  );
};

export default ProcessedPopUp;