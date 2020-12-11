import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
// import {MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";

const now = moment()
console.log(now.format('lll'))
// console.log(now.format('MMM Do, YYYY - H:m a Z'))

class NoteForm extends React.Component {
  state = {
    noteTitle: '',
    noteBody: '',
    createdAt: moment(),
    dateFocused: false,
    errors: '',
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
    this.setState(() => ({ createdAt }))
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
      console.log(note)
      // TODO: dispatch call to add note
    }
    console.log(this.state.errors)
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
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default connect()(NoteForm)
