import React from 'react'
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addNote } from './actions/notes'
import getVisibleNotes from './selectors/notes'

const store = configureStore()
store.dispatch(
  addNote({
    noteTitle: 'My first note',
    noteBody: 'Body of my first note.',
    createdAt: 10
  })
)
store.dispatch(
  addNote({
    noteTitle: 'My note',
    noteBody: 'Body of my note. Blah blah blah',
    createdAt: 50
  })
)
store.dispatch(
  addNote({
    noteTitle: 'My stuff',
    noteBody: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quam officia possimus asperiores eius? Eligendi ab iusto velit eius perspiciatis.',
    createdAt: 30
  })
)

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
