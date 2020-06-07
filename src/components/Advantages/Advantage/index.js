import React, { Component } from "react";
import "./style.css";

class Advantage extends Component {
  render() {
    let { image, title, text } = this.props;
    return (
      <div className="advantage">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );
  }
}

export default Advantage;
