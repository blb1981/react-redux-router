import { createStore, combineReducers } from 'redux'
import notesReducer from '../reducers/notes'
import filtersReducer from '../reducers/filters'

export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      filters: filtersReducer,
    })
  )
  return store
}
