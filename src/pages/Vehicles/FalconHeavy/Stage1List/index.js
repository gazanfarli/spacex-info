import React from 'react'

function Stage1List({isStage1}) {
  return (
    isStage1 && (
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
      )
  )
}

export default Stage1List;