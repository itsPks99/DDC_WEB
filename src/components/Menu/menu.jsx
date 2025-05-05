import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./menu.css";
import { HiArrowUpRight } from "react-icons/hi2"; // Importing an icon from react-icons
import { MdArrowOutward } from "react-icons/md";
import ArrowOutward from "../../../public/assets/arrowOutward.png"; // Importing an SVG icon


export default function Menu({ pageColor = "#E31E24" }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMouseOut = () => {
    setIsOpen(false);
  };

  const handleMouseOver = () => {
    setIsOpen(true);
  };

  // Handle clicks outside the menu to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="menu-container">
      {/* Menu Button - hidden when menu is open */}
      <button onClick={() => setIsOpen(true)} className={`menu-button ${isOpen ? "menu-button-hidden" : ""}`}>
        {/* <div className="menu-icon-circle">
          <div className="menu-icon-hamburger">
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div> */}
        <span className="menu-text">Explore  <img style={{height:'23px', paddingLeft:'5px'}} src={ArrowOutward}/></span>
      </button>

      {/* Menu Panel */}
      <div
        className={`menu-panel ${isOpen ? "menu-open" : "menu-closed"}`}
        ref={menuRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {[
          // { name: "Expertise", path: "/expertise" },
          // { name: "Blog", path: "/blog" },
          // { name: "OurWork", path: "/our-work" },
          { name: "Contact", path: "/contact" },
          { name: "About", path: "/about" },
          { name: "Home", path: "/" }
        ].map((item) => (
          <Link key={item.name} to={item.path} className="menu-item" onClick={() => setIsOpen(false)}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
