import React from "react";
import "./home.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="outer-div-home">
        <div className="inner-div">
          {/* <h1 className="app-name">Welcome to Global Cuisine</h1> */}
          <h1 className="home-phase">Explore the world</h1>
          <h2 className="below-home-phase">through food</h2>
        </div>
      </div>
    );
  }
}

export default HomePage;
