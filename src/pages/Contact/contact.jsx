import '@/index.css';
import { motion, useAnimation } from 'framer-motion';
import { ArrowLeft, Check, Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ArrowButton from '../../components/ArrowHover/arrowhover';
import './contact.css';

const Contact = () => {
  const [currentView, setCurrentView] = useState('main');
  const [email, setEmail] = useState('');
  const [positions, setPositions] = useState({});
  const [copied, setCopied] = useState(false);
  const controls = useAnimation();

  const [isHovered, setIsHovered] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: '',
    country: '',
    phone: '',
    industry: '',
    revenue: '',
    service: '',
    source: ''
  });

  const calculateRandomPositions = () => {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    const margin = 100; // Minimum distance between elements
    
    const positions = [];
    const getRandomPosition = () => {
      let attempts = 0;
      let position;
      
      do {
        position = {
          left: Math.random() * (containerWidth - 300),
          top: Math.random() * (containerHeight - 300)
        };
        
        // Check if this position overlaps with any existing positions
        const overlaps = positions.some(pos => 
          Math.abs(pos.left - position.left) < margin && 
          Math.abs(pos.top - position.top) < margin
        );
        
        if (!overlaps || attempts > 50) {
          positions.push(position);
          return position;
        }
        attempts++;
      } while (true);
    };

    return {
      emailCard: getRandomPosition(),
      callCard: getRandomPosition(),
      joinCard: getRandomPosition(),
      inquiryCard: getRandomPosition(),
      arrowIcon: getRandomPosition(),
      plusIcon: getRandomPosition()
    };
  };

  useEffect(() => {
    setPositions(calculateRandomPositions());
  }, []);

  const handleSubmitInquiry = () => {
    setCurrentView('email');
  };

  const handleEmailNext = (e) => {
    e.preventDefault();
    setCurrentView('project');
  };

  const handleBack = () => {
    setCurrentView(currentView === 'project' ? 'email' : 'main');
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    window.location.reload();
  };

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('sales@askddc.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const dropVariants = {
    initial: {
      y: -1000,
      opacity: 0,
      rotate: -10,
    },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
        mass: 2,
        bounce: 0.25,
        delay: i * 0.15,
      },
    }),
  };

  if (currentView === 'email') {
    return (
      <div className="contact-container">
        <div className="logo">ASK Fill Free To Delhi Digital Co.  </div>
        <motion.div 
          className="content-wrapper"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 12 }}
        >
          <h1 className="title">Let's start with<br />your <span className="highlight">email</span></h1>
          <form onSubmit={handleEmailNext} className="email-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="next-button">Next</button>
            <button type="button" className="back-button" onClick={handleBack}>
              <ArrowLeft size={24} /> Back
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  if (currentView === 'project') {
    return (
      <div className="contact-container">
        <div className="logo">ASK Fill Free To Delhi Digital Co.</div>
        <motion.div 
          className="content-wrapper"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 12 }}
        >
          <h1 className="title">Tell us about<br />your <span className="highlight">project!</span></h1>
          <form onSubmit={handleFinalSubmit} className="project-form">
            <div className="form-grid">
              <input
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                required
              />

              <input
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
              <select
                value={formData.jobTitle}
                onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                required
              >
                <option value="">Job title</option>
                <option value="ceo">CEO</option>
                <option value="manager">Manager</option>
                <option value="developer">Developer</option>
              </select>
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <select
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
                required
              >
                <option value="">Country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
              </select>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                required
              >
                <option value="">Industry category</option>
                <option value="tech">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
              </select>


              
              <select
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                required
              >
                <option value="">Which service </option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="consulting">Consulting</option>
              </select>
            </div>
            <button type="submit" className="send-button">Send</button>
            <button type="button" className="back-button" onClick={handleBack}>
              <ArrowLeft size={24} /> Back
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="logo">ASK Fill Free To Delhi Digital Co.</div>
      <div className="main-content">
        <motion.h1 
          className="title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 12 }}
        >
          How can we <span className="highlight">help?</span>
        </motion.h1>
        <div className="floating-elements">
          <motion.div 
            className="contact-card email-card"
            style={{ left: positions.emailCard?.left, top: positions.emailCard?.top }}
            variants={dropVariants}
            initial="initial"
            animate="animate"
            custom={0}
            onClick={handleCopyEmail}
          >
            <span>Email us</span>
            <a onClick={(e) => e.preventDefault()}>
              {copied ? 'Email Copied!' : 'sales@askphill.com'}
            </a>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <Check size={20} />
              </motion.div>
            )}
          </motion.div>

         
          <motion.div 
            className="contact-card call-card"
            style={{ right: positions.callCard?.right, top: positions.callCard?.top }}
            variants={dropVariants}
            initial="initial"
            animate="animate"
            custom={1}
            >
            <span>Call us</span>
            <a href="tel:+31202615080">+31 20 261 5080</a>
          </motion.div>
          <motion.div 
            className="action-card join-card gilroy-heavy"
            style={{ left: positions.joinCard?.left, bottom: positions.joinCard?.bottom }}
            variants={dropVariants}
            initial="initial"
            animate="animate"
            custom={2}
          >
            Join the team
          </motion.div>

          <div
            className={`contactCircle-button ${isHovered ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="circle"></div>
            {/* <span className="yes-text">Yes</span> */}
          </div>
          <motion.div 
            className="action-card inquiry-card gilroy-heavy" 
            onClick={handleSubmitInquiry}
            style={{ right: positions.inquiryCard?.right, bottom: positions.inquiryCard?.bottom }}
            variants={dropVariants}
            initial="initial"
            animate="animate"
            custom={3}
          >
            Submit your inquiry
          </motion.div>

          <motion.div className='arrowhover' style={{width:"60px", height:"60px"}}>
           <ArrowButton/>
          </motion.div>
          
          <motion.div 
            className="circle-icon plus-icon"
            style={{ right: positions.plusIcon?.right, bottom: positions.plusIcon?.bottom }}
            variants={dropVariants}
            initial="initial"
            animate="animate"
            custom={5}
          >
            <Plus size={32} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;