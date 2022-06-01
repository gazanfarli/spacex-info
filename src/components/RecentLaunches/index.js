import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Recents from "./Recents";
import Button from "../Button";

function RecentLaunches() {
  const [recentLaunches, setRecentLaunches] = useState();

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launches/past")
      .then(res => res.json())
      .then(data => {
        setRecentLaunches(data.slice(data.length - 5, data.length))
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="recent_launches">
      <div className="top">
        <h1>RECENT LAUNCHES</h1>
        <div className="show_more">
          <Link to="/launches" state={{past: true}}>
            <Button title="SHOW MORE" />
          </Link>
        </div>
      </div>
      <Recents recentLaunches={recentLaunches} />
    </div>
  );
}

export default RecentLaunches;
