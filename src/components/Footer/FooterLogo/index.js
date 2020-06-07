import React, { Component } from "react";
import "./style.css";

class FooterLogo extends Component {
  render() {
    return (
      <div className="logo">
        <a href="index.html">
          <img src="./image/logo.svg" alt="logo" />
          <p>EnBot</p>
        </a>
      </div>
    );
  }
}

export default FooterLogo;
