import React, { useState } from "react";
import "./index.css";
import "./rocket.css";
import Navbar from "../../components/Navbar";
import background from "../../assets/images/falcon9_bg.jpg"

function Falcon9() {
  const [isOverview, setIsOverview] = useState(true);
  const [isStage1, setIsStage1] = useState(false);
  const [isStage2, setIsStage2] = useState(false);
  const [isLandingStage, setIsLandingStage] = useState(false);

  const overviewHandler = (e) => {
    setIsOverview(true);
    setIsStage1(false);
    setIsStage2(false);
    setIsLandingStage(false);
  };
  const stage1Handler = (e) => {
    setIsOverview(false);
    setIsStage1(true);
    setIsStage2(false);
    setIsLandingStage(false);
  };
  const stage2Handler = (e) => {
    setIsOverview(false);
    setIsStage1(false);
    setIsStage2(true);
    setIsLandingStage(false);
  };
  const landingPageHandler = () => {
    setIsLandingStage(true);
    setIsOverview(false);
    setIsStage1(false);
    setIsStage2(false);
  }

  return (
    <div className="rocket_page">
      <div className="rocket_header" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url("${background}") no-repeat`, 
        backgroundSize: "cover", 
        height: "100vh"
      }}>
        <Navbar />
        <h1>FALCON 9</h1>
        <div className="quote">
          Uncharted territory. ... Nobody has ever made a fully reusable,
          orbital rocket.. - <span> Elon Musk</span>
        </div>
      </div>
      <div className="rocket_info">
        <img
          className="rocket_photo"
          src={require("../../assets/images/falcon9.png")}
          alt="falcon9"
        />
        <div className="rocket_details">
          <p className="rocket_description">
            Falcon 9 is a two-stage rocket designed and manufactured by SpaceX
            for the reliable and safe transport of satellites and the Dragon
            spacecraft into orbit.
          </p>
          <h3 style={{ color: "#bec0c4" }}>
            STATUS: <span style={{ color: "#006FB4" }}>ACTIVE</span>
          </h3>
          <div className="stages">
            <button onClick={overviewHandler} className="button overview">
              OVERVIEW
            </button>
            <button onClick={stage1Handler} className="button stage1">
              STAGE 1
            </button>
            <button onClick={stage2Handler} className="button stage2">
              STAGE 2
            </button>
            <button onClick={landingPageHandler} className="button landing_legs">
              LANDING LEGS
            </button>
          </div>

          {isOverview && (
            <ul className="parameters">
              <li className="parameter_item">
                <div>HEIGHT</div>
                <div className="parameter_value">70 m | 229.6 ft</div>
              </li>
              <li className="parameter_item">
                <div>DIAMETER</div>
                <div className="parameter_value">3.7 m | 12 ft</div>
              </li>
              <li className="parameter_item">
                <div>MASS</div>
                <div className="parameter_value">549054 kg | 1207920 lb</div>
              </li>
              <li className="parameter_item">
                <div>LEO</div>
                <div className="parameter_value">22800 kg | 50265 lb</div>
              </li>
              <li className="parameter_item">
                <div>GTO</div>
                <div className="parameter_value">8300 kg | 18300 lb</div>
              </li>
              <li className="parameter_item">
                <div>MARS</div>
                <div className="parameter_value">4020 kg | 8860 lb</div>
              </li>
            </ul>
          )}
          {isStage1 && (
            <ul className="parameters">
              <li className="parameter_item">
                <div>ENGINES</div>
                <div className="parameter_value">9</div>
              </li>
              <li className="parameter_item">
                <div>THRUST AT SEA LEVEL</div>
                <div className="parameter_value">7607 kn | 1710000 lbf</div>
              </li>
              <li className="parameter_item">
                <div>THRUST VACUUM</div>
                <div className="parameter_value">8227 kn | 1849500 lbf</div>
              </li>
              <li className="parameter_item">
                <div>FUEL AMOUNT</div>
                <div className="parameter_value">385 tons</div>
              </li>
              <li className="parameter_item">
                <div>BURN TIME</div>
                <div className="parameter_value">162 sec</div>
              </li>
              <li className="parameter_item">
                <div>TYPE</div>
                <div className="parameter_value">merlin</div>
              </li>
              <li className="parameter_item">
                <div>VERSION</div>
                <div className="parameter_value">1D+</div>
              </li>
              <li className="parameter_item">
                <div>LAYOUT</div>
                <div className="parameter_value">octaweb</div>
              </li>
              <li className="parameter_item">
                <div>REUSABLE</div>
                <div className="parameter_value">YES</div>
              </li>
              <li className="parameter_item">
                <div>PROPELLANT 1</div>
                <div className="parameter_value">liquid oxygen</div>
              </li>
              <li className="parameter_item">
                <div>PROPELLANT 2</div>
                <div className="parameter_value">RP-1 kerosene</div>
              </li>
            </ul>
          )}
          {isStage2 && (
            <ul className="parameters">
              <li className="parameter_item">
                <div>ENGINES</div>
                <div className="parameter_value">1</div>
              </li>
              <li className="parameter_item">
                <div>THRUST</div>
                <div className="parameter_value">914 kn | 210000 lbf</div>
              </li>
              <li className="parameter_item">
                <div>FUEL AMOUNT</div>
                <div className="parameter_value">90 tons</div>
              </li>
              <li className="parameter_item">
                <div>BURN TIME</div>
                <div className="parameter_value">397 sec</div>
              </li>
            </ul>
          )}
          {isLandingStage && (
            <ul className="parameters">
              <li className="parameter_item">
                <div>NUMBER</div>
                <div className="parameter_value">4</div>
              </li>
              <li className="parameter_item">
                <div>MATERIAL</div>
                <div className="parameter_value">carbon fiber</div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Falcon9;
