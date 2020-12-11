import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByName } from '../actions/filters'

const NotesListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value))
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date') {
          props.dispatch(sortByDate())
        } else if (e.target.value === 'name') {
          props.dispatch(sortByName())
        } else {
          props.dispatch(sortByName())
        }
      }}
    >
      <option value="date">Date</option>
      <option value="name">Name</option>
    </select>
  </div>
)

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  }
}

export default connect(mapStateToProps)(NotesListFilters)
