import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Game from './components/game';

@observer
class Dropdown extends Component {
  const apidata = ["Game 1", "Game 2"]
  const games = apidata.map(game => (<Game gameData={game} />))
  render() {
    return (
      <ul className='collapsible' data-collapsible="accordion">
        {games}
      </ul>
    )
  }

  toggleT = () => {
    this.props.appState.toggleTimer()
  }

  onType = (e) => {
    this.props.appState.setName(e.target.value)
  }
};

export default Dropdown;
