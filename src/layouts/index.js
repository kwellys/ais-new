import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Favicon from '../../Favicon.png'

// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import PopUp from '../components/PopUp';
// import { Block as Feedback } from '../components/Feedback';

import './index.css'
import '../utils/rocket-chat';

class TemplateWrapper extends Component {

  render () {
    const { children } = this.props;
    return (
      <Fragment>
        <Helmet
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${Favicon}` }
          ]}
          title="AIS Novations | We are aimed to create fast, beautiful and reliable web applications" />
        <main>{children()}</main>
      </Fragment>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
