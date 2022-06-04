import React from "react";
import "../index.css";

function PayloadParam({ payloads }) {
  return (
    <div>
      <h1>PAYLOAD #1</h1>
      <ul className="parameters" id="parameteres_list_1">
        <li className="parameter_item">
          <div>NAME</div>
          <div className="parameter_value">{payloads.name}</div>
        </li>
        <li className="parameter_item">
          <div>TYPE</div>
          <div className="parameter_value">{payloads.type}</div>
        </li>
        <li className="parameter_item">
          <div>ORBIT</div>
          <div className="parameter_value">{payloads.orbit}</div>
        </li>
      </ul>
    </div>
  );
}

export default PayloadParam;
