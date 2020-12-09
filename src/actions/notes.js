import { v4 as uuidv4 } from 'uuid'

// ADD_NOTE
export const addNote = ({
  id = '',
  noteTitle = '',
  noteBody = '',
  createdAt = 0,
} = {}) => ({
  type: 'ADD_NOTE',
  note: {
    id: uuidv4(),
    noteTitle,
    noteBody,
    createdAt,
  },
})
// REMOVE_NOTE
export const removeNote = ({ id } = {}) => ({
  type: 'REMOVE_NOTE',
  id,
})

// EDIT_NOTE
export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates,
})
