import React from 'react'
import { connect } from 'react-redux'
import NoteForm from './NoteForm'
import { editNote, removeNote } from '../actions/notes'

const EditNotePage = (props) => (
  <div>
    <NoteForm
      note={props.note}
      onSubmit={(note) => {
        props.dispatch(editNote(props.note.id, note))
        props.history.push('/')
      }}
    />
    <button
      onClick={() => {
        props.dispatch(removeNote({ id: props.note.id }))
        props.history.push('/')
      }}
    >
      Delete Note
    </button>
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
