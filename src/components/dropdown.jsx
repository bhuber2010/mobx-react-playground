import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Game from './game';

@observer
class Dropdown extends Component {

  render() {
    return (
      <ul className='collapsible' data-collapsible="accordion">
        {this.props.appState.apiData.map(g => <Game key={g.ID} gameData={g} />)}
      </ul>
    )
  }

  // toggleT = () => {
  //   this.props.appState.toggleTimer()
  // }
  //
  // onType = (e) => {
  //   this.props.appState.setName(e.target.value)
  // }
};

export default Dropdown;
