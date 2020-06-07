import React, { Component } from "react";
import "./style.css";

class Illustration extends Component {
  state = {
    isOpen: false,
    className: this.isOpen
      ? "illustration-modal-window"
      : "illustration-modal-window hidden",
  };

  render() {
    let { image, title, text, flag } = this.props;
    let content = flag ? (
      <section className="illustration">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <img
          src={image}
          alt={title}
          onClick={this.showModalWindow}
          className="illustration-image"
        />
        <div className={this.state.className}>
          <img src={image} alt={title} />
          <div className="delete-image">
            <span onClick={this.closeModalWindow}></span>
          </div>
        </div>
      </section>
    ) : (
      <section className="illustration">
        <div className={this.state.className}>
          <img src={image} alt={title} />
          <div className="delete-image">
            <span onClick={this.closeModalWindow}></span>
          </div>
        </div>
        <img
          src={image}
          alt={title}
          onClick={this.showModalWindow}
          className="illustration-image"
        />
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </section>
    );
    return content;
  }

  showModalWindow = () => {
    this.setState({
      isOpen: true,
      className: this.state.isOpen
        ? "illustration-modal-window"
        : "illustration-modal-window hidden",
    });

    console.log(this.state.className);
  };

  closeModalWindow = () => {
    this.setState({
      isOpen: false,
      className: this.state.isOpen
        ? "illustration-modal-window"
        : "illustration-modal-window hidden",
    });
  };
}

export default Illustration;
