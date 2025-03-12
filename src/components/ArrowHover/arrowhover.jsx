import "./arrowhover.css"

const ArrowButton = ({ onClick, className = "", ariaLabel = "Next" }) => {
  return (
    <button className={`arrowhover ${className}`} onClick={onClick} aria-label={ariaLabel}>
      <div className="icon-container">
        <div className="arrow-icon">
          <svg width="150" height="150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="new-icon">
        <svg width="150" height="150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </button>
  )
}

export default ArrowButton

