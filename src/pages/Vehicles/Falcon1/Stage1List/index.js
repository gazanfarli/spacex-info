import React from 'react'

function Stage1List({isStage1}) {
  return (
    isStage1 && (
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
      )
  )
}

export default Stage1List