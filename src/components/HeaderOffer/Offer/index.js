import React, { Component } from "react";
import "./style.css";

class Offer extends Component {
  render() {
    return (
      <section className="offer">
        <div className="offer-img-container">
          <img src="./image/iphone.png" alt="mockup" className="offer-img" />
          <a href="index.html" className="offer-img-url"></a>
        </div>
        <div className="offer-title">
          <h1>Бот для автоматической генерации стенгазеты</h1>
          <p>
            Мы предлагаем вам попробовать наш продукт - быстрый способ создать
            интересную стенгазету с красивыми и смешными фонами, которая поможет
            вам запечатлеть один из самых важных этапов вашей жизни - выпускной,
            в условиях пандемии.
          </p>
          <button>
            <a href="index.html">Попробовать</a>
          </button>
        </div>
      </section>
    );
  }
}

export default Offer;
