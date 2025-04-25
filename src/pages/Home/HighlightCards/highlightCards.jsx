import React, { useEffect, useState } from 'react';
import './highlightCards.css';

const HighlighthighlightCards = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-expand on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const highlightCards = [
    {
      id: 1,
      title: 'The Good Roll',
      color: '#e75a87',
      image: 'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      position: { x: 350, y: -50 }
    },
    {
      id: 2,
      title: 'Patta',
      color: '#1a365d',
      image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      position: { x: 200, y: 200 }
    },
    {
      id: 3,
      title: 'PAUW',
      color: '#5d3319',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      position: { x: 0, y: -20 }
    },
    {
      id: 4,
      title: 'OBEY',
      color: '#dc2626',
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      position: { x: -200, y: 150 }
    },
    {
      id: 5,
      title: 'Naked Copenhagen',
      color: '#fce7f3',
      image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      position: { x: -350, y: -50 }
    },
  ];

  return (
    <div className="highlight-container">
      {/* <h1 className="highlight-title gilroy-heavy">Trusted by the finest</h1> */}
      
      <button 
        className="highlight-button"
        onClick={toggleExpand}
      >
        Highlighted cases
      </button>
      
      <div className={`highlightCards-container ${isExpanded ? 'expanded' : ''}`}>
        {highlightCards.map((highlightCard, index) => (
          <div 
            key={highlightCard.id}
            className="highlightCard"
            data-position-x={highlightCard.position.x}
            data-position-y={highlightCard.position.y}
            style={{ 
              backgroundColor: highlightCard.color,
              zIndex: highlightCards.length - index,
              transform: isExpanded 
                ? `translate(${highlightCard.position.x}px, ${highlightCard.position.y}px) rotate(${getRandomRotation()}deg)`
                : `translate(${index * 10}px, ${index * 10}px) rotate(${index * 2}deg)`
            }}
          >
            <div className="highlightCard-title">{highlightCard.title}</div>
            {highlightCard.image && (
              <div className="highlighthighlightCard-image-container">
                <img src={highlightCard.image} alt={highlightCard.title} className="highlighthighlightCard-image" />
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

export default HighlighthighlightCards;