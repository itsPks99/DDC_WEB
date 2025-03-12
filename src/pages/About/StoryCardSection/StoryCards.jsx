import '@/index.css';
import React, { useEffect, useRef, useState } from "react";
import ImageZoomSection from "../ImageZoomSection/imageZoomSection";
import "./StoryCards.css";

const StoryCards = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const totalCards = 5;
  const storyCardsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!storyCardsRef.current) return;

      const sectionTop = storyCardsRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const cardHeight = viewportHeight; // Adjust for when to switch cards

      // Calculate which card should be active
      const newActiveIndex = Math.floor((scrollY - sectionTop) / cardHeight);
      if (newActiveIndex >= 0 && newActiveIndex < totalCards) {
        setActiveCardIndex(newActiveIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalCards]);

  return (
    <>
      <div className="storyCardsWrapper" ref={storyCardsRef}>
        <div className="storyCardsSection">
          <h2 className="storyCardsTitle">Started from the bottom</h2>

          <div className="storyCardsStack">
            {[...Array(totalCards)].map((_, index) => (
              <div
                key={index}
                className={`storyCard ${index === activeCardIndex ? "active" : ""}`}
              >
                <div className="storyCardImage">
                  <img
                    src={[
                      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
                      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                    ][index]}
                    alt={`Story card ${index + 1}`}
                  />
                </div>
                <div className="storyCardContent">
                  <span className="storyCardLabel">
                    {["How it all started", "Who is Phill?", "Return to Amsterdam", "First Clients", "Today"][index]}
                  </span>
                  <h3>
                    {[
                      "In 2016, Martijn and Paul set off to the Canton Fair in Gangzhou, China. With a cheap boarding pass in hand and entrepreneurial ambitions in their heads.",
                      "Limited English made navigating the city tough. Behind China's firewall, Google couldn't guide them. Luckily, hotel manager Phill came to the rescue. They knew they could Ask Phill. An idea was born.",
                      "Inspired by Phill, the pair knew they could help D2C brands find their way and achieve their goals. Shopify was an emerging platform in Europe, and exactly the right tool for the job.",
                      "By 2017, they had secured their first major clients and began building a reputation for innovative e-commerce solutions that drove real results.",
                      "Now, Ask Phill has grown into a leading e-commerce agency with a global client base and a team of experts dedicated to helping brands succeed in the digital marketplace.",
                    ][index]}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ImageZoomSection />
    </>
  );
};

export default StoryCards;
