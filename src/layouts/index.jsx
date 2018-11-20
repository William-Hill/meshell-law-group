import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Meshel Law Group | Immigration Law" />
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

TemplateWrapper.defaultProps = {
  children: undefined,
};

export default TemplateWrapper;
