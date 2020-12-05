import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      <h2>Aw snap...404</h2>
      <Link to="/">Go home</Link>
    </div>
  )
}

export default NotFoundPage
