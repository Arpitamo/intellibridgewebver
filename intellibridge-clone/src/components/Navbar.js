import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
/*import heroBg from "../styles/hero-bg.jpg"; */

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="nav">
        <h1 className="logo">Intellibridge</h1>
        {/*for logo?*/}
              {/*<div className="imgg">
                <img src={heroBg} alt="Background visual" />
              </div>*/}
        <ul>
          <li><Link to="/"></Link></li> {/*single page navigation*/}
          <li><a href="#services">Services</a></li>{/*a for external navigation*/}
          <li><a href="#domains">Domains</a></li>
          <li><a href="#whyus">Why Us</a></li>
          <li><a href="#form">Contact</a></li>
          <li><a href="#form" className="startbtn">Get Started</a></li>
        </ul>
      </div>
    </nav>
  );
}