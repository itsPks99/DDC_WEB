import React, { useEffect, useRef } from 'react';
import './imageSection.css';

const ImageSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    const rows = section.querySelectorAll('.image-row');
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the section we've scrolled (0 to 1)
      const scrollProgress = (scrollPosition - sectionTop + windowHeight) / (sectionHeight + windowHeight);
      
      // Apply different translation to even and odd rows
      rows.forEach((row, index) => {
        const isEven = index % 2 === 0;
        const direction = isEven ? -1 : 1; // Even rows move right to left, odd rows move left to right
        const maxTranslation = 200; // Maximum pixels to translate
        
        // Calculate translation based on scroll position
        let translation = direction * maxTranslation * scrollProgress;
        
        // Limit translation to a reasonable range
        translation = Math.max(Math.min(translation, maxTranslation), -maxTranslation);
        
        row.style.transform = `translateX(${translation}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set positions
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Sample data for images - replace with your actual images
  const images = [
    // Row 1
    [
      { src: "./assets/card1images.jpeg", alt: "Team member 1" },
      { text: "Built" },
      { src: "./assets/card1images.jpeg", alt: "Team member 2" },
      { src: "./assets/card1images.jpeg", alt: "Team member 3" },
      { src: "./assets/card1images.jpeg", alt: "Team member 4" },
      { src: "./assets/card1images.jpeg", alt: "Team member 3" },
      { src: "./assets/card1images.jpeg", alt: "Team member 4" }
    ],
    // Row 2
    [
      { src: "./assets/card1images.jpeg", alt: "Team member 5" },
      { src: "./assets/card1images.jpeg", alt: "Team member 6" },
      { src: "./assets/card1images.jpeg", alt: "Team member 7" },
      { text: "by" },
      { src: "./assets/card1images.jpeg", alt: "Team member 8" },
      { src: "./assets/card1images.jpeg", alt: "Team member 9" },
      { src: "./assets/card1images.jpeg", alt: "Team member 3" },
      { src: "./assets/card1images.jpeg", alt: "Team member 4" }
    ],
    // Row 3
    [
      { src: "./assets/card1images.jpeg", alt: "Team member 14" },
      { src: "./assets/card1images.jpeg", alt: "Team member 3" },
      { src: "./assets/card1images.jpeg", alt: "Team member 10" },
      { src: "./assets/card1images.jpeg", alt: "Team member 11" },
      { text: "the" },
      { src: "./assets/card1images.jpeg", alt: "Team member 12" },
      { src: "./assets/card1images.jpeg", alt: "Team member 13" },
      { src: "./assets/card1images.jpeg", alt: "Team member 14" },
      { src: "./assets/card1images.jpeg", alt: "Team member 3" },
      { src: "./assets/card1images.jpeg", alt: "Team member 4" }
    ],
    // Row 4
    [
      { src: "./assets/card1images.jpeg", alt: "Team member 15" },
      { src: "./assets/card1images.jpeg", alt: "Team member 16" },
      { text: "ambitious" },
      { src: "./assets/card1images.jpeg", alt: "Team member 17" },
      { src: "./assets/card1images.jpeg", alt: "Team member 18" },
      { src: "./assets/card1images.jpeg", alt: "Team member 3" },
      { src: "./assets/card1images.jpeg", alt: "Team member 4" },
      { src: "./assets/card1images.jpeg", alt: "Team member 3" },
      { src: "./assets/card1images.jpeg", alt: "Team member 4" }
    ]
  ];
  return (
    <div className="image-section" ref={sectionRef}>
      {images.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className={`image-row ${rowIndex % 2 === 0 ? 'even' : 'odd'}`}>
          {row.map((item, itemIndex) => (
            item.text ? (
              <div key={`text-${rowIndex}-${itemIndex}`} className="text-item">
                <h2>{item.text}</h2>
              </div>
            ) : (
              <div key={`image-${rowIndex}-${itemIndex}`} className="image-item">
                <div className="image-container">
                  <img src={item.src || "/placeholder.svg"} alt={item.alt} />
                </div>
              </div>
            )
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageSection;



