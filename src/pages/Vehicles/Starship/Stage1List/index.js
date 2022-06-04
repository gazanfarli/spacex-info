import React from 'react'

function Stage1List({isStage1}) {
  return (
    isStage1 && (
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
      )
  )
}

export default Stage1List