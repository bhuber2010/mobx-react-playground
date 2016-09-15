import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Dropdown from './dropdown';
require('./flex.css');

class TenorioBets extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper orange darken-2">
            <a href="#!" className="brand-logo center">Tenorio Bets</a>
            <ul className="right hide-on-med-and-down">
              <li></li>
            </ul>
          </div>
        </nav>
        <Dropdown appState={this.props.appState} />
      </div>
    )
  }

};

export default TenorioBets;
