import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2 className="logo">Stocker</h2>
          <p>
            Our innovative real estate solutions with real-time visualization
            and predictive analytics help you make better decisions with
            confidence.
          </p>

          <div className="store-buttons">
            <a href="https://play.google.com/store/apps/details?id=com.nextbillion.groww&hl=en_IN">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsmbC8M-e4BCx-lE9TV6DMrKhjKHle-omyg&s"
              alt="App Store"
              style={{"paddingBottom":"10px","paddingLeft":"10px","color":"white",}}
            /></a>
            <a href="https://play.google.com/store/apps/details?id=com.fusionmedia.investing">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              style={{"paddingBottom":"10px","paddingLeft":"10px"}}
            /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Support</h3>
          <ul>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>Mumbai, Maharashtra - 401208</p>
          <p>info@stocker.com</p>
          <p>+91 98704 44559</p>

          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © Stocker. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
