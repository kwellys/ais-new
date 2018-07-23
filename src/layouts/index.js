import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from 'components/Header';
import Footer from 'components/Footer';


import './index.css'

class TemplateWrapper extends Component {
  state = {
    links: [
      { title: 'services', href: '/services' },
      { title: 'expertise', href: '/' },
      { title: 'technologies', href: '/' },
      { title: 'work', href: '/' },
      { title: 'company', href: '/' },
    ],
    contacts: {
      address: ['220004, Minsk city', 'Amuratorskaya st. 4b, office 24'],
      email: 'info@aisnovations.com',
      phone: '+375 29 379 90 08',
    }
  };

  switchPopUp = () => {
    this.setState(prev => ({ showPopUp: !prev.showPopUp }));
  };

  render () {
    const { children } = this.props;
    const { links, contacts } = this.state;
    return (
      <Fragment>
        <Helmet meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]} title="Home | Gatsby + Netlify CMS" />
        <Header links={links} onClick={this.switchPopUp} />
        <Fragment>{children()}</Fragment>
        <Footer contacts={contacts} links={links} />
      </Fragment>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
