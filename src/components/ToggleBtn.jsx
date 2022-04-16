import "../styles/scss/components/ToggleBtn.scss"

const ToggleBtn = (props) => {
  return (
    <div className="toggleBtn">
      <div className="btn-container">
        <button
          className={props.term === "long_term" ? "btn-active btn" : "btn"}
          onClick={() => props.set_term("long_term")}
        >
          All Time
        </button>
      </div>
      <div className="btn-container">
        <button
          className={props.term === "medium_term" ? "btn-active btn" : "btn"}
          onClick={() => props.set_term("medium_term")}
        >
          Last 6 Months
        </button>
      </div>
      <div className="btn-container">
        <button
          className={props.term === "short_term" ? "btn-active btn" : "btn"}
          onClick={() => props.set_term("short_term")}
        >
          Last Month
        </button>
      </div>
    </div>
  )
}

export default ToggleBtn
