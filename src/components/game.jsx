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
          <div>{`${this.props.gameData.AwayTeam} @ ${this.props.gameData.HomeTeam}`}</div>
          <div className="">{this.gTime}</div>
        </div>
        <div className="collapsible-body">
          <ul className="collection">
            <li className="collection-item">
              <b>Away Team Spread:</b> {this.props.gameData.Odds[0].PointSpreadAway}
            </li>
            <li className="collection-item">
              <b>Home Team Spread:</b> {this.props.gameData.Odds[0].PointSpreadHome}
            </li>
          </ul>
        </div>
      </li>
    )
  }

};

export default Game;
