import React, { useEffect, useState } from "react";
import "../index.css";
import "../rocket.css";
import Navbar from "../../../components/Navbar";
import FlickrImages from "../../../components/FlickrImages";
import OverviewList from "./OverviewList";
import Stage1List from "./Stage1List";
import Stage2List from "./Stage2List";
import LandingStage from "./LandingStage";
import ScrollToTop from "../../../components/ScrollToTop";
import background from "../../../assets/images/fheavy_bg2.jpg";
import axios from "axios";
import Buttons from "../Buttons";

function FalconHeavy() {
  const [isOverview, setIsOverview] = useState(true);
  const [isStage1, setIsStage1] = useState(false);
  const [isStage2, setIsStage2] = useState(false);
  const [isLandingStage, setIsLandingStage] = useState(false);
  const [flickrImages, setFlickrImages] = useState(null);

  useEffect(() => {
    axios.get("https://api.spacexdata.com/v4/rockets/5e9d0d95eda69974db09d1ed")
    .then(res => setFlickrImages(res.data.flickr_images));
  }, [])

  const overviewHandler = () => {setIsOverview(true);setIsStage1(false);setIsStage2(false);setIsLandingStage(false)};
  const stage1Handler = () => {setIsOverview(false);setIsStage1(true);setIsStage2(false);setIsLandingStage(false)};
  const stage2Handler = () => {setIsOverview(false); setIsStage1(false);setIsStage2(true);setIsLandingStage(false)};
  const landingPageHandler = () => {setIsLandingStage(true);setIsOverview(false);setIsStage1(false);setIsStage2(false)}

  return (
    <div className="rocket_page">
      <div className="rocket_header" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url("${background}") no-repeat`, 
        backgroundSize: "cover", 
        height: "100vh"
      }}>
        <Navbar />
        <h1>FALCON HEAVY</h1>
        <div className="quote">
        Holy flying fuck, that thing took off! - <span> Elon Musk</span>
        </div>
      </div>
      <div className="rocket_info">
      <img
          className="rocket_photo_heavy"
          src={require("../../../assets/images/falconHeavy.png")}
          alt="falcon_heavy"
        />
        <div className="rocket_details">
          <p className="rocket_description">
          With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.
          </p>
          <h3 style={{ color: "#bec0c4" }}>
            STATUS: <span style={{ color: "#006FB4" }}>ACTIVE</span>
          </h3>
          <Buttons 
          isOverview={isOverview}
          isStage1={isStage1}
          isStage2={isStage2}
          isLandingStage={isLandingStage}
          overviewHandler={overviewHandler}
          stage1Handler={stage1Handler}
          stage2Handler={stage2Handler}
          landingPageHandler={landingPageHandler}
           />
          <OverviewList isOverview={isOverview} />
          <Stage1List isStage1={isStage1} />
          <Stage2List isStage2={isStage2} />
          <LandingStage isLandingStage={isLandingStage} />
        </div>
      </div>
      {
        flickrImages !== null && <FlickrImages images={flickrImages} />
      }
      <ScrollToTop />
    </div>
  );
}

export default FalconHeavy;
