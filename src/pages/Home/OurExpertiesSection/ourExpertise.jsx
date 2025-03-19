import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ourExpertise.css';

const OurExpertise = () => {
  const [showOur, setShowOur] = useState(false);
  const [showExpertise, setShowExpertise] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShowOur(true), 300);
    setTimeout(() => setShowExpertise(true), 1000);
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleRedirect = () => {
    navigate("/dynamic-pages"); // Redirects user on button click
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
        {['strategy', 'creative', 'technology'].map((section) => (
          <div key={section} className={`expertise-section ${activeSection === section ? 'active' : ''}`}>
            <div className="section-header" onClick={() => toggleSection(section)}>
              <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
            </div>
            <div className="section-content">
              <p>
                {section === 'strategy' && "We're your strategic partner, deeply understanding your brand's essence with a dedicated product owner for each project, crafting personalized, data-informed strategies that put you ahead of the competition."}
                {section === 'creative' && "Our creative team brings your vision to life with innovative designs and compelling content that resonates with your target audience."}
                {section === 'technology' && "We leverage cutting-edge technologies to build robust, scalable solutions that drive your business forward in the digital landscape."}
              </p>
              <button className="read-more-btn" onClick={handleRedirect }>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExpertise;
