import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import DashboardPage from '../components/DashboardPage'
import CreateNotePage from '../components/CreateNotePage'
import EditNotePage from '../components/EditNotePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Single div or child component required for BrowserRouter */}
        <Header />
        {/* Switch required to set up 404 page */}
        <Switch>
          <Route path="/" component={DashboardPage} exact={true} />
          <Route path="/create" component={CreateNotePage} />
          <Route path="/edit/:id" component={EditNotePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
