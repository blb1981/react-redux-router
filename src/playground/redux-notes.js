import React from 'react'
import { createStore, combineReducers } from 'redux'
import { v4 as uuidv4 } from 'uuid'
// combineReducers allows you to use multiple reducers
// Two reducers will be used, one for notes, another for filters

// =============================================================================
// Initial state
// =============================================================================

// const demoState = {
// 	notes: [{
// 		id: 'asdfasdflkj',
// 		noteTitle: 'First note',
// 		noteBody: 'This is the body of my first note.',
// 		createdAt: 0
// 	}],
// 	filters: {
// 		text: 'first',
// 		sortBy: 'date',  // date or name
// 		startDate: undefined,
// 		endDate: undefined
// 	}
// }

// =============================================================================
// Actions needed
// =============================================================================

// ADD_NOTE
// REMOVE_NOTE
// EDIT_NOTE

// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_NAME
// SET_START_DATE
// SET_END_DATE

// ADD_NOTE action generator
const addNote = ({
  id = '',
  noteTitle = '',
  noteBody = '',
  createdAt = 0,
} = {}) => ({
  type: 'ADD_NOTE',
  note: {
    id: uuidv4(),
    noteTitle,
    noteBody,
    createdAt,
  },
})

// =============================================================================
// // Reducers
// =============================================================================

// Notes reducer - default state is empty array
// Define it in a variable
const notesReducerDefaultState = []
const notesReducer = (state = notesReducerDefaultState, actions) => {
  switch (actions.type) {
    case 'ADD_NOTE':
      return state.concat(actions.note)
    default:
      return state
  }
}

// Filters reducer - default state is more complex, so define it in a variable first
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // date or name
  startDate: undefined,
  endDate: undefined,
}
const filtersReducer = (state = filtersReducerDefaultState, actions) => {
  switch (actions.type) {
    default:
      return state
  }
}

// =============================================================================
// // Store Creation
// =============================================================================

const store = createStore(
  combineReducers({
    notes: notesReducer,
    filters: filtersReducer,
  })
)

// =============================================================================
// // Sample Actions
// =============================================================================

// Subscribe so we can see the state change
store.subscribe(() => {
  console.log(store.getState())
})

// Actions

store.dispatch(
  addNote({
    noteTitle: 'First note',
    noteBody: 'This is the body of my first note.',
  })
)

// =============================================================================
// React code, only exists to keep index.js happy
// =============================================================================

const App = () => {
  return <div>hi</div>
}

export default App
