import React, { useState } from 'react'
import { connect } from 'react-redux'

class NoteForm extends React.Component {
  state = {
    noteTitle: '',
    noteBody: '',
  }
  handleTitleChange = (e) => {
    const noteTitle = e.target.value
    this.setState(() => ({ noteTitle }))
  }
  handleBodyChange = (e) => {
    const noteBody = e.target.value
    this.setState(() => ({ noteBody }))
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Title..."
          autoFocus
          value={this.state.noteTitle}
          onChange={this.handleTitleChange}
        />
        <br />
        <textarea
          placeholder="Note text..."
          value={this.state.noteBody}
          onChange={this.handleBodyChange}
        ></textarea>
        <br />
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default connect()(NoteForm)
