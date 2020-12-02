export default function Loader() {
  // Credit: https://dribbble.com/shots/5092176-Newton-Loader
  // https://codepen.io/avstorm/pen/QZEKWr

  return (
    <div className="empty-list empty-list--loading"> 
      <p className="t-empty">Todo list is loading, please wait 🚶...</p>   
      <div className="gooey">
        <span className="dot"></span>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}
