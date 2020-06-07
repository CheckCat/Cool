import React, { Component } from "react";
import Illustration from "./Illustration";
import "./style.css";

class Illustrations extends Component {
  render() {
    return (
      <div className="container">
        <Illustration
          image="./image/suka.jpg"
          title="Собака сутулая купи мне беляш"
          text="беляшСобака сутулая купи мне беляшСобака сутулая купи мне беляшСобака сутулая купи мне "
          flag
        />
        <Illustration
          image="./image/suka.jpg"
          title="Собака сутулая купи мне беляш"
          text="беляшСобака сутулая купи мне беляшСобака сутулая купи мне беляшСобака сутулая купи мне "
          
        />
        <Illustration
          image="./image/suka.jpg"
          title="Собака сутулая купи мне беляш"
          text="беляшСобака сутулая купи мне беляшСобака сутулая купи мне беляшСобака сутулая купи мне "
          flag
        />
      </div>
    );
  }
}

export default Illustrations;
