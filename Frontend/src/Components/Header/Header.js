import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <ul className='header'>
          <li ><img className="logo" src= "Images/logo.jpeg" alt='SP Tech srl'/></li>
          <li ><h1 className='heading'><a href="#Home">SP Tech Srl</a></h1></li> 
          <li><a href="#About">About</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Career">Career</a></li>
          <li><a href="#Contacts">Contacts</a></li>
        </ul>
    );

}

export default Header; 