"use client"

import { useEffect, useState } from "react"
import "./imageSection.css"

const ImageSection = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    setWindowWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    
    // Add scroll animation
    const handleScroll = () => {
      const rows = document.querySelectorAll('.image-row');
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      rows.forEach((row, index) => {
        const rowElement = row ;
        const rect = rowElement.getBoundingClientRect();
        const isVisible = rect.top < windowHeight && rect.bottom > 0;
        
        if (isVisible) {
          const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
          const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
          
          const isEven = index % 2 === 0;
          const direction = isEven ? -1 : 1;
          const maxTranslation = windowWidth > 768 ? 200 : 100;
         // Add initial offset for odd rows (rows 1 and 3)
      const initialOffset = !isEven ? -130 : 0;
      
      let translation = initialOffset + (direction * maxTranslation * clampedProgress);
      translation = Math.max(Math.min(translation, maxTranslation), -maxTranslation);
          
          rowElement.style.transform = `translateX(${translation}px)`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set positions
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('scroll', handleScroll);
    }
  }, [windowWidth])

  // Words to display in the grid
  const words = ["Trusted", "by", "the", "finest"]

  // Generate placeholder images for the grid
  const generateGridItems = () => {
    // This will create our grid structure with images and text
    const rows = []

    words.forEach((word, rowIndex) => {
      const row = []

      // Number of images before the text (responsive)
      const imagesBeforeText = windowWidth > 768 ? (rowIndex % 2 === 0 ? 2 : 3) : (rowIndex % 2 === 0 ? 1 : 2)

      // Number of images after the text (responsive)
      const imagesAfterText = windowWidth > 768 ? (rowIndex % 2 === 0 ? 3 : 3) : (rowIndex % 2 === 0 ? 3 : 3)

      

      // Add images before text
      for (let i = 0; i < imagesBeforeText; i++) {
        row.push({
          type: "image",
          src: `./assets/card1images.jpeg`,
          alt: `Team member ${rowIndex * 5 + i}`,
        })
      }

      // Add text
      row.push({
        type: "text",
        content: word,
      })

      // Add images after text
      for (let i = 0; i < imagesAfterText; i++) {
        row.push({
          type: "image",
          src: `./assets/card1images.jpeg`,
          alt: `Team member ${rowIndex * 5 + imagesBeforeText + i}`,
        })
      }

      rows.push(row)
    })

    return rows
  }

  const gridItems = generateGridItems()

  return (
    <div className="image-section">
      {gridItems.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className={`image-row ${rowIndex % 2 === 0 ? "even" : "odd"}`}>
          {row.map((item, itemIndex) =>
            item.type === "text" ? (
              <div key={`text-${rowIndex}-${itemIndex}`} className="text-item">
                <h2>{item.content}</h2>
              </div>
            ) : (
              <div key={`image-${rowIndex}-${itemIndex}`} className="image-item">
                <div className="image-container">
                  <img src={item.src || "/placeholder.svg"} alt={item.alt} />
                </div>
              </div>
            ),
          )}
        </div>
      ))}
    </div>
  )
}

export default ImageSection