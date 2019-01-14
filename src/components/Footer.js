import React from 'react';
import logo from '../img/logo.png';
import { FaEnvelope, FaPhoneSquare, FaMapMarker } from 'react-icons/fa';


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

        <h3><span style={{paddingRight: ".5em", verticalAlign: "sub"}}><FaMapMarker /></span> Office Address</h3>
        <p>
          3106 Commerce Street
          <br />
          Dallas, Texas 75226
        </p>
        <hr style={{backgroundColor: '#dbdbdb',  border: 'none', display: 'block', height: '1px', margin: '1.5rem 0'}} />
        <p>
          <span style={{paddingRight: ".5em", verticalAlign: "sub"}}><FaPhoneSquare /></span>
          469.333.3008
        </p>
        <p>
          <span style={{paddingRight: ".5em", verticalAlign: "sub"}}><FaEnvelope /></span>
          <a href="mailto:christy@meshellawgroup.com">christy@meshellawgroup.com</a>
        </p>
      </div>
    </div>
  </footer>
);
export default Footer;
