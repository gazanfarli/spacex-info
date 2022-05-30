import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Vehicles() {
  return (
    <div className="vehicles">
      <div className="description">
        <h1>ROKCETS</h1>
        <p>
          Rockets that are shown below were created by{" "}
          <a href="https://www.spacex.com/">SpaceX</a>. Proportions between
          rockets are somewhat accurate. Click on the rocket to learn more about
          it.
        </p>
      </div>
      <ul className="vehicle_list">
        <li className="vehicle_item">
          <h3 className="vehicle_title">Falcon 1</h3>
          <Link to="/vehicles/falcon1">
            <div className="vehicle_item_div">
              <img
                className="falcon1"
                src={require("../../assets/images/falcon1.png")}
                alt="falcon1"
              />
            </div>
          </Link>
        </li>
        <li className="vehicle_item">
          <h3 className="vehicle_title">Falcon 9</h3>
          <Link to="/vehicles/falcon9">
            <div className="vehicle_item_div">
              <img
                className="falcon9"
                src={require("../../assets/images/falcon9.png")}
                alt="falcon9"
              />
            </div>
          </Link>
        </li>
        <li className="vehicle_item">
          <h3 className="vehicle_title">Falcon Heavy</h3>
          <Link to="/vehicles/falconheavy">
            <div className="vehicle_item_div">
              <img
                className="falcon_heavy"
                src={require("../../assets/images/falconHeavy.png")}
                alt="falconHeavy"
              />
            </div>
          </Link>
        </li>
        <li className="vehicle_item">
          <h3 className="vehicle_title">Starship</h3>
          <Link to="/vehicles/starship">
            <div className="vehicle_item_div">
              <img
                className="starship"
                src={require("../../assets/images/starship.png")}
                alt="sharship"
              />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Vehicles;
