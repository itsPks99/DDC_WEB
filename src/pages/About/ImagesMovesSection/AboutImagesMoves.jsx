import React, { useEffect, useRef } from 'react';
import './AboutImagesMoves.css';

const AboutImagesMoves = () => {
  const containerRef = useRef(null);

  // Sample image URLs from Unsplash
  const imageUrls = [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  ];

  // Create 5 rows of images
  const rows = [
    imageUrls.slice(0, 5),
    imageUrls.slice(3, 8),
    imageUrls.slice(1, 6),
    imageUrls.slice(2, 7),
    imageUrls.slice(0, 5),
  ];

  // Duplicate each row to ensure smooth infinite scrolling
  const createRowImages = (images) => {
    return [...images, ...images, ...images];
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Calculate how much of the container is in view
      const windowHeight = window.innerHeight;
      const visibleTop = Math.max(0, rect.top < 0 ? Math.abs(rect.top) : 0);
      const visibleHeight = Math.min(windowHeight, rect.bottom) - visibleTop;
      const percentVisible = visibleHeight / container.offsetHeight;
      
      // Calculate scroll percentage (0 to 1)
      const scrollPercent = Math.min(1, Math.max(0, percentVisible));
      
      // Apply the scroll percentage as a CSS variable
      container.style.setProperty('--scroll-percent', scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="aboutImagesMoves-images-container scroll-animate" ref={containerRef}>
      {rows.map((row, rowIndex) => (
        <div 
          key={`row-${rowIndex}`} 
          className={`aboutImagesMoves-row ${rowIndex % 2 === 0 ? 'odd' : 'even'}`}
        >
          {createRowImages(row).map((url, imgIndex) => (
            <div key={`img-${rowIndex}-${imgIndex}`} className="aboutImagesMoves-item">
              <img src={url} alt={`Team member ${imgIndex + 1}`} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AboutImagesMoves;