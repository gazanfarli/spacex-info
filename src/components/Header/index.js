import React from 'react';
import "./index.css";
import Navbar from "../Navbar";
import HeaderInfo from "../HeaderInfo";

function Header() {
  return (
    <div className='header'>
        <Navbar />
        <HeaderInfo />
    </div>
  )
}

export default Header;