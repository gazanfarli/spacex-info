import React from 'react';

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
            <div className="parameter_value">12.2 m | 39.9 ft</div>
          </li>
          <li className="parameter_item">
            <div>MASS</div>
            <div className="parameter_value">1420788 kg | 3125735 lb</div>
          </li>
          <li className="parameter_item">
            <div>LEO</div>
            <div className="parameter_value">63800 kg | 140660 lb</div>
          </li>
          <li className="parameter_item">
            <div>GTO</div>
            <div className="parameter_value">26700 kg | 58860 lb</div>
          </li>
          <li className="parameter_item">
            <div>MARS</div>
            <div className="parameter_value">16800 kg | 37040 lb</div>
          </li>
          <li className="parameter_item">
            <div>PLUTO</div>
            <div className="parameter_value">3500 kg | 7720 lb</div>
          </li>
        </ul>
      )
  )
}

export default OverviewList