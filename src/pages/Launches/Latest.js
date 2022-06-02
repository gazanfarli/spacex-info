import React, { useEffect, useState } from 'react';
import "./index.css";
import Details from '../../components/RecentLaunchDetail/Details';
// import LastDetails from "./LastDetails";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function Latest() {
    const [latest, setLatest] = useState();
    const [rocket, setRocket] = useState();
    const [launchSite, setLaunchSite] = useState();

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v4/launches/latest`)
            .then((res) => res.json())
            .then((data) => {
                !latest && setLatest({ data: data });
            })
            .catch((err) => console.log(err));

        latest &&
            fetch(`https://api.spacexdata.com/v4/rockets/${latest.data.rocket}`)
                .then((res) => res.json())
                .then((data) => setRocket(data))
                .catch((err) => console.log(err));

        latest &&
            fetch(`https://api.spacexdata.com/v4/launchpads/${latest.data.launchpad}`)
                .then((res) => res.json())
                .then((data) => setLaunchSite(data))
                .catch((err) => console.log(err));
    }, [latest]);

    return (
        <div>
            <div className="latest_launch">
                <h1 className='latest_launch_heading'>LATEST LAUNCH</h1>
                {rocket && (
                    <div className="latest_launch_detail">
                        <div className="rocket_icon">
                            <img style={{ margin: "0 0 2rem 0" }} id="rocketIcon" src={`${latest.data.links.patch.small}`} alt="rocket_icon" />
                            <Link to="/launch" state={latest}><Button title="MORE DETAILS" /></Link>
                        </div>
                        <div className='latest_details'>
                            {
                                launchSite &&
                                <Details
                                    state={latest}
                                    launchSite={launchSite.full_name}
                                    rocket={rocket}
                                    isUpcoming={false} />
                            }
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Latest