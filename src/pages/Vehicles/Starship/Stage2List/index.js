import React from 'react'

function Stage2List({isStage2}) {
  return (
    isStage2 && (
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
      )
  )
}

export default Stage2List