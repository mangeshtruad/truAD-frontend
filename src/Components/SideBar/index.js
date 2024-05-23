import React, { useEffect, useState } from "react";
import "./SideBar.css";
import Logomark from "../../Assets/Logomark.png";
import ItemList from "./itemList";
import { useCookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";

export default function SideBar() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  let location = useLocation();
  console.log(location.pathname);
  const [list, setlist] = useState(ItemList);
  useEffect(() => {
    // if (location.pathname !== "/") {
    navigate("/dashboard");
    // }
  }, []);
  const hendleClick = (index, el) => {
    const newlist = list.map((el, ind) => {
      if (ind === index) {
        el.isActive = true;
      } else {
        el.isActive = false;
      }
      return el;
    });
    setlist(newlist);
    navigate(el.targetLink);
  };
  return (
    <div style={{ height: "100%" }}>
      <main>
        <div className="logo">
          <img src={Logomark} alt="TruAd Logo" />
        </div>
        <ul className="list-sidebar">
          {list.map((el, index) => {
            return (
              <li
                key={index}
                className={el.isActive ? "active" : ""}
                onClick={() => hendleClick(index, el)}
              >
                <div className="listItem">
                  <div className="listItem_icon">{el.icon}</div>
                  <div className="listItem_text">{el.name}</div>
                </div>
              </li>
              // </Link>
            );
          })}
        </ul>
        <div className="signout_div">
          <button
            className="signout_button btn rounded-4 p-1.5"
            onClick={() => {
              removeCookie("user", { path: "/" });
              navigate("/");
            }}
          >
            Sign Out
          </button>
        </div>
      </main>
    </div>
  );
}
