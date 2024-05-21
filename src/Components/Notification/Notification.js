import React from "react";
import "./Notification.css";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";

const obj = {_id: '6638c593e1c72c513e6fdbbf', name: 'popat_splits/split_video_2.mp4', parent: '6638c56ee1c72c513e6fdbbb', location: 'https://videotruad.s3.ap-south-1.amazonaws.com/split_video_2.mp4', blend: true,}
const Notification = ({notifications}) => {
  const navigate = useNavigate()

  console.log(notifications)
    return (
    <div className="notification-box">
      <p>{notifications.length === 0 ? 'No new notifications' : `New ${notifications.length} Notifications`}</p>
      <div className="notification-divider"></div>
      {/* Add more notification items here */}
      {notifications && notifications.map((notif) => (
        <div className="notifications">
        <div className="notification" onClick={() => navigate('/dashboard/actionpage', {state: {location: obj}})}>
          <h6>{notif.title}</h6>
          <p><Moment fromNow={notif.createdAt} /></p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Notification;
