import React, { useEffect, useState } from "react";
import "./index.css";
import UpcomingItem from "./UpcomingItem";
import Button from "../Button";

function UpcomingLaunches() {
  const [upcomings, setUpcomings] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launches/upcoming")
      .then((res) => res.json())
      .then((data) => {
        setUpcomings(data.slice(0, 5));
      });
      window.scroll(0, 0)
  }, []);

  return (
    <div className="upcoming_launches">
      <h1>UPCOMING LAUNCHES</h1>
      <ul className="upcoming_list">
        {upcomings[0] !== undefined &&
          upcomings.map((item) => {
            return (
              <UpcomingItem upcoming_item={item} key={item.id} />
            );
          })}
      </ul>
      <div className="show_all">
        <Button title="SHOW ALL" />
      </div>
    </div>
  );
}

export default UpcomingLaunches;
