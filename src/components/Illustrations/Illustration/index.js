import React, { Component } from "react";
import "./style.css";

class Illustration extends Component {
  render() {
    let { image, title, text, flag } = this.props;
    let content = flag ? 
      <section className="illustration">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <img src={image} alt={title} />
      </section>
      : 
      <section className="illustration">
        <img src={image} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </section>
    ;
    return content;
  }
}

export default Illustration;
