import React from "react";
import dark_mode from "../../Assets/dark_mode.png";
import bell from "../../Assets/bell.png";
import info from "../../Assets/info.png";
import search from "../../Assets/search.png";
import more from "../../Assets/more.png";
import done from "../../Assets/done.png";
import chart from "../../Assets/chart.png";
import pending from "../../Assets/pending.png";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import WidgetsIcon from '@mui/icons-material/Widgets';
import "./Analytics.css";
import BarGraph from "./Charts/BarGraph";
import Piechart from "./Charts/PieChart";
import { useCookies } from "react-cookie";

const Analytics = () => {
  const [cookies, setCookie] = useCookies(["user", 'userdata'])
 
  return (
    <div className="analytics-container">
      <div className="analytics-header">
        <div className="analytics-user-info">
          <p>{cookies.userdata.email}</p>
          <h4>Hi {cookies.userdata.username}</h4>
        </div>
        <div className="analytics-searchbar">
          <div className="analytics-searchbar-container">
            <div className="searchbar">
              <input type="text" placeholder="Search"></input>
              <img src={search}></img>
            </div>
            <div className="analytics-searchbar-icons">
              <img src={bell}></img>
              <img src={dark_mode}></img>
              <img src={info}></img>
              <div className="analytics-profile">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="analytics-info-container">
        <div className="analytics-info">
          <div className="analytics-infobox">
            <div className="analytics-infobox-icon">
              <PlayCircleOutlineIcon />
            </div>
            <div className="analytics-infobox-info">
              <p>Total Uploaded Videos</p>
              <h4>28</h4>
            </div>
          </div>
        </div>
        <div className="analytics-info">
          <div className="analytics-infobox">
            <div className="analytics-infobox-icon">
              <WidgetsIcon />
            </div>
            <div className="analytics-infobox-info">
              <p>Total Number of Objects</p>
              <h4>142</h4>
            </div>
          </div>
        </div>
        <div className="analytics-info">
          <div className="analytics-infobox">
            <div className="analytics-infobox-icon">
              <PlayCircleOutlineIcon />
            </div>
            <div className="analytics-infobox-info">
              <p>Total Blend Videos</p>
              <h4>130</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="analytics-tickets-advertisements">
        <div className="analytics-tickets">
          <div className="analytics-tickets-header">
            <p>Recent Sales</p>
            <a>See All</a>
          </div>
          <div className="analytics-sales-table">
            <table>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Price</th>
                <th>Progress</th>
              </tr>
              <tr>
                <td>2440</td>
                <td>Brendon Jacob</td>
                <td>aniketm@truad.co</td>
                <td>Rs. 128000</td>
                <progress id="file" value="42" max="100">
                  {" "}
                  42%{" "}
                </progress>
              </tr>
              <tr>
              <td>2441</td>
                <td>Brendon Jacob</td>
                <td>aniketm@truad.co</td>
                <td>Rs. 128000</td>
                <progress id="file" value="42" max="100">
                  {" "}
                  42%{" "}
                </progress>
              </tr>
              <tr>
              <td>2442</td>
                <td>Brendon Jacob</td>
                <td>aniketm@truad.co</td>
                <td>Rs. 128000</td>
                <progress id="file" value="42" max="100">
                  {" "}
                  42%{" "}
                </progress>
              </tr>
              <tr>
              <td>2443</td>
                <td>Brendon Jacob</td>
                <td>aniketm@truad.co</td>
                <td>Rs. 128000</td>
                <progress id="file" value="42" max="100">
                  {" "}
                  42%{" "}
                </progress>
              </tr>
            </table>
          </div>
        </div>
        <div className="analytics-tickets">
          <div className="analytics-tickets-header">
            <p>Clip Advertisements (4)</p>
            <div className="more-btn">
              <img src={more}></img>
            </div>
          </div>
          <div className="analytics-tickets-table">
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
      <div className="analytics-tickets-advertisements">
        <div className="analytics-tickets">
          <div className="analytics-tickets-header">
            <p>Top Selling Objects</p>
            <div className="more-btn">
              <img src={more}></img>
            </div>
          </div>
          <div className="analytics-tickets-table">
            <table>
              <tr>
                <th>Product</th>
                <th>Prize</th>
                <th>Sold</th>
                <th>Size</th>
              </tr>
              <tr>
                <td><img src='https://cdn1.smartprix.com/rx-iUUPXZPdc-w420-h420/lenovo-ideapad-slim.webp' /> Lenovo i5</td>
                <td>39</td>
                <td>22</td>
                <td>16:9</td>
              </tr>
              <tr>
                <td><img src='https://cdn1.smartprix.com/rx-iUUPXZPdc-w420-h420/lenovo-ideapad-slim.webp' /> Lenovo i5</td>
                <td>39</td>
                <td>22</td>
                <td>16:9</td>
              </tr>
              <tr>
                <td><img src='https://cdn1.smartprix.com/rx-iUUPXZPdc-w420-h420/lenovo-ideapad-slim.webp' /> Lenovo i5</td>
                <td>39</td>
                <td>22</td>
                <td>16:9</td>
              </tr>
              <tr>
                <td><img src='https://cdn1.smartprix.com/rx-iUUPXZPdc-w420-h420/lenovo-ideapad-slim.webp' /> Lenovo i5</td>
                <td>39</td>
                <td>22</td>
                <td>16:9</td>
              </tr>
              <tr>
                <td><img src='https://cdn1.smartprix.com/rx-iUUPXZPdc-w420-h420/lenovo-ideapad-slim.webp' /> Lenovo i5</td>
                <td>39</td>
                <td>22</td>
                <td>16:9</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="analytics-charts">
            <div className="analytics-charts-results">
                <p>Results</p>
                <div className="chart-container">
                    <BarGraph />
                </div>
            </div>
            <div className="analytics-charts-results">
                <p>Your Pie Chart</p>
                <div className="chart-container">
                    <Piechart />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
