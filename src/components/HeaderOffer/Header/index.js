import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <a href="index.html">
            <img src="./image/logo.svg" alt="logo" />
            <p>EnBot</p>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
