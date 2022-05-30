import React from "react";
import "./index.css";
import Header from "../../components/Header";
import RecentLaunches from "../../components/RecentLaunches";
import UpcomingLaunches from "../../components/UpcomingLaunches";
import Footer from "../../components/Footer";
import Vehicles from "../Vehicles";
import Falcon1 from "../Vehicles/Falcon1";
import Falcon9 from "../Vehicles/Falcon9";
import FalconHeavy from "../Vehicles/FalconHeavy";
import Starship from "../Vehicles/Starship";
import About from "../About";
import RecentLaunchDetail from "../../components/RecentLaunchDetail";
import { Routes, Route } from "react-router-dom";
import Launches from "../Launches";

function Main() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={
          <div className="wrapper">
          <RecentLaunches />
          <UpcomingLaunches />
        </div>
        } />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/falcon1" element={<Falcon1 />}></Route>
        <Route path="/vehicles/falcon9" element={<Falcon9 />}></Route>
        <Route path="/vehicles/falconheavy" element={<FalconHeavy />}></Route>
        <Route path="/vehicles/starship" element={<Starship />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/launch" element={<RecentLaunchDetail />} />
        <Route path="/launches" element={<Launches />} />
      </Routes>
      <div className="wrapper"><Footer /></div>
    </div>
  );
}

export default Main;
