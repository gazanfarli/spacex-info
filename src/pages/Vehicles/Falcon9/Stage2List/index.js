import React from 'react'

function index({isStage2}) {
  return (
    isStage2 && (
        <ul className="parameters">
          <li className="parameter_item">
            <div>ENGINES</div>
            <div className="parameter_value">1</div>
          </li>
          <li className="parameter_item">
            <div>THRUST</div>
            <div className="parameter_value">914 kn | 210000 lbf</div>
          </li>
          <li className="parameter_item">
            <div>FUEL AMOUNT</div>
            <div className="parameter_value">90 tons</div>
          </li>
          <li className="parameter_item">
            <div>BURN TIME</div>
            <div className="parameter_value">397 sec</div>
          </li>
        </ul>
      )
  )
}

export default index