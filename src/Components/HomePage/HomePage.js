import React, { useState } from "react";
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

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="homepage-container">
      {isOpen && (
        <PopUp togglePopup={togglePopup}/>
      )}
      <div className="homepage-header">
        <div className="homepage-user-info">
          <p>aniketm@truad.co</p>
          <h4>Hi Aniket</h4>
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
        <div className="homepage-ticket-btn">
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
            <div className="clip-container">
              <video autoplay muted loop playsinline>
                <source
                  src="https://videotruad.s3.ap-south-1.amazonaws.com/split_video_3.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div class="content">
                <p>Colorful Heaven</p>
              </div>
            </div>
            <div className="clip-container">
              <video autoplay muted loop playsinline>
                <source
                  src="https://videotruad.s3.ap-south-1.amazonaws.com/split_video_3.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div class="content">
                <p>Colorful Heaven</p>
              </div>
            </div>
          </div>
        </div>
        <div className="clips-container">
          <p>AI detection ongoing (5)</p>
          <div className="clips-row">
            <div className="clip-container">
              <video autoplay muted loop playsinline>
                <source
                  src="https://videotruad.s3.ap-south-1.amazonaws.com/split_video_3.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div class="content">
                <p>Colorful Heaven</p>
              </div>
            </div>
            <div className="clip-container">
              <video autoplay muted loop playsinline>
                <source
                  src="https://videotruad.s3.ap-south-1.amazonaws.com/split_video_3.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div class="content">
                <p>Colorful Heaven</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-available-clips">
        <div className="available-clips-container">
          <p>Available content clips (5)</p>
          <div className="available-clips-row">
            <div className="available-clip-container">
              <video autoplay muted loop playsinline>
                <source
                  src="https://videotruad.s3.ap-south-1.amazonaws.com/split_video_3.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div class="available-content">
                <p>Colorful Heaven</p>
              </div>
            </div>
            <div className="available-clip-container">
              <video autoplay muted loop playsinline>
                <source
                  src="https://videotruad.s3.ap-south-1.amazonaws.com/split_video_3.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div class="available-content">
                <p>Colorful Heaven</p>
              </div>
            </div>
            <div className="available-clip-container">
              <video autoplay muted loop playsinline>
                <source
                  src="https://videotruad.s3.ap-south-1.amazonaws.com/split_video_3.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div class="available-content">
                <p>Colorful Heaven</p>
              </div>
            </div>
            <div className="available-clip-container">
              <video autoplay muted loop playsinline>
                <source
                  src="https://videotruad.s3.ap-south-1.amazonaws.com/split_video_3.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div class="available-content">
                <p>Colorful Heaven</p>
              </div>
            </div>
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
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Date</th>
                <th>Progress</th>
              </tr>
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
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Date</th>
                <th>Progress</th>
              </tr>
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
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
