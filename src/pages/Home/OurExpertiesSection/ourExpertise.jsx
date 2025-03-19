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

  const handleRedirect = (section) => {
    const brandMapping = {
      strategy: "gaurav-gupta",
      creative: "drzya-by-ridhiee-suuri",
      technology: "masaba",
      marketing: "ridhi-mehra",
      analytics: "tarun-tahiliani",
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
          'strategy',
          'creative',
          'technology',
          'marketing',
          'analytics',
          'uxui',
          'branding',
          'content'
        ].map((section) => (
          <div key={section} className={`expertise-section ${activeSection === section ? 'active' : ''}`}>
            <div className="section-header" onClick={() => toggleSection(section)}>
              <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
            </div>
            <div className="section-content">
              <p>
                {section === 'strategy' && "We craft personalized, data-driven strategies to keep you ahead of the competition."}
                {section === 'creative' && "Our design team brings your vision to life with compelling storytelling and visuals."}
                {section === 'technology' && "Using cutting-edge technology, we build scalable digital solutions for your brand."}
                {section === 'marketing' && "We implement powerful marketing campaigns to drive engagement and conversions."}
                {section === 'analytics' && "Data-driven insights help optimize performance and maximize ROI."}
                {section === 'uxui' && "We create intuitive and seamless digital experiences for your audience."}
                {section === 'branding' && "We develop strong brand identities that resonate with your target market."}
                {section === 'content' && "Our content strategies elevate your brand’s voice and storytelling."}
              </p>
              <button className="read-more-btn" onClick={() => handleRedirect(section)}>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExpertise;
