import React, { useEffect, useState } from "react";
import "./index.css";
import { useLocation, Link } from "react-router-dom";
import falcon1Photo from "../../assets/images/falcon1.png";
import falcon9Photo from "../../assets/images/falcon9.png";
import falconHeavyPhoto from "../../assets/images/falconHeavy.png";
import starshipPhoto from "../../assets/images/starship.png";
import UpcomingParam from "./UpcomingParam";
import CoreParam from "./CoreParam";
import PayloadParam from "./PayloadParam";
import RecentDetails from "./RecentDetails";
import axios from "axios";
import LaunchVideo from "../LaunchVideo";
import ScrollToTop from "../ScrollToTop";

function RecentLaunchDetail() {
  const location = useLocation();
  const { state } = location;
  const [rocket, setRocket] = useState("");
  const [launchSite, setLaunchSite] = useState("");
  const [payloads, setPayloads] = useState();
  const [landpad, setLandpad] = useState();

  useEffect(() => {
    axios.get(`https://api.spacexdata.com/v4/rockets/${state.data.rocket}`)
    .then(res => setRocket(res.data)).catch(err => console.log(err));

    axios.get(`https://api.spacexdata.com/v4/launchpads/${state.data.launchpad}`)
    .then(res => setLaunchSite(res.data.full_name)).catch(err => console.log(err));

    axios.get(`https://api.spacexdata.com/v4/payloads/${state.data.payloads}`)
    .then(res => setPayloads(res.data)).catch(err => console.log(err));

    state.data.cores[0].landpad !== null &&
    axios.get(`https://api.spacexdata.com/v4/landpads/${state.data.cores[0].landpad}`)
    .then(res => setLandpad(res.data)).catch(err => console.log(err));
  }, []);

  const defineRocketPhoto = (name) => {
    switch (name) {
      case "Falcon 1": return falcon1Photo;
      case "Falcon 9": return falcon9Photo;
      case "Falcon Heavy": return falconHeavyPhoto;
      case "Starship": return starshipPhoto;
      default: return null;
    }
  };

  return (
    <div className="recent_launch">
      <RecentDetails isUpcoming={state.isUpcoming} state={state} launchSite={launchSite} rocket={rocket} />
      <div className="rocket_parameters">
        <div className="rocket_photo_container">
          {rocket && (
            <Link
              to={`/vehicles/${rocket.name.split(" ").join("").toLowerCase()}`}
            >
              <img
                className="rocketPhoto"
                src={defineRocketPhoto(rocket.name)}
                alt="rocket"
              />
            </Link>
          )}
        </div>
        <div className="parameters_container">
          {!state.isUpcoming && payloads && (
            <PayloadParam payloads={payloads} />
          )}

          {!state.isUpcoming && (
            <CoreParam state={state} landpad={landpad} />
          )}

          {state.isUpcoming && (
            <UpcomingParam payloads={payloads} />
          )}
        </div>
      </div>
      {
        state.isUpcoming !== true &&
        <LaunchVideo embedId={state.data.links.youtube_id} />
      }
      <ScrollToTop />
    </div>
  );
}

export default RecentLaunchDetail;
