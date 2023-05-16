import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar() {
  return (
    <nav>
    <div className="nav-wrapper blue">
      <Link to="/" className="brand-logo">Todo</Link>
      <ul id="nav-mobile" className="right ">
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/signup">signup</Link></li>
        <li>
            <button className='btn red'>logout</button>
        </li>
      </ul>
    </div>
  </nav>
  )
}
