"use client"

import { useState } from "react"
import "./ourExpertise.css"

const OurExpertise = () => {
  const [expandedSection, setExpandedSection] = useState("Samsara")

  const handleSectionClick = (section) => {
    setExpandedSection(section)
  }

  const handleVisitSite = (e, url) => {
    e.stopPropagation()
    window.open(url, "_blank")
  }

  const expertiseData = [
    {
      name: "SAMSARA",
      description:
        "Rooted in tradition, infused with wanderlust — Samsara is more than just a gin brand, it’s a sensory journey. We partnered with them to build a digital and creative ecosystem that mirrors the richness of their craft. From brand to bottle to browser, everything was designed to make you feel something.",
      services: [
        "Website Development",
        "Social Media Management",
        "* Performance Marketing",
        "Photography",
        "Videography",
      ],
      url: "https://samsara.com",
    },
    {
      name: "AMARA",
      description:
        "A luxury skincare brand that combines ancient wisdom with modern science. Our partnership transformed their digital presence and elevated their brand identity across all touchpoints, resulting in a 200% increase in online engagement and sales.",
      services: ["Branding", "E-commerce Development", "Content Strategy", "Influencer Marketing", "Packaging Design"],
      url: "",
    },
    {
      name: "HI MARKET",
      description:
        "A modern marketplace rethinking the way everyday essentials reach your plate. For Hi Market, we took over social media to help the brand speak directly to its audience — consistently, creatively, and with a tone as fresh as their salads.",
      services: ["Social media management"],
      url: "",
    },
    {
      name: "SURI",
      description:
        "From orchard to bottle, Suri Fresh Extract is redefining how India experiences fruit — with cold-pressed juices, natural extracts, and a commitment to purity. We partnered with them to bring that same freshness to their digital presence: vibrant visuals, a seamless website, and social media that speaks the brand’s language.",
      services: ["Website Development", "Social Media Management", "Photography", "Videography"],
      url: "https://suri.com",
    },
    {
      name: "FLLAE",
      description:
        "Fllae is a luxury western prêt label that celebrates bold femininity and effortless glam. From cocktails to confetti, their pieces are designed for main characters only. We’ve partnered with Fllae to bring that energy to life on digital — from scroll-stopping social content to editorial-style visuals that capture their statement-making vibe.",
      services: [
        "Social Media Management",
        "Photography",
        "Videography",
        
      ],
      url: "https://fllae.com",
    },
  ]

  return (
    <div className="expertise-container">
      <div className="expertise-title">
        <h1>
          <span className="title-our">Our</span> <span className="title-expertise">Expertise</span>
        </h1>
      </div>

      <div className="expertise-sections">
        {expertiseData.map((section) => (
          <div
            key={section.name}
            className={`expertise-section ${expandedSection === section.name ? "expanded" : ""}`}
            onClick={() => handleSectionClick(section.name)}
          >
            <div className="section-header">
              <h2>{section.name}</h2>
            </div>

            {expandedSection === section.name && (
              <div className="section-expanded-content">
                <div className="content-left">
                  <p>{section.description}</p>
                  {section.url != "" && (
                    <button className="visit-site-btn" onClick={(e) => handleVisitSite(e, section.url)}>
                    Visit Site
                  </button>
                  )}
                  
                </div>
                <div className="content-right">
                  <div className="service-tags">
                    {section.services.map((service, index) => (
                      <span key={index} className="service-tag">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurExpertise
