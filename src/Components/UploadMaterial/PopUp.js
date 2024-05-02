import React, { useState } from 'react'
import "./PopUp.css"

const PopUp = ({togglePopup}) => {
    const [image, setImage] = useState("");

    const handleUploadButtonClick = () => {
        const filebtn = document.getElementById("fileInput");
        filebtn.click();
      };
    
      const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
      };

  return (
    <div className="popup">
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
          stroke-linejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="#B8BABC"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p>Add Material</p>
    </div>
    <div className="popup-fields">
      <div className="popup-field-input">
        <input type="text" placeholder="Material Name" />
      </div>
      <div className="popup-field-input">
        <select name="cars" id="cars">
          <option value="volvo" disabled>
            Material Group
          </option>
          <option value="saab">TV</option>
          <option value="mercedes">Mobile</option>
        </select>
      </div>
      <div className="popup-field-input">
        <select name="cars" id="cars">
          <option value="volvo" disabled>
            Material Size
          </option>
          <option value="saab">6:9</option>
          <option value="mercedes">4:3</option>
          <option value="mercedes">16:9</option>
        </select>
      </div>
      <div className="popup-field-input">
        <select name="cars" id="cars">
          <option value="volvo" disabled>
            Material Type
          </option>
          <option value="saab">Image</option>
          <option value="mercedes">Video</option>
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
        {image ? <img src={image}></img> : <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" style={{visibility: "hidden"}}></img>}
      </div>

    </div>
    <div className="popup-submit-btn">
      <button className="popup-cancel-btn" onClick={togglePopup}>Cancel</button>
      <button className="popup-next-btn">Next</button>
    </div>
  </div>
  )
}

export default PopUp