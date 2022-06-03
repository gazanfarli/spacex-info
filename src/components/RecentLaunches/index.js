import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Recents from "./Recents";
import Button from "../Button";
import axios from "axios";

function RecentLaunches() {
  const [recentLaunches, setRecentLaunches] = useState();

  useEffect(() => {
    axios.get("https://api.spacexdata.com/v4/launches/past")
    .then(res => setRecentLaunches(res.data.slice(res.data.length - 5, res.data.length)))
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
