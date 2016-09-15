import React, { Component } from 'react'
import { Link } from 'react-router'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Card from './card'
require('../flex.css')
require('./splash.scss')

class NavBar extends Component {
  render() {
    return (
      <nav className="transparent" ref="nav">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo center">Random Things</Link>
          <ul className="right hide-on-med-and-down">
            <li></li>
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

class Welcome extends Component {

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
    return (
      <div>
        <Splash>
          <NavBar ref="nav"/>
          <div className="page-container" ref="page">
            <Card />
            <Card />
          </div>
        </Splash>
        {this.props.children}
      </div>
    )
  }
}

export default Welcome
