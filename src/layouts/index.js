import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <Fragment>
    <Helmet title="Home | AIS Novations" />
    {/*<Navbar />*/}
    <Fragment>{children()}</Fragment>
  </Fragment>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
