import React, { useState } from "react";
import "./index.css";
import "./rocket.css";
import Navbar from "../../components/Navbar";
import background from "../../assets/images/starship_bg.jpg"

function Starship() {
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
        <h1>STARSHIP</h1>
        <div className="quote">
        Designed to make life multiplanetary. - <span> Elon Musk</span>
        </div>
      </div>
      <div className="rocket_info">
        <img
          className="rocket_photo_heavy"
          src={require("../../assets/images/starship.png")}
          alt="starship"
        />
        <div className="rocket_details">
          <p className="rocket_description">
          Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.
          </p>
          <h3 style={{ color: "#bec0c4" }}>
            STATUS: <span style={{ color: "#006FB4" }}>IN DEVELOPMENT</span>
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
                <div className="parameter_value">118 m | 387 ft</div>
              </li>
              <li className="parameter_item">
                <div>DIAMETER</div>
                <div className="parameter_value">9 m | 30 ft</div>
              </li>
              <li className="parameter_item">
                <div>MASS</div>
                <div className="parameter_value">1335000 kg | 2943000 lb</div>
              </li>
              <li className="parameter_item">
                <div>LEO</div>
                <div className="parameter_value">150000 kg | 330000 lb</div>
              </li>
              <li className="parameter_item">
                <div>MARS</div>
                <div className="parameter_value">100000 kg | 220000 lb</div>
              </li>
              <li className="parameter_item">
                <div>MOON</div>
                <div className="parameter_value">100000 kg | 220000 lb</div>
              </li>
            </ul>
          )}
          {isStage1 && (
            <ul className="parameters">
              <li className="parameter_item">
                <div>ENGINES</div>
                <div className="parameter_value">37</div>
              </li>
              <li className="parameter_item">
                <div>THRUST AT SEA LEVEL</div>
                <div className="parameter_value">128000 kn | 28775544 lbf</div>
              </li>
              <li className="parameter_item">
                <div>THRUST VACUUM</div>
                <div className="parameter_value">138000 kn | 31023634 lbf</div>
              </li>
              <li className="parameter_item">
                <div>FUEL AMOUNT</div>
                <div className="parameter_value">3300 tons</div>
              </li>
              <li className="parameter_item">
                <div>TYPE</div>
                <div className="parameter_value">raptor</div>
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
                <div className="parameter_value">liquid methane</div>
              </li>
            </ul>
          )}
          {isStage2 && (
            <ul className="parameters">
              <li className="parameter_item">
                <div>ENGINES</div>
                <div className="parameter_value">6</div>
              </li>
              <li className="parameter_item">
                <div>THRUST</div>
                <div className="parameter_value">1957 kn | 440000 lbf</div>
              </li>
              <li className="parameter_item">
                <div>FUEL AMOUNT</div>
                <div className="parameter_value">1200 tons</div>
              </li>
            </ul>
          )}
          {isLandingStage && (
            <ul className="parameters">
              <li className="parameter_item">
                <div>NUMBER</div>
                <div className="parameter_value">6</div>
              </li>
              <li className="parameter_item">
                <div>MATERIAL</div>
                <div className="parameter_value">stainless steel</div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Starship;