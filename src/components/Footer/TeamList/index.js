import React, { Component } from "react";
import "./style.css";

class TeamList extends Component {
  render() {
    return (
      <div className="team-list">
        <h3>Участники команды «Мяотяны»</h3>
        <ul>
          <li>Данил Гиниятуллин</li>
          <li>Талгат Ситдиков</li>
          <li>Вадим Сабиров</li>
          <li>Руслан Кашин</li>
          <li>Элиза Киреева</li>
        </ul>
      </div>
    );
  }
}

export default TeamList;
