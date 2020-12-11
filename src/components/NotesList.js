import React from 'react'
import { connect } from 'react-redux'
import NoteListItem from './NoteListItem'
import selectNotes from '../selectors/notes'

const NotesList = (props) => {
  return (
   <div>
     {
       props.notes.map((note) => {
         return (
         <NoteListItem {...note} key={note.id} />
         // Spread operator can be used to pass props

         )
       })
     }
   </div>
  )
}

const mapStateToProps = (state) => {
  return {
		notes: selectNotes(state.notes, state.filters)
  }
}

export default connect(mapStateToProps)(NotesList)
