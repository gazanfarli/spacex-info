import React from 'react'

function Buttons(
    {
        isOverview,
        isStage1,
        isStage2,
        overviewHandler,
        stage1Handler, 
        stage2Handler,
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
          </div>
  )
}

export default Buttons