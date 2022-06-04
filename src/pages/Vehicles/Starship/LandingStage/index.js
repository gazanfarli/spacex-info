import React from 'react'

function LandingStageParam({isLandingStage}) {
  return (
    isLandingStage && (
        <ul className="parameters">
          <li className="parameter_item">
            <div>NUMBER</div>
            <div className="parameter_value">6</div>
          </li>
          <li className="parameter_item">
            <div>MATERIAL</div>
            <div className="parameter_value">stainless steel</div>
          </li>
        </ul>
      )
  )
}

export default LandingStageParam;