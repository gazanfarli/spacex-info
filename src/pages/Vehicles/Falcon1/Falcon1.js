import React, { useEffect, useState } from "react";
import "../index.css";
import "../rocket.css";
import Navbar from "../../../components/Navbar";
import FlickrImages from "../../../components/FlickrImages";
import OverviewList from "./OverviewList";
import Stage1List from "./Stage1List";
import Stage2List from "./Stage2List";
import ScrollToTop from "../../../components/ScrollToTop";
import background from "../../../assets/images/falcon1_bg.jpg";
import axios from "axios";
import Buttons from "./Buttons";

function Falcon1() {
  const [isOverview, setIsOverview] = useState(true);
  const [isStage1, setIsStage1] = useState(false);
  const [isStage2, setIsStage2] = useState(false);
  const [flickrImages, setFlickrImages] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/rockets/5e9d0d95eda69955f709d1eb")
      .then((res) => setFlickrImages(res.data.flickr_images));
  }, []);

  const overviewHandler = () => {setIsOverview(true);setIsStage1(false);setIsStage2(false)};
  const stage1Handler = () => {setIsOverview(false);setIsStage1(true);setIsStage2(false)};
  const stage2Handler = () => {setIsOverview(false);setIsStage1(false);setIsStage2(true)};

  return (
    <div className="rocket_page">
      <div
        className="rocket_header"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url("${background}") no-repeat`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Navbar />
        <h1>FALCON 1</h1>
        <div className="quote">
          Uncharted territory. ... Nobody has ever made a fully reusable,
          orbital rocket.. - <span> Elon Musk</span>
        </div>
      </div>
      <div className="rocket_info">
        <img
          className="rocket_photo"
          src={require("../../../assets/images/falcon1.png")}
          alt="falcon1"
        />
        <div className="rocket_details">
          <p className="rocket_description">
            The Falcon 1 was an expendable launch system privately developed and
            manufactured by SpaceX during 2006-2009. On 28 September 2008,
            Falcon 1 became the first privately-developed liquid-fuel launch
            vehicle to go into orbit around the Earth.
          </p>
          <h3 style={{ color: "#bec0c4" }}>
            STATUS: <span style={{ color: "#006FB4" }}>RETIRED</span>
          </h3>
          <Buttons
            isFalcon1={true}
            isOverview={isOverview}
            isStage1={isStage1}
            isStage2={isStage2}
            overviewHandler={overviewHandler}
            stage1Handler={stage1Handler}
            stage2Handler={stage2Handler}
          />
          <OverviewList isOverview={isOverview} />
          <Stage1List isStage1={isStage1} />
          <Stage2List isStage2={isStage2} />
        </div>
      </div>
      {flickrImages !== null && <FlickrImages images={flickrImages} />}
      <ScrollToTop />
    </div>
  );
}

export default Falcon1;
