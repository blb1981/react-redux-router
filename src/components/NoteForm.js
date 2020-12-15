import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class NoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noteTitle: props.note.noteTitle ? props.note.noteTitle : '',
      noteBody: props.note.noteBody ? props.note.noteBody : '',
      createdAt: props.note.createdAt ? moment(props.note.createdAt).valueOf() : moment().valueOf(),
      dateFocused: false,
      errors: '',
    }
  }
  handleTitleChange = (e) => {
    const noteTitle = e.target.value
    this.setState(() => ({ noteTitle }))
  }
  handleBodyChange = (e) => {
    const noteBody = e.target.value
    this.setState(() => ({ noteBody }))
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ dateFocused: focused }))
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (!this.state.noteTitle || !this.state.noteBody) {
      this.setState(() => ({
        errors: 'Please fill out Title and Body sections',
      }))
    } else {
      this.setState(() => ({ errors: '' }))
      const note = {
        noteTitle: this.state.noteTitle,
        noteBody: this.state.noteBody,
        createdAt: this.state.createdAt.format(),
      }
      this.props.onSubmit(note)
    }
  }
  render() {
    return (
      <div>
        {this.state.errors && (
          <div style={{ color: 'red' }}>{this.state.errors}</div>
        )}
        <form onSubmit={this.onSubmit}>
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
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.dateFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default NoteForm
