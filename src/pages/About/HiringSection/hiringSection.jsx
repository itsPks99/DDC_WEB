import { ArrowRight } from "lucide-react";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import "./hiringSection.css";

const JobButton = ({ children, className, startPosition, direction }) => {
  // Only apply horizontal movement with no vertical change
  const parallax = useParallax({
    translateX: direction === "right" ? [startPosition, startPosition +20] : [startPosition, startPosition - 20],
    translateY: [0, 0], // Keep vertical position fixed
  })

  return (
    <div ref={parallax.ref} className={`job-button ${className}`}>
      {children}
    </div>
  )
}

const HiringSection = () => {
  return (
    <ParallaxProvider>
      <section className="hiring-section">
        <div className="hiring-header">
          <div className="hiring-title">
            <h1>Hiring</h1>
            <div className="hiringcircle-icon">
              <ArrowRight size={24} />
            </div>
          </div>
          <button className="discover-button">Discover all</button>
        </div>

        <div className="jobs-container">
          <div className="job-row row-1">
            <JobButton className="frontend-developer" startPosition={0} direction="right">
              Front-End Developer
            </JobButton>
          </div>

          <div className="job-row row-2">
            <JobButton className="shopify-developer" startPosition={0} direction="left">
              Shopify Developer
            </JobButton>
          </div>

          <div className="job-row row-3">
            <JobButton className="lead-engineer" startPosition={0} direction="left">
              Entry-Level Lead Engineer
            </JobButton>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  )
}

export default HiringSection

