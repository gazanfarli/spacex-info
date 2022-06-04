import React from 'react'

function OverviewList({isOverview}) {
  return (
    isOverview && (
        <ul className="parameters">
          <li className="parameter_item">
            <div>HEIGHT</div>
            <div className="parameter_value">70 m | 229.6 ft</div>
          </li>
          <li className="parameter_item">
            <div>DIAMETER</div>
            <div className="parameter_value">3.7 m | 12 ft</div>
          </li>
          <li className="parameter_item">
            <div>MASS</div>
            <div className="parameter_value">549054 kg | 1207920 lb</div>
          </li>
          <li className="parameter_item">
            <div>LEO</div>
            <div className="parameter_value">22800 kg | 50265 lb</div>
          </li>
          <li className="parameter_item">
            <div>GTO</div>
            <div className="parameter_value">8300 kg | 18300 lb</div>
          </li>
          <li className="parameter_item">
            <div>MARS</div>
            <div className="parameter_value">4020 kg | 8860 lb</div>
          </li>
        </ul>
      )
  )
}

export default OverviewList