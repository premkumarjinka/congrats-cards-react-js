const element = (
  // Write your code here.
  <div className="backgroundImage">
    <h1>Congratulations</h1>
    <div className="colorBg">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1>Kiran V</h1>
      <p>Prem Institute of Technology Rajanna Siricilla</p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
