"use client"

import { useEffect, useState } from "react"
import "./imageSection.css"

const ImageSection = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  // Selected logos from your files
  const logoImages = [
    // Row 1 logos
    "/assets/all_logos/allLogo/MENWORKS LOGO.png",
    "/assets/all_logos/allLogo/Sober.png",
    "/assets/all_logos/allLogo/nauvab logo black.png",
    "/assets/all_logos/allLogo/noua nails logo black.png",
    "/assets/all_logos/allLogo/Ornod black.png",

    // Row 2 logos
    "/assets/all_logos/allLogo/Palashindia Logo_5_5.png",
    "/assets/all_logos/allLogo/please-me_0001_PLEASE-ME-logo-18.png",
    "/assets/all_logos/allLogo/Samsara Logo-01.png",
    "/assets/all_logos/allLogo/black ribion logo png.png",
    "/assets/all_logos/allLogo/00004727-RIOZ FINAL LOGO-05.png",

    // Row 3 logos
    // "/assets/all_logos/allLogo/Seryeon logo-01.png",
    "/assets/all_logos/allLogo/Sitara.png",
    "/assets/all_logos/allLogo/Sober.png",
    "/assets/all_logos/allLogo/logo (1).png",
    "/assets/all_logos/allLogo/suri fresh logo.png",
    "/assets/all_logos/allLogo/logo-geum (1).png",

    // Row 4 logos
    // "/assets/all_logos/allLogo/suri fresh black logo.png",
    "/assets/all_logos/allLogo/The wouff Logo-01.png",
    // "/assets/all_logos/allLogo/logo b.png",
    "/assets/all_logos/allLogo/Vanilla Clothing-18.png",
    "/assets/all_logos/allLogo/black logo.png",
    "/assets/all_logos/allLogo/nakhrali dhani logo.png",
  ]

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    setWindowWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)

    // Add scroll animation
    const handleScroll = () => {
      const rows = document.querySelectorAll(".image-row")
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      rows.forEach((row, index) => {
        const rowElement = row
        const rect = rowElement.getBoundingClientRect()
        const isVisible = rect.top < windowHeight && rect.bottom > 0

        if (isVisible) {
          const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height)
          const clampedProgress = Math.max(0, Math.min(1, scrollProgress))

          const isEven = index % 2 === 0
          const direction = isEven ? -1 : 1
          const maxTranslation = windowWidth > 768 ? 300 : 150
          // Add initial offset for odd rows (rows 1 and 3)
          const initialOffset = !isEven ? -300 : 0

          let translation = initialOffset + direction * maxTranslation * clampedProgress
          translation = Math.max(Math.min(translation, maxTranslation), -maxTranslation)

          rowElement.style.transform = `translateX(${translation}px)`
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Initial call to set positions
    handleScroll()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [windowWidth])

  // Generate rows of logos without text items
  const generateRows = () => {
    const numberOfRows = 4 // You can adjust this as needed
    const logosPerRow = windowWidth > 768 ? 6 : 4 // Adjust based on screen size
    const rows = []
    let logoIndex = 0

    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      const row = []

      for (let i = 0; i < logosPerRow; i++) {
        row.push({
          src: logoImages[logoIndex % logoImages.length],
          alt: `Client logo ${logoIndex + 1}`,
        })
        logoIndex++
      }

      rows.push(row)
    }

    return rows
  }

  const rows = generateRows()

  return (
    <div className="image-section">
      {rows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className={`image-row ${rowIndex % 2 === 0 ? "even" : "odd"}`}>
          {row.map((item, itemIndex) => (
            <div key={`image-${rowIndex}-${itemIndex}`} className="image-item">
              <div className="image-container">
                <img src={item.src || "/placeholder.svg"} alt={item.alt} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ImageSection
