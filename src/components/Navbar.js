import React from "react";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link" >Home</NavLink>
              <NavLink to="/About" className="nav-link" >About</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )

}
export default Navbar;