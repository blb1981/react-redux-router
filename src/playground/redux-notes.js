import React from 'react'
import { createStore, combineReducers } from 'redux'
import { v4 as uuidv4 } from 'uuid'
// combineReducers allows you to use multiple reducers
// Two reducers will be used, one for notes, another for filters

// =============================================================================
// Initial state (demo)
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
// Actions generators
// =============================================================================

// ADD_NOTE
// REMOVE_NOTE
// EDIT_NOTE

// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_NAME
// SET_START_DATE
// SET_END_DATE

// ADD_NOTE
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
// REMOVE_NOTE
const removeNote = ({ id } = {}) => ({
  type: 'REMOVE_NOTE',
  id,
})

// EDIT_NOTE
const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates,
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text,
  }
}

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
})

// SORT_BY_NAME
const sortByName = () => ({
  type: 'SORT_BY_NAME',
})

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
})

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
})

// =============================================================================
// // Reducers
// =============================================================================

// Notes reducer
// Define state in an empty variable
const notesReducerDefaultState = []
const notesReducer = (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.note]
    case 'REMOVE_NOTE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_NOTE':
      return state.map((note) => {
        if (action.id === note.id) {
          return {
            ...note,
            ...action.updates,
          }
        } else {
          return note
        }
      })
    default:
      return state
  }
}

// Filters reducer
// Default state defined in variable
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // date or name
  startDate: undefined,
  endDate: undefined,
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      }
    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'name',
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      }
    default:
      return state
  }
}

// =============================================================================
// Filtering
// =============================================================================

const getVisibleNotes = (notes, { text, sortBy, startDate, endDate }) => {
  return notes
    .filter((note) => {
      const startDateMatch =
        typeof startDate !== 'number' || note.createdAt >= startDate
      const endDateMatch =
        typeof endDate !== 'number' || note.createdAt <= endDate
      const textMatch =
        note.noteTitle.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        note.noteBody.toLocaleLowerCase().includes(text.toLocaleLowerCase())

      return textMatch && startDateMatch && endDateMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt > b.createdAt ? 1 : -1
      } else if (sortBy === 'name') {
        return a.noteTitle[0] > b.noteTitle[0] ? 1 : -1
      }
    })
}

// =============================================================================
// Store creation
// =============================================================================

const store = createStore(
  combineReducers({
    notes: notesReducer,
    filters: filtersReducer,
  })
)

// =============================================================================
// Subscribe to see state change
// =============================================================================

store.subscribe(() => {
  const state = store.getState()
  const visibleNotes = getVisibleNotes(state.notes, state.filters)
  console.log(visibleNotes)
})

// =============================================================================
// Sample actions
// =============================================================================

const noteOne = store.dispatch(
  addNote({
    noteTitle: 'First note',
    noteBody: 'This is the body of my first note.',
    createdAt: 1000,
  })
)

const noteTwo = store.dispatch(
  addNote({
    noteTitle: 'A 2nd Note',
    noteBody: 'Something cool for my 2nd note.',
    createdAt: 1100,
  })
)

// store.dispatch(removeNote({ id: noteTwo.note.id }))

// store.dispatch(editNote(noteOne.note.id, { noteBody: 'Shorter note now.' }))

// store.dispatch(setTextFilter('first'))
// store.dispatch(setTextFilter())
// store.dispatch(setTextFilter('2'))

store.dispatch(sortByName())
store.dispatch(sortByDate())

// store.dispatch(setStartDate(1))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(-2000))
// store.dispatch(setEndDate())

// =============================================================================
// React code, only exists to keep index.js happy
// =============================================================================

const App = () => {
  return <div>hi</div>
}

export default App
