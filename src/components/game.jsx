import React, { Component } from 'react';
import { observer } from 'mobx-react';
import moment from 'moment';

class Game extends Component {
  constructor(props) {
    super()
    this.gTime = this.formatTime(props.gameData.MatchTime)
  }

  formatTime(time) {
    return moment(time).format('MMMM Do YYYY')
  }

  render() {
    return (
      <li>
        <div className="collapsible-header flex-space-between indigo darken-4 white-text">
          <div>{`${this.props.gameData.HomeTeam} VS ${this.props.gameData.AwayTeam}`}</div>
          <div className="">{this.gTime}</div>
        </div>
        <div className="collapsible-body"><p>Odds: {this.props.gameData.Odds[0].PointSpreadAway}</p></div>
      </li>
    )
  }

};

export default Game;
