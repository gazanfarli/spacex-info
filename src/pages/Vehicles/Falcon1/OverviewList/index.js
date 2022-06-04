import React from 'react'

function OverviewList({isOverview}) {
  return (
    isOverview && (
      <ul className="parameters">
        <li className="parameter_item">
          <div>HEIGHT</div>
          <div className="parameter_value">2.25 m | 73 ft</div>
        </li>
        <li className="parameter_item">
          <div>DIAMETER</div>
          <div className="parameter_value">1.68 m | 5.5 ft</div>
        </li>
        <li className="parameter_item">
          <div>MASS</div>
          <div className="parameter_value">30146 kg | 66460 lb</div>
        </li>
        <li className="parameter_item">
          <div>LEO</div>
          <div className="parameter_value">450 kg | 992 lb</div>
        </li>
      </ul>
    )
  )
}

export default OverviewList