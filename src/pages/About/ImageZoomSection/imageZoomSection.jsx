import React, { useEffect, useRef, useState } from "react";
import "./imageZoomSection.css";

const ImageZoom = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.clientHeight;
      const scrollY = window.scrollY;
      const scrollPosition = Math.max(0, scrollY - sectionTop);

      const maxScale = 1.2; // Maximum zoom-in level
      const minScale = 0; // Starting scale
      const zoomFactor = 1+ (scrollPosition / sectionHeight) * 0.2; // Adjust zoom speed

      let newScale = Math.min(Math.max(zoomFactor, minScale), maxScale);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="imageZoomWrapper">
      <div className="imageZoomSection" ref={sectionRef}>
        <img
          ref={imageRef}
          src="./assets/about_image1.jpg"
          alt="Zoom Image"
          className="zoomImage"
          style={{ transform: `scale(${scale})` }}
        />
      </div>
    </div>
  );
};

export default ImageZoom;
