import React, { Component } from "react";
import "./style.css";

class Video extends Component {
  render() {
    return (
      <div className="background-video">
        <div className="video-container">
          <section className="video">
            <div className="overlay"></div>
            <video src="" controls></video>
          </section>
        </div>
      </div>
    );
  }
}

export default Video;
