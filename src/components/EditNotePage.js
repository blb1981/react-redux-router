import React from 'react'
import { connect } from 'react-redux'
import NoteForm from "./NoteForm";

const EditNotePage = () => (
  <div>
    <NoteForm  />
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    note: state.notes.find((note) => {
      return note.id === props.match.params.id
    }),
  }
}

export default connect(mapStateToProps)(EditNotePage)
