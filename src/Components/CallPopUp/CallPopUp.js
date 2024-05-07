import React, { useEffect, useRef } from "react";
import "./CallPopUp.css";
import video_call from "../../Assets/video-call.png"
import voice_call from "../../Assets/voice-call.png"

const CallPopUp = ({ togglePopup, selectedClipId }) => {
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
    <div className="callpopup" ref={popupRef}>
        <div className="callpopup-left">
            <div className="callpopup-left-icon">
                <img src={voice_call}></img>
            </div>
            <p>Voice Call</p>
        </div>
        <div className="callpopup-right">
        <div className="callpopup-right-icon">
                <img src={video_call}></img>
            </div>
            <p>Video Call</p>
        </div>
    </div>
  );
};

export default CallPopUp;