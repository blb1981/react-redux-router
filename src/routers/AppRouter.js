import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import DashboardPage from '../components/DashboardPage'
import CreateNotePage from '../components/CreateNotePage'
import EditNotePage from '../components/EditNotePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

import configureStore from '../store/configureStore'
import { addNote } from '../actions/notes'
import { setTextFilter } from '../actions/filters'
import getVisibleNotes from '../selectors/notes'

const store = configureStore()

store.dispatch(
  addNote({
    noteTitle: 'My first note',
    noteBody: 'Body of my first note.',
  })
)
store.dispatch(
  addNote({
    noteTitle: 'My 2nd note',
    noteBody: 'Body of my 2nd note.',
  })
)
store.dispatch(setTextFilter('2nd'))

const state = store.getState()
const visibleNotes = getVisibleNotes(state.notes, state.filters)
console.log({ visibleNotes })
console.log({ state })

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
