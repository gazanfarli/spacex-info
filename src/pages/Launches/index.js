import React, { useState } from "react";
import "./index.css";
import Latest from "./Latest";
import Upcomings from "./Upcomings";
import Past from "./Past";

function Launches() {
  const [category, setCategory] = useState("upcoming");

  const onClickHandler = (e) => {
    setCategory(e.target.value);
  }

  return (
    <div className="launches">
      <Latest />
      <div className="launches_list">
        <select onClick={onClickHandler} className="launches_selection select">
          <option className="select" value="upcoming">UPCOMING LAUNCHES</option>
          <option className="select" value="past">PAST LAUNCHES</option>
        </select>
        <div className="launch_items">
          {
            category === "upcoming" &&
            <Upcomings />
          }
          {
            category === "past" &&
            <Past />
          }
        </div>
      </div>
      <div style={{color: "black"}}>doodle</div>
    </div>
  );
}

export default Launches;
