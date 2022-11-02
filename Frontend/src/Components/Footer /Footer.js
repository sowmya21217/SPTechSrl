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
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Blog</a></li>
                      </ul>
                    </div>
            <ul className="socials">
                <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                <li><a href="/"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="/"><i className="fa fa-youtube"></i></a></li>
                <li><a href="/"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p className="copyright">copyright &copy; <a href="/">Foolish Developer</a>  </p>
                   
        </div>
    </footer>
  );
};
export default Footer;
