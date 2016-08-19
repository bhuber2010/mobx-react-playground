import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Dropdown from './components/dropdown';


class App extends Component {
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
          <DevTools />
        </nav>
        <Dropdown appState={this.props.appState} />
      </div>
    )
  }

};

export default App;
