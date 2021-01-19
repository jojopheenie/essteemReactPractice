import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import {welcome, Contact, Story} from './component'

class Routes extends Component {
  render() {
    return (
      <Switch>
      <Route exact path="/" component={welcome} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Story" component={Story} />
      </Switch>
    )
  }
}

export default Routes
