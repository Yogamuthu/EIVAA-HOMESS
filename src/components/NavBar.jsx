import React from "react";
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/eivaa_icon.png";
import "../assets/css/navbar.css";

const NavBar = () => {

  const handleNavClick = () => {
    const navbar = document.getElementById("navbarNav");
    const bsCollapse = new window.bootstrap.Collapse(navbar, {
      toggle:false
    });
    bsCollapse.hide();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3 shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={handleNavClick}>
        <img className="img-fluid rounded mx-auto" src={logo} alt="Logo" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center text-md-start text-lg-start d-flex">
            <li className="nav-item me-lg-4">
              <NavLink  to="/" onClick={handleNavClick} className={({ isActive }) =>`nav-link custom-link ${isActive ? "active" : ""}`}
              end
              >HOME</NavLink>
            </li>
            <li className="nav-item me-lg-4">
              <NavLink to="/about-us" onClick={handleNavClick} className={({ isActive }) =>`nav-link custom-link ${isActive ? "active" : ""}`}>
                ABOUT US
              </NavLink>
              {/* <NavLink className="nav-link" to="/about-us">ABOUT US</NavLink> */}
            </li>
            <li className="nav-item me-lg-4">
              <NavLink to="/gallery" onClick={handleNavClick} className={({ isActive }) =>`nav-link custom-link ${isActive ? "active" : ""}`}>GALLERY</NavLink>
            </li>
            <li className="nav-item me-lg-4">
              <NavLink to="/projects" onClick={handleNavClick} className={({ isActive }) =>`nav-link custom-link ${isActive ? "active" : ""}`}>PROJECTS</NavLink>
            </li>
            <li className="nav-item me-lg-5">
              <NavLink to="/contact" onClick={handleNavClick} className={({ isActive }) =>`nav-link custom-link ${isActive ? "active" : ""}`}>CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
