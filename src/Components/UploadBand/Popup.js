import React, { useState, useEffect, useRef } from 'react'
import { useCookies } from 'react-cookie';
import "./Popup.css"

const PopUp = ({togglePopup}) => {
    const [image, setImage] = useState("");
    const [files, setFiles] = useState(null)
    const [bandName, setBandName] = useState('')
    const [cookies] = useCookies(["user", "userdata"]);
    const popupRef = useRef(null);

    const handleUploadButtonClick = () => {
      const filebtn = document.getElementById("fileInput");
      filebtn.click();
    };
    
    const handleFileUpload = (e) => {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
      setFiles(file)
    };

  
    const handleSubmit = async(e) => {

      e.preventDefault();
      try {
        const form = new FormData();
        form.append('band', files);
        form.append('name', bandName)
        const response = await fetch("http://localhost:4000/band", {
            method: "POST",
            body: form
        })
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    };

    useEffect(() => {
      function handleClickOutside(event) {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          togglePopup()
        }
      }
  
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
  
  
  return (
    <div className="bandPopup" ref={popupRef}>
    <div className="bandPopup-header">
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
      <p>Add Band</p>
    </div>
    <div className="bandPopup-fields">
      <div className="bandPopup-field-input">
        <input type="text" placeholder="Band Name" id='Name' onChange={(e) => setBandName(e.target.value)}/>
      </div>
      <div className="bandPopup-field-input">
        <div className="custom-file-input">
          <input
            type="file"
            id="fileInput"
            onChange={(e) => handleFileUpload(e)}
          />
          <p>Upload Band Image</p>
          <div className="upload-btn-container">
            <p>Select or Drop a file here</p>
            <button onClick={handleUploadButtonClick}>Upload</button>
          </div>
        </div>
      </div>
      <div className="bandPopup-file">
        {image ? <img src={image} alt=''></img> : <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" style={{visibility: "hidden"}}></img>}
      </div>

    </div>
    <div className="bandPopup-submit-btn">
      <button className="bandPopup-cancel-btn" onClick={togglePopup}>Cancel</button>
      <button className="bandPopup-next-btn" onClick={handleSubmit}>Next</button>
    </div>
  </div>
  )
}

export default PopUp