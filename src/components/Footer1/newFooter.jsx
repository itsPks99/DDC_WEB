import React from 'react';
import { FaBehance, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './newFooter.css';

const NewFooter = () => {
  return (
    <footer className="newfooter-container">

      <section className="work-with-us">
        <div className="container">
          <h2 className="work-with-us-title" style={{ color: "white" }}>
            Are you ready to
            <br />
            <span style={{ color: "#a1a1a1" }}>work with us?</span>
          </h2>
        </div>
      </section>


      <div className="newfooter-content">
        <div className="newfooter-title-container">
          <h1 className="newfooter-title"> Delhi Digital Co </h1>
        </div>

        <div className="newfooter-nav-container">
          <div className="newfooter-social-left">
            <a href="https://facebook.com" className="newfooter-social-icon">
              <FaFacebook />
            </a>
            <a href="https://behance.com" className="newfooter-social-icon newfooter-whatsapp">
              <FaBehance />
            </a>

          </div>

          <div className="newfooter-nav">
            <a href="/privacy" className="newfooter-link">Privacy Policy</a>
            <a href="/terms" className="newfooter-link">Terms of Services</a>
            <a href="/contact" className="newfooter-link">Contact Us</a>
            <a href="/refund" className="newfooter-link">Refund Policy</a>
          </div>

          <div className="newfooter-social-right">
            <a href="https://twitter.com" className="newfooter-social-icon">
              <FaTwitter />
            </a>
            <a href="https://instragram.com" className="newfooter-social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="newfooter-copyright">
          © {new Date().getFullYear()} Delhi Digital Co. | All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;