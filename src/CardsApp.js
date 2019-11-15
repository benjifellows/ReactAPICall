import React from "react";
import Component from "react";

// const CardsApp = ({ title }) => <div className="header">{title}</div>;
class Card extends Comment {
  render() {
    return (
      <div className="github-pro" style={{ margin: "1rem" }}>
        <div
          className="info"
          style={{ display: "inline-block", marginLeft: 10 }}
        >
          <div className="name" style={{ fontSize: "125%" }}>
            Name here...
          </div>
          <div className="company">Company here...</div>
        </div>
      </div>
    );
  }
}

class CardsApp extends Component {
  render() {
    return (
      <div>
        <div className="header">title</div>
        <Card />
      </div>
    );
  }
}

export default CardsApp;
