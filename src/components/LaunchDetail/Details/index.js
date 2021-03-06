import React from "react";
import "../index.css";
import { convertDate } from "../../../Helpers/DateConverter"

function Details({ state, launchSite, rocket, isUpcoming }) {
  return (
    <div className="details">
      <h3>{state.data.name}</h3>
      <div className="date">{convertDate(state.data.date_unix)}</div>
      <div className="details_lists">
        <ul className="details_titles">
          <li>ROCKET:</li>
          <li>LAUNCH SITE:</li>
          {!isUpcoming && (
            <li style={{ marginTop: "1.2rem" }}>MISSION STATUS:</li>
          )}
        </ul>
        <ul className="details_values">
          <li className="rocket_name">{rocket.name}</li>
          <li>{launchSite !== null ? launchSite : "UNKNOWN"}</li>
          {!isUpcoming && (
            <li style={{padding: "0"}}>
              {state.data.success ? (
                <div
                  className="success"
                  style={{
                    width: "30%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    style={{ width: "2.5rem" }}
                    src={require("../../../assets/images/done.png")}
                    alt="done"
                  />
                  <img
                    style={{ width: "2.5rem" }}
                    src={require("../../../assets/images/space_shuttle.png")}
                    alt="space_shuttle"
                  />
                </div>
              ) : (
                !isUpcoming && (
                  <div
                    className="success"
                    style={{
                      width: "30%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <img
                      style={{ width: "2.5rem" }}
                      src={require("../../../assets/images/failed.png")}
                      alt="failed"
                    />
                    <img
                      style={{ width: "2.5rem" }}
                      src={require("../../../assets/images/space_shuttle.png")}
                      alt="space_shuttle"
                    />
                  </div>
                )
              )}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Details;
