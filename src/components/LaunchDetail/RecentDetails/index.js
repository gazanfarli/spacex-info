import React from 'react';
import "../index.css";
import Details from "../Details";
import noImage from "../../../assets/images/noImage.png";

function RecentDetails({state, launchSite, rocket, isUpcoming}) {
  return (
        <div className="recent_launch_details">
        {state.data.links.patch.small !== null ? (
          <img
            id="rocket_logo"
            src={state.data.links.patch.small}
            alt="recent_item_photo"
          />
        ) : (
          <img
            id="rocket_logo"
            style={{ width: "14rem", height: "14rem", marginRight: "2rem" }}
            src={noImage}
            alt="noImage"
          />
        )}

        <Details state={state} launchSite={launchSite} rocket={rocket} isUpcoming={isUpcoming} />

      </div>
  )
}

export default RecentDetails