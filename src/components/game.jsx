import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Game extends Component {
  constructor(props) {
    super()

  }

  render() {
    return (
      <li>
        <div className="collapsible-header indigo darken-4 white-text"><i className="material-icons">filter_drama</i>{`${this.props.gameData.HomeTeam} VS ${this.props.gameData.AwayTeam}`}</div>
        <div className="collapsible-body"><p>Odds: {this.props.gameData.Odds[0].PointSpreadAway}</p></div>
      </li>
    )
  }

};

export default Game;
