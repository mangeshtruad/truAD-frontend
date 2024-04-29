import React, { useState } from "react";
import "./SideBar.css";
import TruAdlogo from "../../logo/Logo.png";
import ItemList from "./itemList";

export default function SideBar() {
  const[list, setlist]=useState(ItemList)
  const hendleClick=(index)=>{
    const newlist=list.map((el,ind)=>{
      if(ind===index){
        el.isActive=true
      }else{
        el.isActive=false
      }
      return el;
    })
    setlist(newlist);
  }
  return (
    <div style={{ height: "100%" }}>
      <main>
        <div className="logo">
          <img src={TruAdlogo} alt="TruAd Logo" width={"50%"} />
        </div>
        <ul className="list-sidebar">
          {list.map((el, index) => {
            return (
              <li key={index} className={(el.isActive)?"active":""} onClick={()=>hendleClick(index)}>
                <div className="listItem">
                  <div className="listItem_icon">{el.icon}</div>
                  <div className="listItem_text">{el.name}</div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="signout_div">
          <button className="signout_button btn rounded-4 p-1.5">
            Sign Out
          </button>
        </div>
      </main>
    </div>
  );
}
