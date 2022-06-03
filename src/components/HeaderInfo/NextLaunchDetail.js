import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./index.css";

function NextLaunchDetail({nextLaunchTime}) {
    const rocketID = nextLaunchTime.rocket;
    const [rocket, setRocket] = useState();
    const [launchPad, setLaunchPad] = useState("");
    const date = nextLaunchTime.date_utc.slice(0,10) + "  " + nextLaunchTime.date_utc.slice(11,19);

    useEffect(() => {
        axios.get(`https://api.spacexdata.com/v4/rockets/${rocketID}`)
        .then(res => setRocket(res.data))
        .catch(err => console.log(err));
        axios.get(`https://api.spacexdata.com/v4/launchpads/${nextLaunchTime.launchpad}`)
        .then(res => setLaunchPad(res.data.full_name))
        .catch(err => console.log(err));
    }, [rocketID, nextLaunchTime.launchpad])

  return (
    <div className='next_launch_detail'>
        <ul className='titles'>
            <li>FLIGHT:</li>
            <li>LAUNCH DATE:</li>
            <li>ROCKET:</li>
            <li>LAUNCH SITE</li> 
        </ul>
        <ul className='infos'>
            {nextLaunchTime && <li>{nextLaunchTime.name}</li>}
            <li>{date}</li>
            {rocket && <li>{rocket.name}</li>}
            <li>{launchPad}</li> 
        </ul>
    </div>
  )
}

export default NextLaunchDetail;