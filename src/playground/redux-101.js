// React only exists here to keep dev server happy
// This file is meant for learning redux basics only
import React from 'react'
import { createStore } from 'redux'

// Create store, pass in function w default state values
// Action gets passed in as 2nd argument
// Gets called upon initial store creation,
// once again when an action is dispatched
const store = createStore((state = { count: 0 }, action) => {
  // if (action.type === 'INCREMENT') {
  //   return {
  //     count: state.count + 1,
  //   }
  // } else {
  //   return state
  // }

  // Switch statements are more scalable than if statements
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        // count: state.count + 1,
        count: state.count + incrementBy
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        // count: state.count - 1
        count: state.count - decrementBy,
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0,
      }
    default:
      return state
  }
})

// Subscribe method gets called whenever state changes
// Watches for state changes
// This will print every time
// store.subscribe(() => {
//   console.log(store.getState())
// })

// Assigning a variable to store.subscribe() will allow you to unsubscribe when called.
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// Actions - object that gets sent (dispatched) to the store
// All caps convention is used for actions
// Ex: INCREMENT_SOMETHING
store.dispatch({
  type: 'INCREMENT',
  // Additional key/value pairs may be passed in object for dynamic changes
  incrementBy: 5
})

store.dispatch({
  type: 'INCREMENT',
})

// Calling unsubscribe will stop watching for changes to the store
// unsubscribe()

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 50
})

store.dispatch({
  type: 'RESET',
})

store.dispatch({
  type: 'SET',
  count: 120
})


// React only exists here to keep dev server happy
const App = () => {
  return <div>Hi</div>
}

export default App
