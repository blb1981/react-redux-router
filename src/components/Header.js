import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>My Notes</h1>
      <p>
        {/* Use NavLink for navigation menus, where active classes must be used. */}
        <NavLink to="/" activeClassName="active" exact={true}>
          Dashboard
        </NavLink>
        <NavLink to="/create" activeClassName="active">
          Create
        </NavLink>
        <NavLink to="/help" activeClassName="active">
          Help
        </NavLink>
      </p>
    </header>
  )
}

export default Header
