import React, { useState } from "react";
import "./MaterialLibrary.css";
import dark_mode from "../../Assets/dark_mode.png";
import bell from "../../Assets/bell.png";
import info from "../../Assets/info.png";
import search from "../../Assets/search.png";
import trash from "../../Assets/trash.png"
import PopUp from "../UploadMaterial/PopUp";

const MaterialLibrary = () => {
    const [isOpen, setIsOpen] = useState(false)

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className="material-container">
        {isOpen && (
            <PopUp togglePopup={togglePopup}/>
        )}
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
            <div className="material-card">
                <img src="https://s3-alpha-sig.figma.com/img/ee23/d584/acf93a85cb33e8bf45f30510876a8621?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XcDBx4t6K~VpFaKLGbbO1UTVf~GfKI-ZyBSZ-zpZtuQ-JkRJ-bgR2PEDlYddnBoklVSr6Ycm5JvCT61IPKfJ2dPXIvul~lkJFvIo6R1NARDB9khroXzEE0uTHH10vJsbhW2APdPbotyPAqO7KJXJ4E-9vJBzE-VS6w22k66usfDAvu3ZJvyb0MQe5Osxa6QeSHMUBiD0qWXPqRsctBB1SDWcNYNt7J0RWFxdGt1hIkq0yRF4cDZojsdwsDcpAAOypEZPCukrcm8~Zb-EEKWXQbthLDyscwmC5TsFDC16D00gb2A89vsGr~HFaZ6hJAaJbdgKY-pC1WdAnb6WagQV~A"></img>
                <div className="material-card-title">
                    <p>Coca Cola</p>
                </div>
                <div className="material-card-group">
                    <p>Material group: </p><a>TV</a>
                    <p>Material size: </p><a>16:9</a>
                </div>
                <div className="material-card-btn">
                    <div className="material-card-operate-btn">
                        <p>Operate</p>
                    </div>
                    <div className="material-card-delete-btn">
                        <img src={trash}></img>
                    </div>
                </div>
            </div>
            <div className="material-card">
                <img src="https://s3-alpha-sig.figma.com/img/ee23/d584/acf93a85cb33e8bf45f30510876a8621?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XcDBx4t6K~VpFaKLGbbO1UTVf~GfKI-ZyBSZ-zpZtuQ-JkRJ-bgR2PEDlYddnBoklVSr6Ycm5JvCT61IPKfJ2dPXIvul~lkJFvIo6R1NARDB9khroXzEE0uTHH10vJsbhW2APdPbotyPAqO7KJXJ4E-9vJBzE-VS6w22k66usfDAvu3ZJvyb0MQe5Osxa6QeSHMUBiD0qWXPqRsctBB1SDWcNYNt7J0RWFxdGt1hIkq0yRF4cDZojsdwsDcpAAOypEZPCukrcm8~Zb-EEKWXQbthLDyscwmC5TsFDC16D00gb2A89vsGr~HFaZ6hJAaJbdgKY-pC1WdAnb6WagQV~A"></img>
                <div className="material-card-title">
                    <p>Coca Cola</p>
                </div>
                <div className="material-card-group">
                    <p>Material group: </p><a>TV</a>
                    <p>Material size: </p><a>16:9</a>
                </div>
                <div className="material-card-btn">
                    <div className="material-card-operate-btn">
                        <p>Operate</p>
                    </div>
                    <div className="material-card-delete-btn">
                        <img src={trash}></img>
                    </div>
                </div>
            </div>
            <div className="material-card">
                <img src="https://s3-alpha-sig.figma.com/img/ee23/d584/acf93a85cb33e8bf45f30510876a8621?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XcDBx4t6K~VpFaKLGbbO1UTVf~GfKI-ZyBSZ-zpZtuQ-JkRJ-bgR2PEDlYddnBoklVSr6Ycm5JvCT61IPKfJ2dPXIvul~lkJFvIo6R1NARDB9khroXzEE0uTHH10vJsbhW2APdPbotyPAqO7KJXJ4E-9vJBzE-VS6w22k66usfDAvu3ZJvyb0MQe5Osxa6QeSHMUBiD0qWXPqRsctBB1SDWcNYNt7J0RWFxdGt1hIkq0yRF4cDZojsdwsDcpAAOypEZPCukrcm8~Zb-EEKWXQbthLDyscwmC5TsFDC16D00gb2A89vsGr~HFaZ6hJAaJbdgKY-pC1WdAnb6WagQV~A"></img>
                <div className="material-card-title">
                    <p>Coca Cola</p>
                </div>
                <div className="material-card-group">
                    <p>Material group: </p><a>TV</a>
                    <p>Material size: </p><a>16:9</a>
                </div>
                <div className="material-card-btn">
                    <div className="material-card-operate-btn">
                        <p>Operate</p>
                    </div>
                    <div className="material-card-delete-btn">
                        <img src={trash}></img>
                    </div>
                </div>
            </div>
            <div className="material-card">
                <img src="https://s3-alpha-sig.figma.com/img/ee23/d584/acf93a85cb33e8bf45f30510876a8621?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XcDBx4t6K~VpFaKLGbbO1UTVf~GfKI-ZyBSZ-zpZtuQ-JkRJ-bgR2PEDlYddnBoklVSr6Ycm5JvCT61IPKfJ2dPXIvul~lkJFvIo6R1NARDB9khroXzEE0uTHH10vJsbhW2APdPbotyPAqO7KJXJ4E-9vJBzE-VS6w22k66usfDAvu3ZJvyb0MQe5Osxa6QeSHMUBiD0qWXPqRsctBB1SDWcNYNt7J0RWFxdGt1hIkq0yRF4cDZojsdwsDcpAAOypEZPCukrcm8~Zb-EEKWXQbthLDyscwmC5TsFDC16D00gb2A89vsGr~HFaZ6hJAaJbdgKY-pC1WdAnb6WagQV~A"></img>
                <div className="material-card-title">
                    <p>Coca Cola</p>
                </div>
                <div className="material-card-group">
                    <p>Material group: </p><a>TV</a>
                    <p>Material size: </p><a>16:9</a>
                </div>
                <div className="material-card-btn">
                    <div className="material-card-operate-btn">
                        <p>Operate</p>
                    </div>
                    <div className="material-card-delete-btn">
                        <img src={trash}></img>
                    </div>
                </div>
            </div>
            <div className="material-card">
                <img src="https://s3-alpha-sig.figma.com/img/ee23/d584/acf93a85cb33e8bf45f30510876a8621?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XcDBx4t6K~VpFaKLGbbO1UTVf~GfKI-ZyBSZ-zpZtuQ-JkRJ-bgR2PEDlYddnBoklVSr6Ycm5JvCT61IPKfJ2dPXIvul~lkJFvIo6R1NARDB9khroXzEE0uTHH10vJsbhW2APdPbotyPAqO7KJXJ4E-9vJBzE-VS6w22k66usfDAvu3ZJvyb0MQe5Osxa6QeSHMUBiD0qWXPqRsctBB1SDWcNYNt7J0RWFxdGt1hIkq0yRF4cDZojsdwsDcpAAOypEZPCukrcm8~Zb-EEKWXQbthLDyscwmC5TsFDC16D00gb2A89vsGr~HFaZ6hJAaJbdgKY-pC1WdAnb6WagQV~A"></img>
                <div className="material-card-title">
                    <p>Coca Cola</p>
                </div>
                <div className="material-card-group">
                    <p>Material group: </p><a>TV</a>
                    <p>Material size: </p><a>16:9</a>
                </div>
                <div className="material-card-btn">
                    <div className="material-card-operate-btn">
                        <p>Operate</p>
                    </div>
                    <div className="material-card-delete-btn">
                        <img src={trash}></img>
                    </div>
                </div>
            </div>
            <div className="material-card">
                <img src="https://s3-alpha-sig.figma.com/img/ee23/d584/acf93a85cb33e8bf45f30510876a8621?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XcDBx4t6K~VpFaKLGbbO1UTVf~GfKI-ZyBSZ-zpZtuQ-JkRJ-bgR2PEDlYddnBoklVSr6Ycm5JvCT61IPKfJ2dPXIvul~lkJFvIo6R1NARDB9khroXzEE0uTHH10vJsbhW2APdPbotyPAqO7KJXJ4E-9vJBzE-VS6w22k66usfDAvu3ZJvyb0MQe5Osxa6QeSHMUBiD0qWXPqRsctBB1SDWcNYNt7J0RWFxdGt1hIkq0yRF4cDZojsdwsDcpAAOypEZPCukrcm8~Zb-EEKWXQbthLDyscwmC5TsFDC16D00gb2A89vsGr~HFaZ6hJAaJbdgKY-pC1WdAnb6WagQV~A"></img>
                <div className="material-card-title">
                    <p>Coca Cola</p>
                </div>
                <div className="material-card-group">
                    <p>Material group: </p><a>TV</a>
                    <p>Material size: </p><a>16:9</a>
                </div>
                <div className="material-card-btn">
                    <div className="material-card-operate-btn">
                        <p>Operate</p>
                    </div>
                    <div className="material-card-delete-btn">
                        <img src={trash}></img>
                    </div>
                </div>
            </div>
            <div className="material-card">
                <img src="https://s3-alpha-sig.figma.com/img/ee23/d584/acf93a85cb33e8bf45f30510876a8621?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XcDBx4t6K~VpFaKLGbbO1UTVf~GfKI-ZyBSZ-zpZtuQ-JkRJ-bgR2PEDlYddnBoklVSr6Ycm5JvCT61IPKfJ2dPXIvul~lkJFvIo6R1NARDB9khroXzEE0uTHH10vJsbhW2APdPbotyPAqO7KJXJ4E-9vJBzE-VS6w22k66usfDAvu3ZJvyb0MQe5Osxa6QeSHMUBiD0qWXPqRsctBB1SDWcNYNt7J0RWFxdGt1hIkq0yRF4cDZojsdwsDcpAAOypEZPCukrcm8~Zb-EEKWXQbthLDyscwmC5TsFDC16D00gb2A89vsGr~HFaZ6hJAaJbdgKY-pC1WdAnb6WagQV~A"></img>
                <div className="material-card-title">
                    <p>Coca Cola</p>
                </div>
                <div className="material-card-group">
                    <p>Material group: </p><a>TV</a>
                    <p>Material size: </p><a>16:9</a>
                </div>
                <div className="material-card-btn">
                    <div className="material-card-operate-btn">
                        <p>Operate</p>
                    </div>
                    <div className="material-card-delete-btn">
                        <img src={trash}></img>
                    </div>
                </div>
            </div>
            <div className="material-card">
                <img src="https://s3-alpha-sig.figma.com/img/ee23/d584/acf93a85cb33e8bf45f30510876a8621?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XcDBx4t6K~VpFaKLGbbO1UTVf~GfKI-ZyBSZ-zpZtuQ-JkRJ-bgR2PEDlYddnBoklVSr6Ycm5JvCT61IPKfJ2dPXIvul~lkJFvIo6R1NARDB9khroXzEE0uTHH10vJsbhW2APdPbotyPAqO7KJXJ4E-9vJBzE-VS6w22k66usfDAvu3ZJvyb0MQe5Osxa6QeSHMUBiD0qWXPqRsctBB1SDWcNYNt7J0RWFxdGt1hIkq0yRF4cDZojsdwsDcpAAOypEZPCukrcm8~Zb-EEKWXQbthLDyscwmC5TsFDC16D00gb2A89vsGr~HFaZ6hJAaJbdgKY-pC1WdAnb6WagQV~A"></img>
                <div className="material-card-title">
                    <p>Coca Cola</p>
                </div>
                <div className="material-card-group">
                    <p>Material group: </p><a>TV</a>
                    <p>Material size: </p><a>16:9</a>
                </div>
                <div className="material-card-btn">
                    <div className="material-card-operate-btn">
                        <p>Operate</p>
                    </div>
                    <div className="material-card-delete-btn">
                        <img src={trash}></img>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialLibrary;
