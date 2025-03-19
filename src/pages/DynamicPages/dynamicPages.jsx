import React, { useState, useEffect } from 'react';
import './dynamicPages.css';
import { useLocation } from 'react-router-dom';

// Brand data
const brandsData = {
  "gaurav-gupta": {
    name: "GAURAV GUPTA",
    logo: "./ALL LOGOS/hi market/Hi Pink Logo.png?height=100&width=200&text=GAURAV+GUPTA",
    title: "The Brand",
    description: "Gaurav Gupta is an Indian fashion designer known for his avant-garde designs and sculptural silhouettes.",
    longDescription: "Launched in 2005, Gaurav Gupta's designs feature a mix of traditional Indian craftsmanship with modern, futuristic elements, resulting in a unique and sophisticated aesthetic.",
    bannerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-17%20164821-iqUns8QU07W8aBbJtKoe4KE7lhzzq5.png",
    video: "https://example.com/gaurav-gupta-video.mp4",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-17%20164838-HXKONv08oWgbo4rPRH5Th69040sGUS.png", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-17%20164838-HXKONv08oWgbo4rPRH5Th69040sGUS.png"],
    services: ["Digital Marketing", "Marketing", "Sales", "Shopify Development", "Website Maintenance"],
    phases: [
      {
        title: "Phase 1",
        points: [
          "Built the E-commerce platform in the year 2019",
          "Implemented COD and helped the brand find the right shipping partner",
          "Set up event-level analytics for detailed tracking and learning using GA and Heatmap tools.",
          "Added various functionalities to improve UX, order management, security and content management."
        ]
      },
      {
        title: "Phase 2",
        points: [
          "Initiated marketing efforts with the entire setup on Facebook, Shopify, Display Ads, SEM, and Email Marketing.",
          "The average sale increased 20x in crores.",
          "Established international markets in the US and the Middle East for consistent recurring sales and overcame seasonal market fluctuations.",
          "The quarterly growth was approximately around 110% during the covid Pandemic.",
          "Introduced CRM Management"
        ]
      },
      {
        title: "Phase 3",
        points: [
          "Grew sales from a few lacs to more than a crore per month while working with the brand.",
          "Increased the average monthly revenue by 3.5 x over 18 months including the off-seasons.",
          "In the last 5 months, sales grew 6x as compared to the subsequent previous month."
        ]
      }
    ]
  },
  "drzya-by-ridhiee-suuri": {
    name: "DRZYA BY RIDHIEE SUURI",
    logo: "https://placeholder.svg?height=100&width=200&text=DRZYA+BY+RIDHIEE+SUURI",
    title: "The Brand",
    description: "Drzya by Ridhi Suri is an Indian fashion brand known for its luxurious and contemporary designs.",
    longDescription: "Launched in 2013 by Ridhi Suri, a Delhi-based Designer, the brand's designs feature a mix of traditional luxurious Indian fabrics and modern cuts, resulting in a unique and sophisticated aesthetic.",
    bannerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-17%20164821-iqUns8QU07W8aBbJtKoe4KE7lhzzq5.png",
    video: "https://example.com/drzya-video.mp4",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-17%20164838-HXKONv08oWgbo4rPRH5Th69040sGUS.png", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-17%20164838-HXKONv08oWgbo4rPRH5Th69040sGUS.png"],
    services: ["Digital Marketing", "Marketing", "Sales", "Shopify Development", "Website Maintenance"],
    phases: [
      {
        title: "Phase 1",
        points: [
          "Transferred data from Magento to Shopify and customized the site.",
          "Met tight deadlines with code-heavy design.",
          "Smoothly managed inventory from multiple warehouses.",
          "Executed sales promotions punctually.",
          "Optimized website speed for enhanced user experience"
        ]
      },
      {
        title: "Phase 2",
        points: [
          "Saved the brand from shutting down during the pandemic by enabling online sales.",
          "Witnessed 300% growth in the first quarter.",
          "Expanded operations internationally with 40% of sales coming from global customers."
        ]
      },
      {
        title: "Phase 3",
        points: [
          "Implemented advanced analytics for better decision making.",
          "Streamlined order fulfillment process reducing delivery time by 30%.",
          "Integrated multiple payment gateways for international customers."
        ]
      }
    ]
  },
  "masaba": {
    name: "MASABA",
    logo: "https://placeholder.svg?height=100&width=200&text=MASABA",
    title: "The Brand",
    description: "Masaba is a contemporary Indian fashion label known for its quirky prints and modern silhouettes.",
    longDescription: "Founded by Masaba Gupta, the brand combines traditional Indian textiles with contemporary designs, creating a unique fusion style that appeals to the modern Indian woman.",
    bannerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-17%20164821-iqUns8QU07W8aBbJtKoe4KE7lhzzq5.png",
    video: "https://example.com/masaba-video.mp4",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-17%20164838-HXKONv08oWgbo4rPRH5Th69040sGUS.png", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-17%20164838-HXKONv08oWgbo4rPRH5Th69040sGUS.png"],
    services: ["Digital Marketing", "Marketing", "Sales", "Shopify Development", "Website Maintenance"],
    phases: [
      {
        title: "Phase 1",
        points: [
          "Migrated from a custom platform to Shopify Plus.",
          "Integrated inventory management across retail and online channels.",
          "Implemented custom checkout flow for better conversion.",
          "Set up advanced analytics for customer behavior tracking."
        ]
      },
      {
        title: "Phase 2",
        points: [
          "Launched targeted marketing campaigns across social media platforms.",
          "Implemented email marketing automation for abandoned carts and follow-ups.",
          "Optimized product pages for better conversion rates.",
          "Introduced loyalty program for repeat customers."
        ]
      },
      {
        title: "Phase 3",
        points: [
          "Expanded to international markets with localized payment options.",
          "Implemented AI-based product recommendations.",
          "Reduced page load time by 40% through optimization.",
          "Increased mobile conversion rate by 25% through UX improvements."
        ]
      }
    ]
  },
  "ridhi-mehra": {
    name: "RIDHI MEHRA",
    logo: "https://placeholder.svg?height=100&width=200&text=RIDHI+MEHRA",
    title: "The Brand",
    description: "Ridhi Mehra is a luxury Indian fashion brand known for its elegant fusion wear.",
    longDescription: "Established in 2012, Ridhi Mehra's designs blend traditional Indian craftsmanship with contemporary silhouettes, creating sophisticated ensembles for the modern woman.",
    bannerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-17%20164821-iqUns8QU07W8aBbJtKoe4KE7lhzzq5.png",
    video: "https://example.com/ridhi-mehra-video.mp4",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-17%20164838-HXKONv08oWgbo4rPRH5Th69040sGUS.png", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-17%20164838-HXKONv08oWgbo4rPRH5Th69040sGUS.png"],
    services: ["Digital Marketing", "Marketing", "Sales", "Shopify Development", "Website Maintenance"],
    phases: [
      {
        title: "Phase 1",
        points: [
          "Built custom Shopify theme with focus on showcasing detailed embroidery work.",
          "Implemented high-resolution zoom functionality for product images.",
          "Set up size guide and measurement tools for better customer experience.",
          "Created custom product tags for easy navigation."
        ]
      },
      {
        title: "Phase 2",
        points: [
          "Launched Instagram shopping integration for seamless social commerce.",
          "Implemented WhatsApp Business API for personalized customer service.",
          "Created lookbooks and style guides to increase average order value.",
          "Optimized checkout process reducing abandonment by 15%."
        ]
      },
      {
        title: "Phase 3",
        points: [
          "Expanded to international markets with focus on NRI customers.",
          "Implemented virtual try-on feature for select products.",
          "Created exclusive online collections driving 30% increase in sales.",
          "Introduced sustainable packaging initiatives improving brand perception."
        ]
      }
    ]
  },
  "tarun-tahiliani": {
    name: "TARUN TAHILIANI",
    logo: "https://placeholder.svg?height=100&width=200&text=TARUN+TAHILIANI",
    title: "The Brand",
    description: "Tarun Tahiliani is a prominent Indian fashion designer who is widely regarded as one of the leading fashion designers in India.",
    longDescription: "He has been a part of the fashion industry for over three decades and is known for his ethereal ensembles and timeless silhouettes for every occasion.",
    bannerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KjTewtQMKQVR9rGEQC99WewKXfHaWD.png",
    video: "https://example.com/tarun-tahiliani-video.mp4",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nuZglfdJkvlqD43m09dXTXQeKg6SRv.png", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-o4nuGoa3DeLavOhcAp2tQlH0dDSBdV.png"],
    services: ["Design", "Marketing", "Sales", "Shopify Development"],
    phases: [
      {
        title: "Phase 1",
        points: [
          "Developed a custom Shopify theme that showcased the intricate details of bridal wear.",
          "Implemented virtual consultation booking system for bridal clients.",
          "Created a digital catalog of archival designs spanning three decades.",
          "Set up advanced filtering for extensive product categories."
        ]
      },
      {
        title: "Phase 2",
        points: [
          "Launched targeted marketing campaigns for destination weddings.",
          "Created content strategy highlighting the craftsmanship and heritage.",
          "Implemented personalized shopping experience for VIP customers.",
          "Integrated appointment scheduling for store visits and fittings."
        ]
      },
      {
        title: "Phase 3",
        points: [
          "Expanded digital presence to reach global luxury market.",
          "Implemented AR features for select couture pieces.",
          "Created exclusive digital experiences for couture week collections.",
          "Developed custom analytics dashboard for tracking high-value customer journeys."
        ]
      }
    ]
  }
};

const DynamicPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const brandFromUrl = queryParams.get('brand') || 'gaurav-gupta'; // Default brand if no query

  const [activeBrand, setActiveBrand] = useState(brandFromUrl);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (brandsData[brandFromUrl]) {
      setActiveBrand(brandFromUrl);
    }
    setIsVideoLoaded(false); // Reset video loading state when brand changes
  }, [brandFromUrl]);

  const handleBrandClick = (brandKey) => {
    setActiveBrand(brandKey);
    setIsVideoLoaded(false);
  };

  const currentBrand = brandsData[activeBrand];

  return (
    <div className="dynamic-page">
      <div className="sidebar">
        {Object.keys(brandsData).map((brandKey) => (
          <div 
            key={brandKey} 
            className={`sidebar-item ${activeBrand === brandKey ? 'active' : ''}`}
            onClick={() => handleBrandClick(brandKey)}
          >
            {brandsData[brandKey].name} CASE STUDY
          </div>
        ))}
      </div>
      
      <div className="content">
        <div className="banner">
          <img src={currentBrand.bannerImage || "/placeholder.svg"} alt={currentBrand.name} className="banner-image" />
          <div className="banner-overlay">
            <img 
              src={currentBrand.logo || "/placeholder.svg"} 
              alt={`${currentBrand.name} Logo`} 
              className="brand-logo"
            />
          </div>
        </div>
        
        <div className="brand-section">
          <div className="brand-info">
            <h2>{currentBrand.title}</h2>
            <p className="brand-description">{currentBrand.description}</p>
            <p className="brand-long-description">{currentBrand.longDescription}</p>
          </div>
          
          <div className="brand-video">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              className={isVideoLoaded ? 'loaded' : ''}
            >
              <source src={currentBrand.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        <div className="images-section">
          {currentBrand.images.map((image, index) => (
            <div key={index} className="brand-image">
              <img src={image || "/placeholder.svg"} alt={`${currentBrand.name} ${index + 1}`} />
            </div>
          ))}
        </div>
        
        <div className="services-section">
          {currentBrand.services.map((service, index) => (
            <div key={index} className="service-tag">
              {service}
            </div>
          ))}
        </div>
        
        <div className="how-we-did-it">
          <h2>How we did it</h2>
          
          <div className="phases">
            {currentBrand.phases.map((phase, index) => (
              <div key={index} className="phase-card">
                <div className="phase-header">
                  <h3>{phase.title}</h3>
                  <span className="collapse-icon">−</span>
                </div>
                <div className="phase-content">
                  <ul>
                    {phase.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;