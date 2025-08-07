import React from 'react'
import { Routes,Route, Link } from 'react-router'

function Routescompo() {
  return (
    <div>

        <Link to={'/'}><h3>Home</h3></Link>
        <Link to={'/about'}><h3>About</h3></Link>
        <Link to={'/contact'}><h3>Contact</h3></Link>

        <Routes>
            <Route path="/" element ={ <h1>Home Page</h1>}></Route>
            <Route path="/about" element ={ <h1>About Page</h1>}></Route>
            <Route path="/contact" element ={ <h1>Contact Page</h1>}></Route>
        </Routes>
      
    </div>
  )
}

export default Routescompo
