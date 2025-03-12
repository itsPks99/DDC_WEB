import '@/index.css';
import { useEffect, useRef } from "react";
import "./buildNewCommerce.css";

const BuildNewCommerce = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const leftCardRef = useRef(null)
  const rightCardRef = useRef(null)
  const personImageRef = useRef(null)
  const brandCardRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    const leftCard = leftCardRef.current
    const rightCard = rightCardRef.current
    const personImage = personImageRef.current
    const brandCard = brandCardRef.current

    const handleMouseMove = (e) => {
      // Calculate mouse position relative to the center of the section
      const rect = section.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate distance from center (normalized between -1 and 1)
      const distanceX = (e.clientX - centerX) / (rect.width / 2)
      const distanceY = (e.clientY - centerY) / (rect.height / 2)

      // Text follows cursor direction (subtle movement)
      text.style.transform = `translate(${distanceX * 15}px, ${distanceY * 10}px)`

      // Images move in opposite direction (more pronounced movement)
      leftCard.style.transform = `translate(${-distanceX * 25}px, ${-distanceY * 15}px)`
      rightCard.style.transform = `translate(${-distanceX * 25}px, ${-distanceY * 15}px)`
      personImage.style.transform = `translate(${-distanceX * 20}px, ${-distanceY * 10}px)`
      brandCard.style.transform = `translate(${-distanceX * 30}px, ${-distanceY * 20}px)`
    }

    section.addEventListener("mousemove", handleMouseMove)

    return () => {
      section.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="build-commerce-section" ref={sectionRef}>
      <div className="commerce-container">
        <div className="stats-cards">
          <div className="stat-card conversion-card" ref={leftCardRef}>
            <div className="card-content">
              <p className="gilroy-heavy ">Conversion rate increase</p>
              <h3 className="card-value">+12%</h3>
              <div className="chart">
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
                <div className="bar bar-4"></div>
              </div>
            </div>
          </div>

          <div className="stat-card brands-card" ref={rightCardRef}>
            <div className="card-content">
              <p className="card-label">Brands moved to Shopify</p>
              <h3 className="card-value">150+</h3>
              <div className="arrow-up">↑</div>
            </div>
          </div>
        </div>

        <div className="headline-container" ref={textRef}>
          <h1 className="headline gilroy-heavy">
            <span className="headline-dark">We build </span>
            <span className="headline-light">the next</span>
            <br />
            <span className="headline-dark">in commerce.</span>
          </h1>
        </div>

        <div className="info-cards">
          <div className="info-card person-card" ref={personImageRef}>
            <div className="card-content">
              <p className="card-subtitle">Beyond Headless</p>
              <h3 className="card-title">
                Shopify
                <br />
                Simplified
              </h3>
            </div>
          </div>

          <div className="info-card brand-card" ref={brandCardRef}>
            <div className="card-content">
              <h3 className="card-title">Brand stories</h3>
              <div className="product-image">
                <img src="/placeholder.svg?height=150&width=250" alt="Product" />
              </div>
              <div className="podcast-link">
                <p>Listen to our podcast</p>
                <span className="arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildNewCommerce

