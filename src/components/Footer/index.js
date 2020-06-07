import React, { Component } from "react";
import FooterLogo from "./FooterLogo";
import TeamList from "./TeamList";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <div className="background-footer">
        <div className="container">
          <footer>
            <FooterLogo />
            <TeamList />
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
