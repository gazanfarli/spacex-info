import React from 'react';
import "./index.css";
import Header from "../../components/Header";
import RecentLaunches from "../../components/RecentLaunches";

function Main() {
  return (
    <div className='main'>
        <Header />
        <div className='wrapper'>
          <RecentLaunches />
        </div>
    </div>
  )
}

export default Main;