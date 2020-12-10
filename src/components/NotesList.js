import React from 'react'
import { connect } from 'react-redux'

const NotesList = (props) => {
  return (
    <div>
      <h2>Notes List</h2>
      {props.notes.length}<br />
			{props.filters.text}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
		notes: state.notes,
		filters: state.filters
  }
}

export default connect(mapStateToProps)(NotesList)
