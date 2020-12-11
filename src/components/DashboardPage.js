import React from 'react'
import NotesList from './NotesList'
import NotesListFilters from '../components/NotesListFilters'

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <NotesListFilters />
      <NotesList />
    </div>
  )
}

export default DashboardPage
