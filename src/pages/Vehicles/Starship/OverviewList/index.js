import React from 'react'

function OverviewList({isOverview}) {
  return (
    isOverview && (
        <ul className="parameters">
          <li className="parameter_item">
            <div>HEIGHT</div>
            <div className="parameter_value">118 m | 387 ft</div>
          </li>
          <li className="parameter_item">
            <div>DIAMETER</div>
            <div className="parameter_value">9 m | 30 ft</div>
          </li>
          <li className="parameter_item">
            <div>MASS</div>
            <div className="parameter_value">1335000 kg | 2943000 lb</div>
          </li>
          <li className="parameter_item">
            <div>LEO</div>
            <div className="parameter_value">150000 kg | 330000 lb</div>
          </li>
          <li className="parameter_item">
            <div>MARS</div>
            <div className="parameter_value">100000 kg | 220000 lb</div>
          </li>
          <li className="parameter_item">
            <div>MOON</div>
            <div className="parameter_value">100000 kg | 220000 lb</div>
          </li>
        </ul>
      )
  )
}

export default OverviewList