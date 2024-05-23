import React, { useState, useEffect, useRef } from 'react'
import { useCookies } from 'react-cookie';
import "./PopUp.css"

const PopUp = ({togglePopup}) => {
    const [image, setImage] = useState("");
    const [files, setFiles] = useState({})
    const [cookies] = useCookies(["user", "userdata"]);
    const popupRef = useRef(null);

    const handleUploadButtonClick = () => {
      const filebtn = document.getElementById("fileInput");
      filebtn.click();
    };
    
    const handleFileUpload = (e) => {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    };

    const handleChange = (e) => {
        setFiles((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
  
    const handleSubmit = async(e) => {

      e.preventDefault();
      // console.log(cookies.user)
      const fileObj = {
        name: files.Name,
        type: files.Type,
        size: files.Size,
        // date: files.Date,
        url: image, // Changed 'file' to 'Image' to match the object key
        group: files.Group,}

        console.log(fileObj)
        try {
          const response = await fetch("https://truad-dashboard-backend.onrender.com/api/uploadMaterial", {
            method: "POST",
            body: JSON.stringify({
              material : fileObj
            }),
            headers: {
              "Authorization": `Bearer ${cookies.user}`,
              "Content-Type" : "application/json"
            }
          })
    
          if(response.status === 200){
            return console.log("Success")
          }
    
          if(response.status === 500){
            return console.log("unsuccessful")
          }
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
      <p>Add Material</p>
    </div>
    <div className="popup-fields">
      <div className="popup-field-input">
        <input type="text" placeholder="Material Name" id='Name' onChange={(e) => handleChange(e)}/>
      </div>
      <div className="popup-field-input">
        <select name="cars" id="Group" onChange={(e) => handleChange(e)}>
          <option value="" disabled>
            Material Group
          </option>
          <option value="TV">TV</option>
          <option value="Mobile">Mobile</option>
        </select>
      </div>
      <div className="popup-field-input">
        <select name="cars" id="Size" onChange={(e) => handleChange(e)}>
          <option value="volvo" disabled>
            Material Size
          </option>
          <option value="6:9">6:9</option>
          <option value="4:3">4:3</option>
          <option value="16:9">16:9</option>
        </select>
      </div>
      <div className="popup-field-input">
        <select name="cars" id="Type" onChange={(e) => handleChange(e)}>
          <option value="volvo" disabled>
            Material Type
          </option>
          <option value="Image">Image</option>
          <option value="Video">Video</option>
        </select>
      </div>
      <div className="popup-field-input">
        <div className="custom-file-input">
          <input
            type="file"
            id="fileInput"
            onChange={(e) => handleFileUpload(e)}
          />
          <p>Upload Material Image</p>
          <div className="upload-btn-container">
            <p>Select or Drop a file here</p>
            <button onClick={handleUploadButtonClick}>Upload</button>
          </div>
        </div>
      </div>
      <div className="popup-file">
        {image ? <img src={image} alt=''></img> : <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" style={{visibility: "hidden"}}></img>}
      </div>

    </div>
    <div className="popup-submit-btn">
      <button className="popup-cancel-btn" onClick={togglePopup}>Cancel</button>
      <button className="popup-next-btn" onClick={handleSubmit}>Next</button>
    </div>
  </div>
  )
}

export default PopUp