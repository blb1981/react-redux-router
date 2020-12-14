import React from 'react'
import { connect } from 'react-redux'
import { removeNote } from '../actions/notes'
import { Link } from 'react-router-dom'

const NoteListItem = ({ id, noteTitle, noteBody, createdAt, dispatch }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{noteTitle}</h3>
      </Link>
      <p>{noteBody}</p>
      <p>
        <small>Created at: {createdAt}</small>
      </p>
      <button
        onClick={() => {
          dispatch(removeNote({ id }))
        }}
      >
        Delete Note
      </button>
    </div>
  )
}

export default connect()(NoteListItem)
