import React from 'react'
import { connect } from 'react-redux'
import NoteForm from '../components/NoteForm'
import { addNote } from '../actions/notes'

const CreateNotePage = (props) => (
  <div>
    <h1>Create a Note</h1>
    <NoteForm
      onSubmit={(note) => {
        props.dispatch(addNote(note))
        props.history.push('/')
      }}
    />
  </div>
)

export default connect()(CreateNotePage)
