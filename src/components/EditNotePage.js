import React from 'react'

const EditNotePage = (props) => {
  console.log(props)
  return (
    <div>
      Edit note {props.match.params.id}
    </div>
  )
}

export default EditNotePage
