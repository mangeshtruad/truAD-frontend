import React, { useState, useEffect } from "react";
import "./MaterialLibrary.css";
import dark_mode from "../../Assets/dark_mode.png";
import bell from "../../Assets/bell.png";
import info from "../../Assets/info.png";
import SearchIcon from "@mui/icons-material/Search";
import trash from "../../Assets/trash.png";
import PopUp from "../UploadMaterial/PopUp";
// import { useNavigate } from "react-router-dom";
import OprateDialog from "./OperateDialog";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import Loader from "../Loader/Loader";
import Notification from "../Notification/Notification";
import Information from "../Information/Information";
import Profile from "../Profile/Profile";

const MaterialLibrary = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [material, setMaterial] = useState([]);
  const [delOpen, setDelOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [openBox, setOpenBox] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const handleBoxToggle = (boxName) => {
    setOpenBox(openBox === boxName ? null : boxName); // Toggle the box visibility
  };

  // const navigate = useNavigate();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleDelPopup = () => {
    setDelOpen(!delOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://truad-backend.onrender.com/api/getMaterial"
        );
        const datar = await response.json();

        const materials = datar.materials;
        setMaterial(materials);
        setData(materials);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  const searchfilter = ({ target: { value } }) => {
    if (value !== "") {
      const arr = material.filter((el) => {
        return el.name.toLowerCase().includes(value.toLowerCase());
      });
      setData(arr);
    } else {
      setData(material);
    }
  };

  const itemSelect = (item) => {
    setSelectedItem(item);
    toggleDelPopup();
  };

  async function handleDelete(key) {
    const response = await fetch(
      "https://truad-backend.onrender.com/api/deleteMaterial",
      {
        method: "POST",
        body: JSON.stringify({
          materialID: key,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 404) {
      console.log("Material not found");
      return;
    }

    if (response.status === 200) {
      const filtered = data.filter((elem) => elem._id !== key);
      toggleDelPopup();
      setData(filtered);
    }
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="material-container">
          {isOpen && <PopUp togglePopup={togglePopup} />}
          {delOpen && (
            <DeletePopUp
              togglePopup={toggleDelPopup}
              handleDelete={handleDelete}
              item={selectedItem}
            />
          )}
          <div className="material-header">
            <div className="material-user-info">
              <h4>Material Management</h4>
            </div>
            <div className="material-searchbar">
              <div className="material-searchbar-container">
                <div className="material-searchbar-icons">
                  <div
                    className="material-searchbar-icons-notif"
                    style={{ position: "relative" }}
                  >
                    <img
                      src={bell}
                      alt=""
                      onClick={() => handleBoxToggle("notification")}
                    />
                    {openBox === "notification" && (
                      <Notification notifications={notifications} />
                    )}
                  </div>
                  <img src={dark_mode}></img>
                  <div
                    className="material-searchbar-icons-info"
                    style={{ position: "relative" }}
                  >
                    <img
                      src={info}
                      alt=""
                      onClick={() => handleBoxToggle("info")}
                    ></img>
                    {openBox === "info" && <Information />}
                  </div>
                  <div
                    className="material-profile"
                    style={{ position: "relative" }}
                  >
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                      onClick={() => handleBoxToggle("profile")}
                    ></img>
                    {openBox === "profile" && <Profile />}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row px-4 ps-1">
            <div class="col-6">
              <div class="row align-items-center">
                <div class="col-4">
                  <h5
                    className="dm-sans"
                    style={{ fontWeight: "bold", color: "white" }}
                  >
                    Material Library
                  </h5>
                </div>
                <div
                  class="col-8 resource-searchbar"
                  style={{ maxWidth: "250px" }}
                >
                  <div
                    class="input-group flex-nowrap overflow-hidden rounded-pill"
                    style={{ height: "30px" }}
                  >
                    <span class="input-group-text" id="addon-wrapping">
                      <SearchIcon />
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="search_bar"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                      onChange={(e) => searchfilter(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-8 text-end">
              {/* <button
                type="button"
                class="add_resource dm-sans"
                style={{ fontSize: "medium" }}
              >
                Add New Resource
              </button> */}
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
              {data?.length > 0 &&
                data?.map((item) => (
                  <div className="material-card">
                    <img src={item.url} alt=""></img>
                    <div className="material-card-title">
                      <p>{item.name}</p>
                    </div>
                    <div className="material-card-group">
                      <p>Material group: </p>
                      <a href={{}}>{item.group}</a>
                      <p>Material size: </p>
                      <a href={{}}>{item.size}</a>
                    </div>
                    <div className="material-card-btn">
                      <OprateDialog item={item}></OprateDialog>
                      <div className="material-card-delete-btn">
                        <img
                          src={trash}
                          onClick={() => itemSelect(item)}
                          alt=""
                        ></img>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MaterialLibrary;
