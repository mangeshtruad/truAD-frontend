import React from "react";
import "./Notification.css";
import { useNavigate } from "react-router-dom";

const obj = {_id: '6638c593e1c72c513e6fdbbf', name: 'popat_splits/split_video_2.mp4', parent: '6638c56ee1c72c513e6fdbbb', location: 'https://videotruad.s3.ap-south-1.amazonaws.com/split_video_2.mp4', blend: true,}
const Notification = () => {
  const navigate = useNavigate()
    return (
    <div className="notification-box">
      <p>No new notifications</p>
      <div className="notification-divider"></div>
      {/* Add more notification items here */}
      <div className="notifications">
        <div className="notification" onClick={() => navigate('/dashboard/actionpage', {state: {location: obj}})}>
          <h6>PopatLal Split: 6 Proceess</h6>
          <p>10 Hours ago</p>
        </div>
        <div className="notification">
          <h6>PopatLal Split: 6 Proceess</h6>
          <p>10 Hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
