import React, { useEffect, useState } from "react";
import "./index.css";
import UpcomingItem from "./UpcomingItem";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

function UpcomingLaunches() {
  const [upcomings, setUpcomings] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://api.spacexdata.com/v4/launches/upcoming")
    .then(res => {
      setUpcomings(res.data.slice(0, 5));
        dispatch({type: "GET_UPCOMING_LAUNCHES", payload: res.data})
  })
  }, [dispatch]);

  return (
    <div className="upcoming_launches">
      <h1>UPCOMING LAUNCHES</h1>
      <ul className="upcoming_list">
        {upcomings[0] !== undefined &&
          upcomings.map((item) => {
            return (
              <UpcomingItem upcoming_item={item} key={item.id} isUpcoming={true} />
            );
          })}
      </ul>
      <div className="show_all">
        <Link to="/launches" state={{past: false}}>
          <Button title="SHOW ALL" />
        </Link>
      </div>
    </div>
  );
}

export default UpcomingLaunches;
