import React from "react";
import Button from "../Button";
import "./index.css";
import { Link } from "react-router-dom";
import {convertDate} from "../../Helpers/DateConverter";

function RecentLaunchItem({ recentLaunches }) {
  return (
    <div className="recents">
      {recentLaunches &&
        recentLaunches.map((item) => {

          return (
            <Link to="/launch" state={{data: item}} key={item.flight_number}>
            <div className="recent_item">
              <img className="recent_item_photo" src={item.links.patch.small} alt="recent_item_photo" />
              <h3>{item.name}</h3>
              <div className="date">{convertDate(item.date_unix)}</div>
                {
                  recentLaunches.success !== true ? 
                    <div className="success" style={{display: "flex", justifyContent: "space-between", padding: "1rem 2.5rem 1rem 2.5rem"}}>
                      <img style={{width: "2.5rem"}} src={require("../../assets/images/done.png")} alt="done" />
                      <img style={{width: "2.5rem"}} src={require("../../assets/images/space_shuttle.png")} alt="space_shuttle" />
                    </div>
                  : 
                  <div className="success" style={{display: "flex", justifyContent: "space-between", padding: "1rem 2.5rem 1rem 2.5rem"}}>
                    <img style={{width: "2.5rem"}} src={require("../../assets/images/failed.png")} alt="failed" />
                    <img style={{width: "2.5rem"}} src={require("../../assets/images/space_shuttle.png")} alt="space_shuttle" />
                  </div>
                }
              <div><Button title="SHOW DETAILS" /></div>
            </div>
            </Link>
          );
        })}
    </div>
  );
}

export default RecentLaunchItem;
