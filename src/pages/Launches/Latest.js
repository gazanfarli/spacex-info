import React, { useEffect, useState } from 'react';
import "./index.css";
import LastDetails from "./LastDetails";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function Latest() {
    const [latest, setLatest] = useState();
    const [rocket, setRocket] = useState();
    const [launchSite, setLaunchSite] = useState();
    const a = "";

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v4/launches/latest`)
            .then((res) => res.json())
            .then((data) => {
                setLatest({ data: data });
            })
            .catch((err) => console.log(err));

        latest !== undefined &&
            fetch(`https://api.spacexdata.com/v4/rockets/${latest.data.rocket}`)
                .then((res) => res.json())
                .then((data) => setRocket(data))
                .catch((err) => console.log(err));

        latest !== undefined &&
            fetch(`https://api.spacexdata.com/v4/launchpads/${latest.data.launchpad}`)
                .then((res) => res.json())
                .then((data) => setLaunchSite(data))
                .catch((err) => console.log(err));
    }, [a]);
    return (
        <div>
            <div className="latest_launch">
                <h1>LATEST LAUNCH</h1>
                <div className="latest_launch_detail">
                    {rocket && (
                        <>
                            <div className="rocket_icon">
                                <img style={{ marginBottom: "2rem" }} id="rocketIcon" src={`${latest.data.links.patch.small}`} alt="rocket_icon" />
                                <Link to="/launch" state={latest}><Button title="MORE DETAILS" /></Link>
                            </div>
                            <div className="latest_details">
                                <LastDetails
                                    state={latest}
                                    rocket={rocket}
                                    launchSite={launchSite}
                                    isUpcoming={true}
                                />
                            </div>

                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Latest