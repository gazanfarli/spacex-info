import React from "react";
import "./index.css";

function UpcomingParam({ payloads }) {
  return (
    <div>
      <h1>PAYLOAD #1</h1>
      <ul className="parameters" id="parameteres_list_1">
        <li className="parameter_item">
          <div>NAME</div>
          {payloads && <div className="parameter_value">{payloads.name}</div>}
        </li>
        <li className="parameter_item">
          <div>CUSTOMERS</div>
          {payloads && (
            <div className="parameter_value">{payloads.customers}</div>
          )}
        </li>
        <li className="parameter_item">
          <div>MANUFACTURER</div>
          {payloads && <div className="parameter_value">{payloads.manufacturers[0]}</div>}
        </li>
        <li className="parameter_item">
          <div>TYPE</div>
          {payloads && <div className="parameter_value">{payloads.type}</div>}
        </li>
        <li className="parameter_item">
          <div>MASS</div>
          {payloads && (
            <div className="parameter_value">
              {`${payloads.mass_kg} kg | ${payloads.mass_lbs} lbs`}
            </div>
          )}
        </li>
        <li className="parameter_item">
          <div>ORBIT</div>
          {payloads && <div className="parameter_value">{payloads.orbit}</div>}
        </li>
      </ul>
    </div>
  );
}

export default UpcomingParam;
