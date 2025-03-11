import React, { useEffect, useState } from 'react';
import './ourExpertise.css';

const OurExpertise = () => {
  const [showOur, setShowOur] = useState(false);
  const [showExpertise, setShowExpertise] = useState(false);
  const [activeSection, setActiveSection] = useState('strategy');

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setShowOur(true), 300);
    setTimeout(() => setShowExpertise(true), 1000);
  }, []);

  const toggleSection = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  return (
    <div className="expertise-container">
      <div className="expertise-title">
        <h1>
          <span className={`title-our gilroy-bold ${showOur ? 'visible' : ''}`}>Our</span>{' '}
          <span className={`title-expertise gilroy-bold ${showExpertise ? 'visible' : ''}`}>expertise</span>
        </h1>
      </div>

      <div className="expertise-sections">
        <div className={`expertise-section ${activeSection === 'strategy' ? 'active' : ''}`}>
          <div className="section-header" onClick={() => toggleSection('strategy')}>
            <h2>Strategy</h2>
          </div>
          <div className="section-content">
            <p>
              We're your strategic partner, deeply understanding your brand's essence
              with a dedicated product owner for each project, crafting personalized,
              data-informed strategies that put you ahead of the competition.
            </p>
            <button className="read-more-btn">Read more</button>
          </div>
        </div>

        <div className={`expertise-section ${activeSection === 'creative' ? 'active' : ''}`}>
          <div className="section-header" onClick={() => toggleSection('creative')}>
            <h2>Creative</h2>
          </div>
          <div className="section-content">
            <p>
              Our creative team brings your vision to life with innovative designs
              and compelling content that resonates with your target audience.
            </p>
            <button className="read-more-btn">Read more</button>
          </div>
        </div>

        <div className={`expertise-section ${activeSection === 'technology' ? 'active' : ''}`}>
          <div className="section-header" onClick={() => toggleSection('technology')}>
            <h2>Technology</h2>
          </div>
          <div className="section-content">
            <p>
              We leverage cutting-edge technologies to build robust, scalable solutions
              that drive your business forward in the digital landscape.
            </p>
            <button className="read-more-btn">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;