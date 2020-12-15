import React from 'react'
import { Provider } from 'react-redux'
import moment from 'moment'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addNote } from './actions/notes'


const store = configureStore()
store.dispatch(
  addNote({
    noteTitle: 'My first note',
    noteBody: 'Body of my first note.',
    createdAt: moment().startOf('month').valueOf()
  })
)
store.dispatch(
  addNote({
    noteTitle: 'My note',
    noteBody: 'Body of my note. Blah blah blah',
    createdAt: moment().subtract('5 days').valueOf()
  })
)
store.dispatch(
  addNote({
    noteTitle: 'My stuff',
    noteBody: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quam officia possimus asperiores eius? Eligendi ab iusto velit eius perspiciatis.',
    createdAt: moment().startOf('year').valueOf()
  })
)

// const state = store.getState()
// const visibleNotes = getVisibleNotes(state.notes, state.filters)

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
