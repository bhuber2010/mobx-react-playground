import React, { Component } from 'react'
import { Link } from 'react-router'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Card from './card'
require('../flex.scss')
require('./splash.scss')

class NavBar extends Component {
  render() {
    return (
      <nav className="transparent z-depth-0" ref="nav">
        <div className="nav-wrapper">
          <Link to="/" className="">Random Things</Link>
          <ul id="nav-mobile" className="hide-on-med-and-down">
            <li><Link to="/" className="">About</Link></li>
            <li><Link to="/" className="">Contact</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

class Splash extends Component {
  render() {
    return (
      <div className="splash">{this.props.children}</div>
    )
  }
}

class Hello extends Component {
  render() {
    return (
      <div className="hello-container">
        <div id="hello-box">
          <h1 className="white-text">Johanna Bakes</h1>
          <h4 className="flow-text">Every landing page needs a small description after the big bold title, that's why we added this text here. Add here all the information that can make you or your product create the first impression.</h4>
          <a className="waves-effect waves-light pink btn">Button</a>
        </div>
      </div>
    )
  }
}

class SeeMore extends Component {
  render() {
    return (
      <div id="see-more" className="white-text">
        <div className="waves-effect waves-light">
          <i className="fa fa-chevron-down fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

class Welcome extends Component {
  constructor(props) {
    super()
  }

  componentDidMount() {
    this.refs.page.style.height = `${this.setPageHeight()}px`
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {

  }

  setPageHeight() {
    const navHeight = this.refs.nav.refs.nav.offsetHeight
    return window.innerHeight - navHeight
  }

  render() {
    const cards = this.props.appState.cards
    return (
      <div>
        <Splash>
          <NavBar ref="nav"/>
          <Hello />
          <SeeMore />
        </Splash>
        <div className="page-container" ref="page">
          {cards.map(i => <Card key={i} num={i} appState={this.props.appState} />)}
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Welcome
