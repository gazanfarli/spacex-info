import React, { useState } from "react";
import "./index.css";
import "./rocket.css";
import Navbar from "../../components/Navbar";
import background from "../../assets/images/falcon1_bg.jpg";

function Falcon1() {
  const [isOverview, setIsOverview] = useState(true);
  const [isStage1, setIsStage1] = useState(false);
  const [isStage2, setIsStage2] = useState(false);

  const overviewHandler = (e) => {
    setIsOverview(true);
    setIsStage1(false);
    setIsStage2(false);
  };
  const stage1Handler = (e) => {
    setIsOverview(false);
    setIsStage1(true);
    setIsStage2(false);
  };
  const stage2Handler = (e) => {
    setIsOverview(false);
    setIsStage1(false);
    setIsStage2(true);
  };

  return (
    <div className="rocket_page">
      <div className="rocket_header" 
      style={{ 
        background: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url("${background}") no-repeat`, 
        backgroundSize: "cover", 
        height: "100vh"
        }}>
        <Navbar />
        <h1>FALCON 1</h1>
        <div className="quote">
        Uncharted territory. ... Nobody has ever made a fully reusable, orbital rocket.. - <span> Elon Musk</span>
        </div>
      </div>
      <div className="rocket_info">
        <img
          className="rocket_photo"
          src={require("../../assets/images/falcon1.png")}
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
          </div>

          {isOverview && (
            <ul className="parameters">
              <li className="parameter_item">
                <div>HEIGHT</div>
                <div className="parameter_value">2.25 m | 73 ft</div>
              </li>
              <li className="parameter_item">
                <div>DIAMETER</div>
                <div className="parameter_value">1.68 m | 5.5 ft</div>
              </li>
              <li className="parameter_item">
                <div>MASS</div>
                <div className="parameter_value">30146 kg | 66460 lb</div>
              </li>
              <li className="parameter_item">
                <div>LEO</div>
                <div className="parameter_value">450 kg | 992 lb</div>
              </li>
            </ul>
          )}
          {isStage1 && (
            <ul className="parameters">
              <li className="parameter_item">
                <div>ENGINES</div>
                <div className="parameter_value">1</div>
              </li>
              <li className="parameter_item">
                <div>THRUST AT SEA LEVEL</div>
                <div className="parameter_value">420 kn | 94000 lbf</div>
              </li>
              <li className="parameter_item">
                <div>THRUST VACUUM</div>
                <div className="parameter_value">480 kn | 110000 lbf</div>
              </li>
              <li className="parameter_item">
                <div>FUEL AMOUNT</div>
                <div className="parameter_value">44.3 tons</div>
              </li>
              <li className="parameter_item">
                <div>BURN TIME</div>
                <div className="parameter_value">169 sec</div>
              </li>
              <li className="parameter_item">
                <div>TYPE</div>
                <div className="parameter_value">merlin</div>
              </li>
              <li className="parameter_item">
                <div>VERSION</div>
                <div className="parameter_value">1C</div>
              </li>
              <li className="parameter_item">
                <div>LAYOUT</div>
                <div className="parameter_value">single</div>
              </li>
              <li className="parameter_item">
                <div>REUSABLE</div>
                <div className="parameter_value">NO</div>
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
                <div className="parameter_value">31 kn | 7000 lbf</div>
              </li>
              <li className="parameter_item">
                <div>FUEL AMOUNT</div>
                <div className="parameter_value">3.28 tons</div>
              </li>
              <li className="parameter_item">
                <div>BURN TIME</div>
                <div className="parameter_value">378 sec</div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Falcon1;