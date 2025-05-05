import React, { useEffect, useState, useRef } from 'react';
import './highlightCards.css';
import { useNavigate } from 'react-router-dom';



const HighlightCards = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();


  // Set up Intersection Observer to detect when component is in viewport
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.3, // Trigger when 30% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // When the component enters the viewport
        if (entry.isIntersecting) {
          setIsExpanded(true);
        } else {
          // When the component exits the viewport
          setIsExpanded(false);
        }
      });
    }, options);

    // Start observing the container
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Clean up the observer when component unmounts
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Manual toggle function (keep this for the button)
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const highlightCards = [
    {
      id: 1,
      title: 'Social Media',
      color: '#e75a87',
      image: './assets/highlightedCards/socialMedia.png',
      // position: { x: 350, y: -50 }
    },
    {
      id: 2,
      title: 'Photography',
      color: '#1a365d',
      image: './assets/highlightedCards/photography.png',
      position: { x: 200, y: 200 }
    },
    {
      id: 3,
      title: 'Web/App Development',
      color: '#5d3319',
      image: './assets/highlightedCards/WebDev.png',
      position: { x: 0, y: -20 }
    },
    {
      id: 4,
      title: 'Branding',
      color: '#dc2626',
      image: './assets/highlightedCards/branding.png',
      position: { x: -200, y: 150 }
    },
    {
      id: 5,
      title: 'Performance Marketing',
      color: '#fce7f3',
      image: './assets/highlightedCards/branding.png',
      position: { x: -350, y: -50 }
    },
  ];

  return (
    <div className="highlight-container" ref={containerRef}>
      {/* <h1 className="highlight-title gilroy-heavy">Trusted by the finest</h1> */}
      
      <button 
        className="highlight-button"
        onClick={toggleExpand}
      >
        Highlighted cases
      </button>
      
      <div className={`highlightCards-container ${isExpanded ? 'expanded' : ''}`
    
    }
    // onClick={navigate("/case-study-1")}
    >
        {highlightCards.map((highlightCard, index) => (
          <div 
            key={highlightCard.id}
            className="highlightCard"
            // data-position-x={highlightCard.position.x}
            // data-position-y={highlightCard.position.y}
            style={{ 
              backgroundColor: highlightCard.color,
              zIndex: highlightCards.length - index,
              // transform: isExpanded 
              //   ? `translate(${highlightCard.position.x}px, ${highlightCard.position.y}px) rotate(${getRandomRotation()}deg)`
              //   : `translate(${index * 10}px, ${index * 10}px) rotate(${index * 2}deg)`
            }
          }
          >
            <div className="highlightCard-title">{highlightCard.title}</div>
            {highlightCard.image && (
              <div className="highlighthighlightCard-image-container">
                <img src={highlightCard.image || "/placeholder.svg" } 
                alt={highlightCard.title} 
                className="highlighthighlightCard-image" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to add slight random rotation
const getRandomRotation = () => {
  return Math.random() * 4 - 2; // Random rotation between -2 and 2 degrees
};

export default HighlightCards;