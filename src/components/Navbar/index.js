import React from 'react';
import "./index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to={"/launches"}>LAUNCHES</Link></li>
            <li><Link to="/vehicles">VEHICLES</Link></li>
            <li><a href="https://www.starlink.com/map">STARLINK</a></li>
            <li><Link to="/about">ABOUT</Link></li>
        </ul>
    </div>
  )
}

export default Navbar;