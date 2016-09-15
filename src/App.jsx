import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import DevTools from 'mobx-react-devtools'
import Welcome from './components/welcome'

class AppRouter extends Component {
  render() {
    const welcomeWrapper = () => {
      return <Welcome appState={this.props.appState} />
    }
    return (
      <Router history={browserHistory}>
        <Route path="/" component={welcomeWrapper}>
          {/* <IndexRoute component={Welcome} /> */}
        </Route>
      </Router>
    )
  }

};

export default AppRouter;
