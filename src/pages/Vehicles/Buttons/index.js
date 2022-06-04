import React from 'react'

function Buttons(
    {
        isOverview,
        isStage1,
        isStage2,
        isLandingStage, 
        overviewHandler,
        stage1Handler, 
        stage2Handler,
        landingPageHandler
    }) {
  return (
    <div className="stages">
          {
              isOverview ?
              <div onClick={overviewHandler} className="button">
                <button className="overview active">OVERVIEW</button>
              </div> :
              <div onClick={overviewHandler} className="button">
                <button className="overview">OVERVIEW</button>
              </div>
            }
            {
              isStage1 ?
              <div onClick={stage1Handler} className="button">
                <button className="stage1 active">STAGE 1</button>
              </div> :
              <div onClick={stage1Handler} className="button">
                <button className="stage1">STAGE 1</button>
              </div>
            }
            {
              isStage2 ? 
              <div onClick={stage2Handler}>
                <button className="stage2 active">STAGE 2</button>
              </div> :
              <div onClick={stage2Handler}>
                <button className="stage2">STAGE 2</button>
              </div>
            }
            {
              isLandingStage ? 
              <button onClick={landingPageHandler} className="button landing_legs active">
                LANDING LEGS
              </button> :
              <button onClick={landingPageHandler} className="button landing_legs">
                LANDING LEGS
              </button>
            }
          </div>
  )
}

export default Buttons