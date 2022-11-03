import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <img className="logo" src="Images/logo1.jpeg" alt="SP Tech srl" />
      <a href="/" className="brand-name">
        SP Tech Srl
        <p className="tag">Solution For every Tech</p> 
      </a> 
      
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
        <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Services">Services</a>
          </li>
          <li>
            <a href="/Career">Career</a>
          </li>
          <li>
            <a href="/Contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
