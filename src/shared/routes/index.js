import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import asyncComponent from './AsyncComponent'

const AsyncHome = asyncComponent(() => import('pages/Home'))
const Routes = () => (
  <main style={{minHeight: '100vh'}}>
    <Switch>
      <Route exact path="/" component={AsyncHome} />

      <Redirect from="*" to="/" />
    </Switch>
  </main>
)

export default Routes
