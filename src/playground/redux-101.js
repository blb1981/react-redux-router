// React only exists here to keep dev server happy
// This file is meant for learning redux basics only
import React from 'react'
import { createStore } from 'redux'

// =============================================================================
// // ACTION GENERATORS
// =============================================================================

// Action generators - functions that return action objects
// Preferred to inline action objects
// Prevents typos and errors

// Long form of incrementCount()
// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// })

// Simplified version. Payload is destructured and set to an empty object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  // implicitly return object using ()
  type: 'INCREMENT',
  incrementBy,
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
})

// On setCount() there is no need to set a default value since the value is required for the function
const setCount = ({ count = 0 }) => ({
  type: 'SET',
  count,
})

const resetCount = () => ({
  type: 'RESET',
})


// =============================================================================
// // REDUCERS
// =============================================================================

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
      // Type checking no longer needed due to action generator handline this
      // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        // count: state.count + 1,
        // count: state.count + incrementBy
        count: state.count + action.incrementBy,
      }
    case 'DECREMENT':
      // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        // count: state.count - 1
        count: state.count - action.decrementBy,
      }
    case 'SET':
      return {
        count: action.count,
      }
    case 'RESET':
      return {
        count: 0,
      }
    default:
      return state
  }
})

// =============================================================================
// // SUBSCRIPTIONS
// =============================================================================

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

// =============================================================================
// ACTIONS
// =============================================================================

// Actions - object that gets sent (dispatched) to the store
// All caps convention is used for actions
// Ex: INCREMENT_SOMETHING
store.dispatch({
  type: 'INCREMENT',
  // Additional key/value pairs may be passed in object for dynamic changes
  incrementBy: 5,
})

store.dispatch(incrementCount())

// Calling unsubscribe will stop watching for changes to the store
// unsubscribe()

// Incorrect way, generating action inline
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 20,
})

// Correct way, using action generator pre-defined function
store.dispatch(decrementCount())

// store.dispatch({
//   type: 'RESET',
// })
store.dispatch(resetCount())

// store.dispatch({
//   type: 'SET',
//   count: 120
// })

store.dispatch(
  setCount({
    count: 120,
  })
)

// React only exists here to keep dev server happy
const App = () => {
  return <div>Hi</div>
}

export default App
