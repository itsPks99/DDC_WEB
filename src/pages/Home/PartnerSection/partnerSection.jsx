import { useEffect, useRef } from "react"
import "./partnerSection.css"

const PartnerSection = () => {
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)

  useEffect(() => {
    // Initial animation to reveal cards in sequence
    const card1 = card1Ref.current
    const card2 = card2Ref.current
    const card3 = card3Ref.current

    setTimeout(() => {
      card1.classList.add("card-revealed")
    }, 300)

    setTimeout(() => {
      card2.classList.add("card-revealed")
    }, 500)

    setTimeout(() => {
      card3.classList.add("card-revealed")
    }, 700)
  }, [])

  return (
    <section className="partner-section">
      <div className="partner-container">
        <div className="partner-content">
          <div className="partner-heading gilroy-heavy">
            <h2>
              Partner       
              <br />
              insuccess
              <br />
              stories
            </h2>
            <a href="#" className="partner-button">
              See our work
            </a>
          </div>

          <div className="partner-cards">
            <div className="partner-card card-1" ref={card1Ref}>
              <div className="card-image">
                <img src="./assets/card1images.jpeg?height=300&width=500" alt="Mr Marvis" className="card-img" />
              </div>
              <div className="card-title-wrapper">
                <h3 className="card-title gilroy-bold">Mr Marvis</h3>
              </div>
            </div>

            <div className="partner-card card-2" ref={card2Ref}>
              <div className="card-title-wrapper">
                <h3 className="card-title gilroy-bold">Patta</h3>
              </div>
              <div className="card-image">
                <img src="./assets/card1images.jpeg?height=300&width=500" alt="Patta" className="card-img" />
              </div>
            </div>

            <div className="partner-card card-3" ref={card3Ref}>
              
              <div className="card-info">
                <div className="card-title-wrapper">
                  <h3 className="card-title gilroy-bold">Tony's</h3>
                  <h3 className="card-subtitle gilroy-bold">Chocolonely</h3>
                </div>
                <div className="shopify-badge ">Shopify Plus</div>
              </div>
              <div className="card-image">
                <img src="./assets/card1images.jpeg?height=300&width=500" alt="Tony's Chocolonely" className="card-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerSection

