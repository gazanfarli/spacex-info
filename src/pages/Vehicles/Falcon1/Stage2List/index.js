import React from 'react'

function Stage2List({isStage2}) {
  return (
    isStage2 && (
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
      )
  )
}

export default Stage2List