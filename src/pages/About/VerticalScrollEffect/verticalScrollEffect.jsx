import React, { useEffect, useRef } from 'react';
import './verticalScrollEffect.css';

const VerticalScrollEffect = () => {
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
  
    const handleWheel = (e) => {
      if (scrollContainer) {
        const direction = Math.sign(e.deltaY);
        const scrollAmount = 350; // Adjust based on card width
  
        // Current scroll position
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const currentScroll = scrollContainer.scrollLeft;
  
        // Allow normal scrolling if at first or last card
        if ((currentScroll === 0 && direction < 0) || (currentScroll >= maxScroll && direction > 0)) {
          return; // Let normal page scroll happen
        }
  
        e.preventDefault(); // Prevent default only when scrolling within the section
        scrollContainer.scrollLeft += direction * scrollAmount;
      }
    };
  
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    }
  
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);
  
  return (
    <div className="VerticalScrollEffectSection">
      <div className="VerticalScrollEffectTitleContainer">
        <h2 className="VerticalScrollEffectTitle">Our Journey</h2>
      </div>
      
      <div className="VerticalScrollEffectCardSection" ref={scrollContainerRef}>
        <div className="VerticalScrollEffectCard">
          <div className="VerticalScrollEffectCardImage">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="Team collaboration" />
          </div>
          <div className="VerticalScrollEffectCardContent">
            <h3>The Beginning</h3>
            <p>In 2018, our team came together with a shared vision to revolutionize the industry with innovative solutions.</p>
          </div>
        </div>
        
        <div className="VerticalScrollEffectCard">
          <div className="VerticalScrollEffectCardImage">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Office workspace" />
          </div>
          <div className="VerticalScrollEffectCardContent">
            <h3>First Milestone</h3>
            <p>By 2019, we had successfully launched our first product and secured our initial round of funding.</p>
          </div>
        </div>
        
        <div className="VerticalScrollEffectCard">
          <div className="VerticalScrollEffectCardImage">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Team meeting" />
          </div>
          <div className="VerticalScrollEffectCardContent">
            <h3>Growing Team</h3>
            <p>2020 marked a year of significant growth as we expanded our team and opened our first international office.</p>
          </div>
        </div>
        
        <div className="VerticalScrollEffectCard">
          <div className="VerticalScrollEffectCardImage">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Product launch" />
          </div>
          <div className="VerticalScrollEffectCardContent">
            <h3>Market Expansion</h3>
            <p>In 2021, we entered new markets across Europe and Asia, bringing our solutions to a global audience.</p>
          </div>
        </div>
        
        <div className="VerticalScrollEffectCard">
          <div className="VerticalScrollEffectCardImage">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Business growth" />
          </div>
          <div className="VerticalScrollEffectCardContent">
            <h3>Today</h3>
            <p>Now, we're a team of over 100 professionals dedicated to creating innovative solutions  </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalScrollEffect;