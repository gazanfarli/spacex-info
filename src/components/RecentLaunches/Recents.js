import React from "react";
import Button from "../Button";
import "./index.css"

function RecentLaunchItem({ recentLaunches }) {
  recentLaunches && console.log(recentLaunches[0].links);
  return (
    <div className="recents">
      {recentLaunches &&
        recentLaunches.map((item) => {
          return (
            <div className="recent_item" key={item.flight_number}>
              <img src={item.links.patch.small} alt="recent_item_photo" />
              <h3>{item.name}</h3>
              <div className="recent_item_date">{item.date_utc}</div>
              <Button style={{width: "100%"}} className="recent_item_btn" title="SHOW DETAILS" />
            </div>
          );
        })}
    </div>
  );
}

export default RecentLaunchItem;
