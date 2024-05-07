import React, { useState, useEffect } from "react";
import "./MaterialLibrary.css";
import dark_mode from "../../Assets/dark_mode.png";
import bell from "../../Assets/bell.png";
import info from "../../Assets/info.png";
import search from "../../Assets/search.png";
import trash from "../../Assets/trash.png";
import PopUp from "../UploadMaterial/PopUp";
import { useNavigate } from "react-router-dom";
import OprateDialog from "./OperateDialog";
import DeletePopUp from "../DeletePopUp/DeletePopUp";

const MaterialLibrary = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [delOpen, setDelOpen] = useState(false)
  const navigate = useNavigate()

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleDelPopup = () => {
    setDelOpen(!delOpen)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://truad-dashboard-backend.onrender.com/api/getMaterial"
        );
        const datar = await response.json();
  
        const materials = datar.materials;
  
        console.log(datar);
        setData(materials);
  
        console.log("updated", data);
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, []);

  async function handleDelete(key) {
    const response = await fetch("https://truad-dashboard-backend.onrender.com/api/deleteMaterial", {
      method: "POST",
      body: JSON.stringify( {
        materialID : key
      }),
      headers: {
        "Content-Type" : "application/json"
      }
    })

    if(response.status == 404){
      console.log("Material not found")
      return 
    };

    if(response.status == 200){
      const filtered = data.filter((elem) => elem._id !== key)
      setData(filtered);
    }
  }

  return (
    <div className="material-container">
      {isOpen && <PopUp togglePopup={togglePopup} />}
      {delOpen && <DeletePopUp togglePopup={toggleDelPopup}/>}
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
        <div className="homepage-upload-btn" onClick={togglePopup}>
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
        <div className="material-cards">
          {data.length > 0 &&
            data.map((item) => (
              <div className="material-card">
                <img src={item.url}></img>
                <div className="material-card-title">
                  <p>{item.name}</p>
                </div>
                <div className="material-card-group">
                  <p>Material group: </p>
                  <a>{item.group}</a>
                  <p>Material size: </p>
                  <a>{item.size}</a>
                </div>
                <div className="material-card-btn">
                     <OprateDialog item={item}></OprateDialog>
                  <div className="material-card-delete-btn">
                    <img src={trash} onClick={toggleDelPopup}></img>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MaterialLibrary;
