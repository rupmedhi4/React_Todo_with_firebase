import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../Firebase'


export default function Navbar({ user }) {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav-wrapper blue">
        <Link to="/" className="brand-logo">Todo</Link>
        <ul id="nav-mobile" className="right ">

          {user ? (
            <li>
              <button className='btn red' onClick={()=>{
                auth.signOut()
                navigate('/login')
                window.M.toast({html:`Sign out succesfull`, classes:"green"})
              }}>logout</button>
            </li>
          )
            :
            (
              <>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/signup">signup</Link></li>
              </>

            )
          }

        </ul>
      </div>
    </nav>
  )
}
