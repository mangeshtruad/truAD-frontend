import React from "react";
import "./MaterialLibrary.css";
import dark_mode from "../../Assets/dark_mode.png";
import bell from "../../Assets/bell.png";
import info from "../../Assets/info.png";
import search from "../../Assets/search.png";

const MaterialLibrary = () => {
  return (
    <div className="material-container">
      <div className="material-header">
        <div className="material-user-info">
          <h4>Material Management</h4>
          <p>Help</p>
        </div>
        <div className="material-searchbar">
          <div className="material-searchbar-container">
            <div className="material-searchbar-icons">
              <img src={bell}></img>
              <img src={dark_mode}></img>
              <img src={info}></img>
              <div className="material-profile">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="material-info">
        <div className="material-library-searchbar">
            <p>Material Library</p>
            <div className="searchbar">
              <input type="text" placeholder="Search"></input>
              <img src={search}></img>
            </div>
        </div>
        <div className="homepage-upload-btn">
          <p>Upload New Materials</p>
        </div>
      </div>
      <div className="materials-container">
        <div className="materials-container-header">
            <div className="materials-container-tab active">
                <p>Picture</p>
            </div>
            <div className="materials-container-tab">
                <p>Video</p>
            </div>
            <div className="materials-container-tab">
                <p>3D</p>
            </div>
        </div>
        <div className="materials-grid"></div>
      </div>
    </div>
  );
};

export default MaterialLibrary;
