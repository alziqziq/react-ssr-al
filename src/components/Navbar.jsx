import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  const languages = [{
    name: 'Home',
    param: '/'
  }, {
    name: 'Grid',
    param: '/grid',
  }]

  return (
    <ul>
      {languages.map(({ name, param }) => (
        <li key={param}>
          <Link to={`${param}`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}