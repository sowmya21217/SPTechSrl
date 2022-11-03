import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
           <div className="footer-content">
           <div className="footer-menu">
                      <ul className="f-menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/Services">Services</a></li>
                        <li><a href="/Contacts">Contact</a></li>
                        
                      </ul>
                    </div>
            <ul className="socials">
                <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                <li><a href="/"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="/"><i className="fa fa-youtube"></i></a></li>
                <li><a href="https://www.linkedin.com/company/86815580/admin/"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p className="copyright">copyright &copy; <a href="/">2022 SP Tech Srl Company.  All rights reserved</a></p>
                   
        </div>
    </footer>
  );
};
export default Footer;
