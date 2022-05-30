import React from "react";
import "./index.css";

function CoreParam({ state, landpad }) {
  return (
    <div>
      <h1>CORE #1</h1>
      <ul className="parameters">
        <li className="parameter_item">
          <div>LANDING</div>
          <div className="parameter_value">
            {state.data.success ? "SUCCESSFULL" : "UNSUCCESSFULL"}
          </div>
        </li>
        <li className="parameter_item">
          <div>LANDING TYPE</div>
          <div className="parameter_value">
            {state.data.cores[0].landing_type !== null
              ? state.data.cores[0].landing_type
              : "UNKNOWN"}
          </div>
        </li>
        <li className="parameter_item">
          <div>LANDING PAD</div>
          <div className="parameter_value">
            {landpad && landpad.name !== null ? landpad.name : "UNKNOWN"}
          </div>
        </li>
        <li className="parameter_item">
          <div>REUSED</div>
          <div className="parameter_value">
            {state.data.cores[0].reused && state.data.cores[0].reused !== null
              ? "YES"
              : "NO"
              ? "UNKNOWN"
              : null}
          </div>
        </li>
        <li className="parameter_item">
          <div>FLIGHTS</div>
          <div className="parameter_value">
            {state.data.cores[0].flight !== null
              ? state.data.cores[0].flight
              : 0}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CoreParam;
