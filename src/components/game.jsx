import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Game extends Component {
  render() {
    return (
      <li>
        <div className="collapsible-header indigo darken-4 white-text"><i className="material-icons">filter_drama</i>{this.props.gameData}</div>
        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
      </li>
    )
  }

};

export default Game;
