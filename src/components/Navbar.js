import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img id="logo" src={logo} alt="Meshel_Law_Group_logo" style={{width: "80%", maxHeight: "100%"}} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start"></div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/about">
          About Us
        </Link>
        <Link className="navbar-item" to="/practice">
          Practice Areas
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
