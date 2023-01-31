import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Dashboard from '../Component/Dashboard'
import Login from '../Component/Login'
import Settings from '../Component/Settings'
import Privateroute from './Privateroute'
function AllRoutes() {
  return (
   
    <Routes>
    <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Privateroute><Dashboard/></Privateroute>} />
        <Route path='/dashboard/settings' element={<Privateroute><Settings/></Privateroute>} />
        <Route path='/login' element={<Login/>} />
   
  </Routes>
  )
}

export default AllRoutes



