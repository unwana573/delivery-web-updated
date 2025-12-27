import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

function Rootlayout() {
  return (
    <div>
        <Navbar />
            <Outlet /> 
    </div>
  )
}

export default Rootlayout