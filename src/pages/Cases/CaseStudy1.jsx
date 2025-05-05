"use client"

import { useEffect, useRef } from "react"
import "./caseStudy1.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const CaseStudy1 = () => {
  const imageRefs = useRef([])
  const sectionRef = useRef(null)
  const fallAnimationsRef = useRef([])
  const scrollAnimationsRef = useRef([])

  useEffect(() => {
    // Get viewport dimensions
    const viewportHeight = window.innerHeight
    const viewportWidth = window.innerWidth

    // Define distinct positions for each image to prevent overlap
    // These positions are percentages of the viewport width
    const imagePositions = [
      { left: "5%", right: "auto" }, // Far left
      { left: "auto", right: "5%" }, // Far right
      { left: "30%", right: "auto" }, // Center left
      { left: "auto", right: "30%" }, // Center right
      { left: "50%", right: "auto", transform: "translateX(-50%)" }, // Center
    ]

    // Set very large vertical spacing between images (100% of viewport)
    const verticalSpacing = viewportHeight * 1.0

    // Apply initial positions and setup animations
    imageRefs.current.forEach((img, i) => {
      if (!img) return

      // Apply horizontal position
      gsap.set(img, {
        left: imagePositions[i].left,
        right: imagePositions[i].right,
        transform: imagePositions[i].transform || "none",
      })

      // Calculate staggered starting positions with large gaps
      const startY = -viewportHeight * 0.5 - i * verticalSpacing

      // Set initial position
      gsap.set(img, {
        y: startY,
        opacity: 1,
      })

      // Create continuous falling animation (separate from scroll effect)
      const fallTl = gsap.timeline({
        repeat: -1,
        onRepeat: () => {
          // Reset to top position when animation repeats
          gsap.set(img, {
            y: -viewportHeight * 0.5 - i * verticalSpacing,
          })
        },
      })

      // Add the falling animation - very slow for smooth movement
      fallTl.to(img, {
        y: viewportHeight * 1.5 + (imageRefs.current.length - i) * verticalSpacing,
        duration: 40 + i * 2, // Longer duration for smoother movement
        ease: "none",
        immediateRender: false,
      })

      // Store the animation for later control
      fallAnimationsRef.current[i] = fallTl

      // Create separate scroll-based animation for each image
      // This will override the y position from the falling animation when scrolling
      scrollAnimationsRef.current[i] = gsap.timeline({
        paused: true,
      })

      // Define the scroll animation - move from -100% to +100% based on scroll
      scrollAnimationsRef.current[i].fromTo(
        img,
        {
          yPercent: -10, // Start position for scroll effect
        },
        {
          yPercent: 100, // End position for scroll effect
          ease: "none",
          duration: 1, // Duration is controlled by ScrollTrigger scrub
        },
      )
    })

    // Create scroll trigger that controls both animations
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        // Get scroll progress (0 to 1)
        const progress = self.progress

        // Get scroll direction and velocity
        const direction = self.direction > 0 ? 1 : -1
        const velocity = Math.min(Math.abs(self.getVelocity() / 3000), 1.5)

        // Update scroll animations based on scroll progress
        scrollAnimationsRef.current.forEach((anim, i) => {
          if (anim) {
            anim.progress(progress)
          }
        })

        // Adjust falling animation speed based on scroll direction and velocity
        fallAnimationsRef.current.forEach((anim) => {
          if (anim) {
            // When scrolling down, speed up falling (timeScale > 1)
            // When scrolling up, slow down or reverse falling (timeScale < 1 or negative)
            const newTimeScale = 1 + direction * velocity
            anim.timeScale(newTimeScale)
          }
        })
      },
    })

    // Handle window resize
    const handleResize = () => {
      const newViewportHeight = window.innerHeight
      const newVerticalSpacing = newViewportHeight * 1.0

      // Kill all animations
      fallAnimationsRef.current.forEach((anim) => anim && anim.kill())
      scrollAnimationsRef.current.forEach((anim) => anim && anim.kill())

      // Recreate animations with new dimensions
      imageRefs.current.forEach((img, i) => {
        if (!img) return

        // Apply horizontal position
        gsap.set(img, {
          left: imagePositions[i].left,
          right: imagePositions[i].right,
          transform: imagePositions[i].transform || "none",
        })

        // Calculate new staggered starting position
        const startY = -newViewportHeight * 0.5 - i * newVerticalSpacing

        gsap.set(img, {
          y: startY,
        })

        // Recreate falling animation
        const fallTl = gsap.timeline({
          repeat: -1,
          onRepeat: () => {
            gsap.set(img, {
              y: -newViewportHeight * 0.5 - i * newVerticalSpacing,
            })
          },
        })

        fallTl.to(img, {
          y: newViewportHeight * 1.5 + (imageRefs.current.length - i) * newVerticalSpacing,
          duration: 40 + i * 2,
          ease: "none",
          immediateRender: false,
        })

        fallAnimationsRef.current[i] = fallTl

        // Recreate scroll animation
        scrollAnimationsRef.current[i] = gsap.timeline({
          paused: true,
        })

        scrollAnimationsRef.current[i].fromTo(
          img,
          {
            yPercent: -10,
          },
          {
            yPercent: 100,
            ease: "none",
            duration: 1,
          },
        )
      })

      // Refresh ScrollTrigger
      ScrollTrigger.refresh()
    }

    window.addEventListener("resize", handleResize)

    // Clean up
    return () => {
      fallAnimationsRef.current.forEach((anim) => anim && anim.kill())
      scrollAnimationsRef.current.forEach((anim) => anim && anim.kill())
      scrollTrigger.kill()
      window.removeEventListener("resize", handleResize)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="case1-section" ref={sectionRef}>
      <h1 className="case1-title">OBEY</h1>
      <div className="case1-images">
        <img
          ref={(el) => (imageRefs.current[0] = el)}
          src="/assets/image1.jpg"
          alt="OBEY fashion item 1"
          className="case1-img img1"
        />
        <img
          ref={(el) => (imageRefs.current[1] = el)}
          src="/assets/image2.jpg"
          alt="OBEY fashion item 2"
          className="case1-img img2"
        />
        <img
          ref={(el) => (imageRefs.current[2] = el)}
          src="/assets/image3.jpg"
          alt="OBEY fashion item 3"
          className="case1-img img3"
        />
        <img
          ref={(el) => (imageRefs.current[3] = el)}
          src="/assets/image4.jpg"
          alt="OBEY fashion item 4"
          className="case1-img img4"
        />
        <img
          ref={(el) => (imageRefs.current[4] = el)}
          src="/assets/image5.jpg"
          alt="OBEY fashion item 5"
          className="case1-img img5"
        />
      </div>
    </div>
  )
}

export default CaseStudy1
