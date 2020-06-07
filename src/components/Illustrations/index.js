import React, { Component } from "react";
import Illustration from "./Illustration";
import "./style.css";

class Illustrations extends Component {
  render() {
    return (
      <div className="container">
        <Illustration
          image="./image/sample.jpg"
          title="Заголовок"
          text="Текст"
          flag
        />
        <Illustration
          image="./image/sample.jpg"
          title="Заголовок"
          text=""
          
        />
        <Illustration
          image="./image/sample.jpg"
          title="Заголовок"
          text="Текст"
          flag
        />
      </div>
    );
  }
}

export default Illustrations;
