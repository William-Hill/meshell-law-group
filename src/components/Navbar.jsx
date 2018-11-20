import React from 'react';
import Link from 'gatsby-link';
import logo from '../img/logo.png';

const Navbar = () => {
  const handleClick = () => {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  };
  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img id="logo" src={logo} alt="Meshel_Law_Group_logo" style={{ width: '80%', maxHeight: '100%' }} />
            </figure>
          </Link>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={handleClick}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar-menu">
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
      </div>
    </nav>
  )
};

export default Navbar;
