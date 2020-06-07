import React, { Component } from "react";
import Advantage from "./Advantage";
import "./style.css";

class Advantages extends Component {
  render() {
    return (
      <div className="container">
        <section className="advantages">
          <h2>Наши преимущества</h2>
          <div className="advantages-container">
            <Advantage
              image="./image/gear.svg"
              title="Удобно"
              text="Автоматическая генерация стенгазеты"
            />
            <Advantage
              image="./image/lightning.svg"
              title="Быстро"
              text="Нет необходимости тратить большое количество времени"
            />
            <Advantage
              image="./image/heart.svg"
              title="Воспоминания"
              text="Возможность запечатлеть события, не выходя из дома"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Advantages;
