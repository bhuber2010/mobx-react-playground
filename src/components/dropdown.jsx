import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class Dropdown extends Component {
  render() {
    return (
      <ul className='collapsible' data-collapsible="accordion">
        <li>
          <div className="collapsible-header indigo darken-4 white-text"><i className="material-icons">filter_drama</i>First</div>
          <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
        </li>
        <li>
          <div className="collapsible-header indigo darken-4 white-text"><i className="material-icons">filter_drama</i>Second</div>
          <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
        </li>
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
