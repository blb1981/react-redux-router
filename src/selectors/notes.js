const notesSelector = (notes, { text, sortBy, startDate, endDate }) => {
  return notes
    .filter((note) => {
      const startDateMatch =
        typeof startDate !== 'number' || note.createdAt >= startDate
      const endDateMatch =
        typeof endDate !== 'number' || note.createdAt <= endDate
      const textMatch =
        note.noteTitle.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        note.noteBody.toLocaleLowerCase().includes(text.toLocaleLowerCase())

      return textMatch && startDateMatch && endDateMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt > b.createdAt ? 1 : -1
      } else if (sortBy === 'name') {
        return a.noteTitle > b.noteTitle ? 1 : -1
      } else {
        return 0
      }
    })
}
export default notesSelector
