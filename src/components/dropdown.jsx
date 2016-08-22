import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import Game from './game';

@observer
class Dropdown extends Component {
  constructor(props) {
    super()
  }

  componentWillReceiveProps(nextProps) {
    console.log("new props");
  }

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
