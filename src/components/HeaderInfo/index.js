import React, { useEffect, useState } from "react";
import NextLaunchDetail from "./NextLaunchDetail";
import "./index.css";
const moment = require("moment");


function HeaderInfo() {
  const api = {
    url: "https://api.spacexdata.com/v4/launches/next"
  }
  let today = new Date();
  const [nextLaunchTime, setNextLaunchTime] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [timeNow, setTimeNow] = useState({
    days: today.getDate(),
    hour: today.getHours(),
    minutes: today.getMinutes(),
    seconds: today.getSeconds()
  })

  if(nextLaunchTime){
    setTimeout(() => {
      let now = String(today.getDate()).padStart(2, '0') + "/" + String(today.getMonth() + 1).padStart(2, '0') + "/" + String(today.getFullYear()) + " " + String(today.getHours()).padStart(2, '0') + ":" + String(today.getMinutes()).padStart(2, '0') + ":" + String(today.getSeconds()).padStart(2, '0');

      const date = nextLaunchTime.date_utc;
      let thenDate = date.slice(0, 10).split("-").reverse().join("/");
      let then = thenDate + " " + date.slice(11, 19);
      let diff = moment.utc(moment(then,"DD/MM/YYYY HH:mm:ss").diff(moment(now,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");
      
      let end = moment(now.slice(6, 10) + "-" + now.slice(3, 5) + "-" + now.slice(0, 2), "YYYY-MM-DD");
      let start = moment(String(then.slice(6,10) + then.slice(3, 5) + then.slice(0, 2)), "YYYY-MM-DD");
      let dayDiff = moment.duration(start.diff(end)).asDays();
      
      setTimeNow({
        days: dayDiff,
        hour: diff.slice(0,2),
        minutes: diff.slice(3,5),
        seconds: diff.slice(6,8)
      })
    }, 1000);
  }

  const onClickHandler = () => {
    setIsClicked(true);
  }

  useEffect(() => {
    fetch(api.url)
    .then(res => res.json())
    .then(data => {
      setNextLaunchTime(data);
    })
    .catch(err => console.log(err));
  },[api.url])

  return (
    <div className="header_info">
      <h1>
        NEXT LAUNCH : <span style={{color: "#006FB9", fontWeight: "500"}}>{nextLaunchTime && nextLaunchTime.name}</span>
      </h1>
      <ul className="next_launch">
        <li>
          <span className="num">{timeNow.days}</span>
          <span className="time_scale">DAYS</span>
        </li>
        <li className="num dots">:</li>
        <li>
          <span className="num">{timeNow.hour}</span>
          <span className="time_scale">HOURS</span>
        </li>
        <li className="num dots">:</li>
        <li>
          <span className="num">{timeNow.minutes}</span>
          <span className="time_scale">MINUTES</span>
        </li>
        <li className="num dots">:</li>
        <li>
          <span className="num">{timeNow.seconds}</span>
          <span className="time_scale">SECONDS</span>
        </li>
      </ul>
      {!isClicked ? 
      <div className="show_details">
        <img onClick={onClickHandler} className="down_icon" src={require("../../assets/images/down_icon.png")} alt="down_icon" />
        <p>SHOW DETAILS</p>
      </div> : <NextLaunchDetail nextLaunchTime={nextLaunchTime} />
      }
      <div className="quote">
        <p>Rockets are the only form of transportation on Earth where the vehicle is built anew for each journey. What if you had to build a new plane for every flight? - <span className="num" style={{fontSize: "1rem"}}>Elon Musk</span></p>
      </div>
    </div>
  );
}

export default HeaderInfo;
