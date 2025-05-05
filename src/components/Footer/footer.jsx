
import { useEffect, useRef, useState } from "react";
import "./footer.css";
import Link from "react-router-dom";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("nl-NL", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );
  const footerRef = useRef(null);

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("nl-NL", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    const menuContainer = document.querySelector(".menu-container");

    if (!menuContainer || !footerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Hide menu when footer is visible
          if (entry.isIntersecting) {
            menuContainer.style.opacity = "0";
            menuContainer.style.visibility = "hidden";
            menuContainer.style.pointerEvents = "none";
          } else {
            menuContainer.style.opacity = "1";
            menuContainer.style.visibility = "visible";
            menuContainer.style.pointerEvents = "auto";
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the footer is visible
    );

    observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className="footerBody" ref={footerRef}>
      {/* Work With Us Section */}
      <section className="work-with-us">
        <div className="container">
          <h2 className="work-with-us-title gilroy-heavy" style={{color: "white"}}>
            Are you ready to
            <br/>
            <span style={{color:"#a1a1a1"}}>work with us?</span>
          </h2>
          <div
            className={`yes-button ${isHovered ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="circle"></div>
            <span className="yes-text">Yes</span>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* Left Column - Main Links */}
            <div className="footer-column footer-main-links">
              <ul>
                <li><a href="#">Our work</a></li>
                <li><a href="#">Expertise</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><Link to='/contactUs'>Contact Us</Link> </li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>

            {/* Middle Column - Services */}
            <div className="footer-column footer-services">
              <ul>
                <li><a href="#">Strategy</a></li>
                <li><a href="#">Creative</a></li>
                <li><a href="#">Technology</a></li>
              </ul>
            </div>

            {/* Right Column - Contact Info */}
            <div className="footer-column footer-contact">
              <div className="location">
                <h3>
                Time  <span style={{ fontWeight: "bold" }}>{time}</span>
                </h3>
                <p>'s-Gravenhekje 1a</p>
                <p>1011 TG Amsterdam</p>
                <p>The Netherlands</p>
                <p>+31 20 261 5080</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-policies">
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Terms & Conditions</a>
              <span className="copyright">
                © 2025 <a href="https://delhidigital.co/">Delhi Digital Co.</a> All rights reserved.
              </span>
            </div>
            <div className="footer-social">
              <a href="#" className="social-icon linkedin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="social-icon instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-icon github">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
