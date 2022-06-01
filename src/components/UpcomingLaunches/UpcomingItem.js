import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { convertDate } from "../../Helpers/DateConverter";

function UpcomingItem({ upcoming_item, isUpcoming }) {
  const [rocket, setRocket] = useState("");
  const [launchpad, setLaunchpad] = useState("");

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v4/rockets/${upcoming_item.rocket}`)
      .then((res) => res.json())
      .then((data) => {
        setRocket(data);
      });

    fetch(`https://api.spacexdata.com/v4/launchpads/${upcoming_item.launchpad}`)
      .then((res) => res.json())
      .then((data) => {
        setLaunchpad(data);
      });
  }, [upcoming_item.launchpad, upcoming_item.rocket]);


  return (
    <Link key={upcoming_item.id} to='/launch' state={{data: upcoming_item, isUpcoming: isUpcoming}}>
      <li className="upcoming_item">
        <div className="top">
          <span className="name">{upcoming_item.name}</span>
          <span className="flight_number">#{upcoming_item.flight_number}</span>
        </div>
        <div className="date">{convertDate(upcoming_item.date_unix)}</div>
        <div className="upcoming_item_info">
          <ul>
            <li className="title">ROCKET:</li>
            <li className="title">COUNTRY:</li>
          </ul>
          <ul className="info">
            <li>{rocket.name}</li>
            <li>{rocket.country}</li>
          </ul>
          <ul className="launch_site">
            <li className="title">LAUNCH SITE:</li>
            <li>{launchpad.full_name}</li>
          </ul>
        </div>
        <img
          loading="lazy"
          className="flag"
          src={`https://countryflagsapi.com/png/${rocket.country}`}
          alt="country_flag"
        />
      </li>
    </Link>
  );
}

export default UpcomingItem;
