import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"; 

function Nav() {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <h1>H.A</h1>
      </div>

      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
       
      </div>
    </nav>
  );
}

export default Nav;





