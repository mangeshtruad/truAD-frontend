import React, { useEffect, useRef } from "react";
import "./DeletePopUp.css";

const DeletePopUp = ({ togglePopup, handleDelete, item }) => {
  const popupRef = useRef(null);

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
            <button className="delpopup-cancel-btn" onClick={togglePopup}>Cancel</button>
            <button className="delpopup-confirm-btn" onClick={() => handleDelete(item._id)}>Remove</button>
        </div>
    </div>
  );
};

export default DeletePopUp;