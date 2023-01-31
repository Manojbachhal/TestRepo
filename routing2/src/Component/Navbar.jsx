import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/dashboard/settings'>Settings</Link>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Navbar