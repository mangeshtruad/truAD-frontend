import React, { useEffect, useRef } from "react";
import "./DeletePopUp.css";

const DeletePopUp = ({ togglePopup, selectedClipId }) => {
  const popupRef = useRef(null);

  const aiDetection = async () => {
    try {
      const response = await fetch(
        "https://truad-dashboard-backend.onrender.com/blend-clip",
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
    <div className="delpopup" ref={popupRef}>
        <p>Are you sure you want to remove this material</p>
        <div className="delpopup-btn">
            <button className="delpopup-cancel-btn">Cancel</button>
            <button className="delpopup-confirm-btn">Remove</button>
        </div>
    </div>
  );
};

export default DeletePopUp;