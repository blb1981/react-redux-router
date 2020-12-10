import React from 'react'
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addNote } from './actions/notes'
import { setTextFilter } from './actions/filters'
import getVisibleNotes from './selectors/notes'

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

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
