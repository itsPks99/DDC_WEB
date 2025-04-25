import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ourExpertise.css';

const OurExpertise = () => {
  const [showOur, setShowOur] = useState(false);
  const [showExpertise, setShowExpertise] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShowOur(true), 300);
    setTimeout(() => setShowExpertise(true), 1000);
  }, []);

  const handleRedirect = (section) => {
    const brandMapping = {
      Samsara: "Samsara",
      Amara: "Amara",
      Himarket: "Hi market",
      Suri: "Suri",
      Fllae: "Fllae",
      uxui: "gaurav-gupta",
      branding: "drzya-by-ridhiee-suuri",
      content: "masaba",
    };

    navigate(`/dynamic-pages?brand=${brandMapping[section]}`);
  };

  return (
    <div className="expertise-container">
      <div className="expertise-title">
        <h1>
          <span className={`title-our gilroy-bold ${showOur ? 'visible' : ''}`}>Our</span>{' '}
          <span className={`title-expertise gilroy-bold ${showExpertise ? 'visible' : ''}`}>Expertise</span>
        </h1>
      </div>

      <div className="expertise-sections">
        {[
          'Samsara',
          'Amara',
          'Hi market',
          'Suri',
          'Fllae'].map((section) => (
          <div key={section} className="expertise-section">
            <div className="section-header">
              <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
            </div>
            <div className="section-content">
              <p>
                {section === 'Samsara' && "We craft personalized, data-driven strategies to keep you ahead of the competition."}
                {section === 'Amara' && "Our design team brings your vision to life with compelling storytelling and visuals."}
                {section === 'Hi market' && "Using cutting-edge technology, we build scalable digital solutions for your brand."}
                {section === 'Suri' && "We implement powerful marketing campaigns to drive engagement and conversions."}
                {section === 'Fllae' && "We implement powerful marketing campaigns to drive engagement and conversions."}
              </p>
              <button className="read-more-btn" onClick={() => handleRedirect(section)}>
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExpertise;
