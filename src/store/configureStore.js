import { createStore, combineReducers } from 'redux'
import notesReducer from '../reducers/notes'
import filtersReducer from '../reducers/filters'

const configureStore = () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      filters: filtersReducer,
    }),
    // Line below for redux dev tools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
export default configureStore
