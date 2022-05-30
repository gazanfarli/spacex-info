import React from "react";
import "./index.css";
import Navbar from "../Navbar";
import HeaderInfo from "../HeaderInfo";
import { Routes, Route } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Routes>
        <Route
          path="/"
          element={
            <div className="header_home">
              <Navbar />
              <HeaderInfo />
            </div>
          }
        />
        <Route path="/launches" element={<Navbar />}/>
        <Route path="/vehicles" element={<Navbar />}/>
        <Route path="/launch" element={<Navbar />} />
        <Route path="/about" element={<Navbar />}/>
      </Routes>
    </div>
  );
}

export default Header;
