import React from 'react';
import logo from '../img/logo.png';

const Footer = () => (
  <footer className="footer" id="footer" style={{backgroundColor: '#f5f5f5', padding: '3rem 1.5rem 6rem'}}>
    <div className="columns">
      <div className="column">
        <p className="image">
          <img src={logo} alt="Meshel_Law_Group_logo" style={{ width: '45%', maxHeight: '100%' }} />
        </p>
        <p style={{ marginTop: '1rem' }}>Based in downtown Dallas, Texas, The Meshel Law Group, PLLC is a nationwide, full service immigration law firm, serving the global community.</p>
      </div>
      <div className="column">
        <h3>Office Address</h3>
        <p>
          <i className="fa fa-map-marker" aria-hidden="true" />
          3106 Commerce Street
          <br />
          Dallas, Texas 75226
        </p>
        <hr />
        <p>
          <i className="fa fa-phone-square" aria-hidden="true" />
          469.333.3008
        </p>
        <p>
          <i className="fa fa-envelope" aria-hidden="true" />
          <a href="mailto:christy@meshellawgroup.com">christy@meshellawgroup.com</a>
        </p>
      </div>
    </div>
  </footer>
);
export default Footer;
