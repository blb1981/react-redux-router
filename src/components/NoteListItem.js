import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const NoteListItem = ({ id, noteTitle, noteBody, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{noteTitle}</h3>
      </Link>
      <p>{noteBody}</p>
      <p>
        <small>Created at: {moment(createdAt).format('LLL')}</small>
      </p>
    </div>
  )
}

export default NoteListItem
