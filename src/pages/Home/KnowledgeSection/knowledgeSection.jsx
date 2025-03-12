import React, { useEffect, useRef } from 'react';
import './knowledgeSection.css';

const KnowledgeSection = () => {
  const topLeftRef = useRef(null);
  const bottomRightRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 1]
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        const element = entry.target;
        if (element.classList.contains('sticky-card')) {
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
            element.classList.add('stuck');
          } else {
            element.classList.remove('stuck');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (topLeftRef.current) {
      observer.observe(topLeftRef.current);
    }
    if (bottomRightRef.current) {
      observer.observe(bottomRightRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="knowledge-section" ref={containerRef}>
      <div className="knowledge-header">
        <h2>Knowledge</h2>
        <button className="discover-button">Discover all</button>
      </div>

      <div className="knowledge-grid">
        {/* Top Left Card */}
        <div>
        <div className="grid-item sticky-card" ref={topLeftRef}>
          <div className="card blue-card">
            <span className="tag">Headless</span>
            <h3>Rethinking Headless commerce</h3>
            <svg className="homeArrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        </div>
        {/* Top Right Image */}
        <div className="grid-item knowledge-image-container">
          <img 
            src="./assets/images2.jpg" 
            alt="Person walking down stairs"
            className="grid-image"
          />
        </div>

        {/* Bottom Left Image */}
        <div className="grid-item knowledge-image-container">
          <img 
            src="./assets/image3.jpg" 
            alt="People in office"
            className="grid-image"
          />
        </div>

        {/* Bottom Right Card */}
        <div>
        <div className="grid-item sticky-card" ref={bottomRightRef}>
          <div className="card gold-card">
            <span className="tag">NFT Success</span>
            <h3>Beyond the products</h3>
            <svg className="homeArrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay ahead</h2>
          <p>Subscribe to our newsletter for a roundup of the latest in ecommerce, straight to your inbox.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email" />
            <button type="submit">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;