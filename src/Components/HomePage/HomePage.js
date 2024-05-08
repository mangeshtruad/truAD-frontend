import React, { useState, useEffect } from "react";
import "./HomePage.css";
import dark_mode from "../../Assets/dark_mode.png";
import bell from "../../Assets/bell.png";
import info from "../../Assets/info.png";
import search from "../../Assets/search.png";
import more from "../../Assets/more.png";
import done from "../../Assets/done.png";
import pending from "../../Assets/pending.png";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PopUp from "../UploadMaterial/PopUp";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { responsive, responsive1, Carousel } from "../videosider";
import AIPopUp from "../AIDetection/AIPopUp";
import ProcessedPopUp from "../ProcessedPopUp/ProcessedPopUp";
import CallPopUp from "../CallPopUp/CallPopUp";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user", "userdata"]);
  const [items, setItems] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [processedClips, setProcessedClips] = useState([]);
  const [availOpen, setAvailOpen] = useState(false);
  const [selectedOngoingClip, setSelectedOngoingClip] = useState(null);
  const [selectedProcessedClip, setSelectedProcessedClip] = useState(null);
  const [processedOpen, setProcessedOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);

  const navigate = useNavigate();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const aiToggle = () => {
    setAvailOpen(!availOpen);
  };

  const processedToggle = () => {
    setProcessedOpen(!processedOpen);
  };

  const callToggle = () => {
    setCallOpen(!callOpen);
  };

  const ongoingClipSelect = (clip) => {
    setSelectedOngoingClip(clip);
    aiToggle();
  };

  const processedClipSelect = (clip) => {
    setSelectedProcessedClip(clip);
    processedToggle();
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          "https://truad-dashboard-backend.onrender.com/allItems",
          {
            method: "GET",
          }
        );

        const data = await response.json();

        const data2 = data.items.map((elem) => ({
          ...elem,
          location: elem.location.split("?AWS")[0],
          name: elem.name.split("upload/")[1],
        }));
        setItems(data2);
        const processed = data2.filter((elem) => elem.blendFile);
        const ongoingClips = data2.filter(
          (elem) => elem.blend && !elem.blendFile
        );
        setOngoing(ongoingClips);

        setProcessedClips(processed);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="homepage-container">
      {isOpen && <PopUp togglePopup={togglePopup} />}

      {availOpen && (
        <AIPopUp togglePopup={aiToggle} selectedClipId={selectedOngoingClip} />
      )}
      {processedOpen && (
        <ProcessedPopUp
          togglePopup={processedToggle}
          selectedClipId={selectedProcessedClip}
        />
      )}
      {callOpen && <CallPopUp togglePopup={callToggle} />}

      <div className="homepage-header">
        <div className="homepage-user-info">
          <p>{cookies.userdata.email}</p>
          <h4>Hi {cookies.userdata.username}</h4>
        </div>
        <div className="homepage-searchbar">
          <div className="homepage-searchbar-container">
            <div className="searchbar">
              <input type="text" placeholder="Search"></input>
              <img src={search} alt=""></img>
            </div>
            <div className="homepage-searchbar-icons">
              <img src={bell} alt=""></img>
              <img src={dark_mode} alt=""></img>
              <img src={info} alt=""></img>
              <div className="homepage-profile">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-info-container">
        <div className="homepage-info">
          <div className="homepage-infobox">
            <div className="homepage-infobox-icon">
              <CurrencyRupeeIcon />
            </div>
            <div className="homepage-infobox-info">
              <p>Payment Pending</p>
              <h4>32</h4>
            </div>
          </div>
        </div>
        <div className="homepage-info">
          <div className="homepage-infobox">
            <div className="homepage-infobox-icon">
              <CurrencyRupeeIcon />
            </div>
            <div className="homepage-infobox-info">
              <p>Cleared Invoices</p>
              <h4>89</h4>
            </div>
          </div>
        </div>
        <div className="homepage-call-btn" onClick={callToggle}>
          <div className="hompage-call-btnn-icon">
            <SupportAgentIcon />
          </div>
          <p>Call for Instant Support</p>
        </div>
        <div
          className="homepage-ticket-btn"
          onClick={() => navigate("/dashboard/raiseticket")}
        >
          <p>Have an Issue? Raise a ticket</p>
        </div>
        <div className="homepage-upload-btn" onClick={togglePopup}>
          <p>Upload New Materials</p>
        </div>
      </div>
      <div className="homepage-clips">
        <div className="clips-container">
          <p>Processed clips (2)</p>

          <Carousel showDots={false} responsive={responsive}>
            {processedClips.map((item) => (
              <div
                className="clip-container"
                key={item._id}
                onClick={() => processedClipSelect(item)}
              >
                <video autoPlay muted loop playsInline>
                  <source src={item.location} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="content">
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="clips-container">
          <p>AI detection ongoing (5)</p>
          <Carousel showDots={false} responsive={responsive}>
            {ongoing.map((item) => (
              <div className="clip-container" key={item._id} style={{}}>
                <video autoPlay muted loop playsInline>
                  <source src={item.location} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="content">
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="homepage-available-clips">
        <div className="available-clips-container">
          <p>Available content clips (5)</p>

          <Carousel
            showDots={false}
            responsive={responsive1}
            style={{ "&.react-multi-carousel-track": { gap: "1rem" } }}
          >
            {items.map((item) => (
              <div
                className="clip-container"
                key={item._id}
                style={{ width: "100%" }}
                onClick={() => {
                  ongoingClipSelect(item);
                }}
              >
                <video autoPlay muted loop playsInline>
                  <source src={item.location} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="content">
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="homepage-tickets-advertisements">
        <div className="homepage-tickets">
          <div className="homepage-tickets-header">
            <p>Tickets Raised (4)</p>
            <div className="more-btn">
              <img src={more} alt=""></img>
            </div>
          </div>
          <div className="homepage-tickets-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ticket 1</td>
                  <td>
                    <img src={pending} alt="" />
                    Pending
                  </td>
                  <td>18 Apr 2023</td>
                  <progress id="file" value="42" max="100">
                    {" "}
                    42%{" "}
                  </progress>
                </tr>
                <tr>
                  <td>Ticket 2</td>
                  <td>
                    <img src={pending} alt="" />
                    Pending
                  </td>
                  <td>22 April 2023</td>
                  <progress id="file" value="27" max="100">
                    {" "}
                    27%{" "}
                  </progress>
                </tr>
                <tr>
                  <td>Ticket 3</td>
                  <td>
                    <img src={pending} alt="" />
                    Pending
                  </td>
                  <td>12 Feb 2023</td>
                  <progress id="file" value="78" max="100">
                    {" "}
                    78%{" "}
                  </progress>
                </tr>
                <tr>
                  <td>Ticket 4</td>
                  <td>
                    <img src={done} alt="" />
                    Resolved
                  </td>
                  <td>15 Mar 2023</td>
                  <progress id="file" value="91" max="100">
                    {" "}
                    91%{" "}
                  </progress>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="homepage-tickets">
          <div className="homepage-tickets-header">
            <p>Clip Advertisements (4)</p>
            <div className="more-btn">
              <img src={more} alt=""></img>
            </div>
          </div>
          <div className="homepage-tickets-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Clip 1</td>
                  <td>
                    <img src={pending} alt="" />
                    Pending
                  </td>
                  <td>18 Apr 2023</td>
                  <progress id="file" value="42" max="100">
                    {" "}
                    42%{" "}
                  </progress>
                </tr>
                <tr>
                  <td>Clip 2</td>
                  <td>
                    <img src={pending} alt="" />
                    Pending
                  </td>
                  <td>22 April 2023</td>
                  <progress id="file" value="27" max="100">
                    {" "}
                    27%{" "}
                  </progress>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
