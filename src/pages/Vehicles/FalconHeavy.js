import React, { useState } from "react";
import "./index.css";
import "./rocket.css";
import Navbar from "../../components/Navbar";
import background from "../../assets/images/fheavy_bg2.jpg";

function FalconHeavy() {
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
        <h1>FALCON HEAVY</h1>
        <div className="quote">
        Holy flying fuck, that thing took off! - <span> Elon Musk</span>
        </div>
      </div>
      <div className="rocket_info">
        <img
          className="rocket_photo_heavy"
          src={require("../../assets/images/falconHeavy.png")}
          alt="falcon_heavy"
        />
        <div className="rocket_details">
          <p className="rocket_description">
          With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.
          </p>
          <h3 style={{ color: "#bec0c4" }}>
            STATUS: <span style={{ color: "#006FB4" }}>ACTIVE</span>
          </h3>
          <div className="stages">
          {
              isOverview ?
              <div onClick={overviewHandler} className="button">
                <button className="overview active">OVERVIEW</button>
              </div> :
              <div onClick={overviewHandler} className="button">
                <button className="overview">OVERVIEW</button>
              </div>
            }
            {
              isStage1 ?
              <div onClick={stage1Handler} className="button">
                <button className="stage1 active">STAGE 1</button>
              </div> :
              <div onClick={stage1Handler} className="button">
                <button className="stage1">STAGE 1</button>
              </div>
            }
            {
              isStage2 ? 
              <div onClick={stage2Handler}>
                <button className="stage2 active">STAGE 2</button>
              </div> :
              <div onClick={stage2Handler}>
                <button className="stage2">STAGE 2</button>
              </div>
            }
            {
              isLandingStage ? 
              <button onClick={landingPageHandler} className="button landing_legs avtive">
                LANDING LEGS
              </button> :
              <button onClick={landingPageHandler} className="button landing_legs">
                LANDING LEGS
              </button>
            }
          </div>

          {isOverview && (
            <ul className="parameters">
              <li className="parameter_item">
                <div>HEIGHT</div>
                <div className="parameter_value">70 m | 229.6 ft</div>
              </li>
              <li className="parameter_item">
                <div>DIAMETER</div>
                <div className="parameter_value">12.2 m | 39.9 ft</div>
              </li>
              <li className="parameter_item">
                <div>MASS</div>
                <div className="parameter_value">1420788 kg | 3125735 lb</div>
              </li>
              <li className="parameter_item">
                <div>LEO</div>
                <div className="parameter_value">63800 kg | 140660 lb</div>
              </li>
              <li className="parameter_item">
                <div>GTO</div>
                <div className="parameter_value">26700 kg | 58860 lb</div>
              </li>
              <li className="parameter_item">
                <div>MARS</div>
                <div className="parameter_value">16800 kg | 37040 lb</div>
              </li>
              <li className="parameter_item">
                <div>PLUTO</div>
                <div className="parameter_value">3500 kg | 7720 lb</div>
              </li>
            </ul>
          )}
          {isStage1 && (
            <ul className="parameters">
              <li className="parameter_item">
                <div>ENGINES</div>
                <div className="parameter_value">27</div>
              </li>
              <li className="parameter_item">
                <div>THRUST AT SEA LEVEL</div>
                <div className="parameter_value">22819 kn | 5130000 lbf</div>
              </li>
              <li className="parameter_item">
                <div>THRUST VACUUM</div>
                <div className="parameter_value">24681 kn | 5548500 lbf</div>
              </li>
              <li className="parameter_item">
                <div>FUEL AMOUNT</div>
                <div className="parameter_value">1155 tons</div>
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
                <div className="parameter_value">934 kn | 210000 lbf</div>
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
                <div className="parameter_value">12</div>
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

export default FalconHeavy;
