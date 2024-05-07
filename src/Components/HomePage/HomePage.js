import React, { useState, useEffect } from "react";
import "./HomePage.css";
import dark_mode from "../../Assets/dark_mode.png";
import bell from "../../Assets/bell.png";
import info from "../../Assets/info.png";
import search from "../../Assets/search.png";
import more from "../../Assets/more.png";
import done from "../../Assets/done.png";
import chart from "../../Assets/chart.png";
import pending from "../../Assets/pending.png";
import BarChartIcon from "@mui/icons-material/BarChart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PopUp from "../UploadMaterial/PopUp";
import AIPopUp from "../AIDetection/AIPopUp";
import ProcessedPopUp from "../ProcessedPopUp/ProcessedPopUp";
import { CookiesProvider, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user", "userdata"]);
  const [items, setItems] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [processedClips, setProcessedClips] = useState([]);
  const [index, setIndex] = useState(0);
  const [availOpen, setAvailOpen] = useState(false)
  const [selectedOngoingClip, setSelectedOngoingClip] = useState(null);
const [selectedProcessedClip, setSelectedProcessedClip] = useState(null)
  const [processedOpen, setProcessedOpen] = useState(false)
  const navigate = useNavigate();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const aiToggle = () => {
    setAvailOpen(!availOpen)
  }

  const processedToggle = () => {
    setProcessedOpen(!processedOpen)
  }

  const ongoingClipSelect = (clip) => {
    setSelectedOngoingClip(clip);
    aiToggle()
  }

  const processedClipSelect = (clip) => {
    setSelectedProcessedClip(clip);
    processedToggle()
  }

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
        // const data2 = data.items.map((item) => item.location.split("?AWS")[0]);
        const data2 = data.items.map((elem) => ({
          ...elem,
          location: elem.location.split("?AWS")[0],
          name: elem.name.split("upload/")[1],
        }));
        setItems(data2.slice(0, 4));
        const processed = data2.filter((elem) => elem.blendFile);
        const ongoingClips = data2.filter(
          (elem) => elem.blend && !elem.blendFile
        );
        setOngoing(ongoingClips);
        console.log("ongoing", ongoing);
        setProcessedClips(processed.slice(0, 2));
        console.log("processed", processedClips);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="homepage-container">
      {isOpen && <PopUp togglePopup={togglePopup} />}
      {availOpen && <AIPopUp togglePopup={aiToggle} selectedClipId={selectedOngoingClip}/>}
      {processedOpen && <ProcessedPopUp togglePopup={processedToggle} selectedClipId={selectedProcessedClip}/>}
      <div className="homepage-header">
        <div className="homepage-user-info">
          <p>{cookies.userdata.email}</p>
          <h4>Hi {cookies.userdata.username}</h4>
        </div>
        <div className="homepage-searchbar">
          <div className="homepage-searchbar-container">
            <div className="searchbar">
              <input type="text" placeholder="Search"></input>
              <img src={search}></img>
            </div>
            <div className="homepage-searchbar-icons">
              <img src={bell}></img>
              <img src={dark_mode}></img>
              <img src={info}></img>
              <div className="homepage-profile">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-info-container">
        <div className="homepage-info">
          <div className="homepage-infobox">
            <div className="homepage-infobox-icon">
              <BarChartIcon />
            </div>
            <div className="homepage-infobox-info">
              <p>Total Invoices</p>
              <h4>121</h4>
            </div>
          </div>
        </div>
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
        <div
          className="homepage-ticket-btn"
          onClick={() => navigate("/dashboard/raise")}
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
          <div className="clips-row">
            {processedClips.map((item) => (
              <div className="clip-container" key={item._id} onClick={() => processedClipSelect(item)}>
                <video autoPlay muted loop playsInline>
                  <source src={item.location} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="content">
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="clips-container">
          <p>AI detection ongoing (5)</p>
          {/* <div className="clips-row">
            {ongoing.map((item) => (
              <div className="clip-container">
                <video autoPlay muted loop playsInline>
                  <source src={item.location} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="content">
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
            <button onClick={() => setIndex((prev)=> prev + 1)}>Next</button>
          </div> */}
          <div className="clips-row">
            <div className="clip-container">
              <video autoPlay muted loop playsInline>
                <source src={ongoing[index]?.location} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="content">
                <p>{ongoing[index]?.name}</p>
              </div>
            </div>
            {index < ongoing.length ? (
              <div className="clip-container">
                <video autoPlay muted loop playsInline>
                  <source src={ongoing[index + 1]?.location} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="content">
                  <p>{ongoing[index + 1]?.name}</p>
                </div>
              </div>
            ) : null}
            <button onClick={() => setIndex((prev) => prev + 1)}>Next</button>
          </div>
        </div>
      </div>
      <div className="homepage-available-clips">
        <div className="available-clips-container">
          <p>Available content clips (5)</p>
          <div className="available-clips-row">
            {items.map((item) => (
              <div className="available-clip-container" onClick={() => {ongoingClipSelect(item)}}>
                <video autoPlay muted loop playsInline>
                  <source src={item.location} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="available-content">
                  <p>{item.name}</p>
                </div>
                {/* {availOpen && <AIPopUp togglePopup={aiToggle} item={item} selectedClipId={selectedClipId} />} */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="homepage-tickets-advertisements">
        <div className="homepage-tickets">
          <div className="homepage-tickets-header">
            <p>Tickets Raised (4)</p>
            <div className="more-btn">
              <img src={more}></img>
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
                    <img src={pending} />
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
                    <img src={pending} />
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
                    <img src={pending} />
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
                    <img src={done} />
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
              <img src={more}></img>
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
                    <img src={pending} />
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
                    <img src={pending} />
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
