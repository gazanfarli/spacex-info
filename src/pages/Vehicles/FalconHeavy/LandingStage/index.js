import React from 'react'

function LandingStage({isLandingStage}) {
  return (
    isLandingStage && (
        <ul className="parameters">
          <li className="parameter_item">
            <div>NUMBER</div>
            <div className="parameter_value">12</div>
          </li>
          <li className="parameter_item">
            <div>MATERIAL</div>
            <div className="parameter_value">carbon fiber</div>
          </li>
        </ul>
      )
  )
}

export default LandingStage