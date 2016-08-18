import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.toggleT}>
          Seconds passed: {this.props.appState.timer}
        </button>
        <button onClick={this.decTimer}>-</button>
        <button onClick={this.incTimer}>+</button>
        <button onClick={this.onReset}>Reset</button>
        <br />
        <input onChange={this.onType} />
        <p>{this.props.appState.name}</p>
        <DevTools />
      </div>
    );
  }

  incTimer = () => {
    this.props.appState.increaseTimer()
  }

  decTimer = () => {
    this.props.appState.decreaseTimer()
  }

  toggleT = () => {
    this.props.appState.toggleTimer()
  }

  onReset = () => {
    this.props.appState.resetTimer()
  }

  onType = (e) => {
    this.props.appState.setName(e.target.value)
  }
};

export default App;
