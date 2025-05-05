import React, { useState } from 'react';
import './connectWithUs.css';
import Link from 'react-router-dom'; // Import Link for navigation

const ConnectWithUs = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   service: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Add your form submission logic here
  // };

  return (
    <div className="connect-with-us-container">
      {/* Top Section */}
      <div className="cta-section">
        <h2 className="cta-heading">Want to scale your brand?</h2>
        <a href="https://api.whatsapp.com/send?phone=8527274859" className="connect-button">
      
  <img 
    src="/images/whatsapp-icon.png" 
    alt="WhatsApp" 
    className="whatsapp-icon-img" 
    width="24" 
    height="24" 
  />
  CONNECT WITH US
</a>
      </div>
    

      {/* Contact Form Section */}
      {/* <div className="contact-form-section">
        <h2 className="form-heading">LET'S GET IN TOUCH</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="E-mail" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input 
            type="tel" 
            name="phone" 
            placeholder="Your Number" 
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select 
            name="service" 
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>Select Services</option>
            <option value="branding">Branding</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
            <option value="development">Development</option>
          </select>
          <textarea 
            name="message" 
            placeholder="Message" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-button">SUBMIT</button>
        </form>
      </div> */}
    </div>
  );
};

export default ConnectWithUs;