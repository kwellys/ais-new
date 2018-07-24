import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import classname from 'classname';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PopUp from '../components/PopUp';
import { Block as Feedback } from '../components/Feedback';

import './index.css'

class TemplateWrapper extends Component {
  state = {
    showPopUp: false,
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
    },
    popup: {
      sent: {
        text: 'You will be returned back in [numberSec] seconds',
        title: 'Thank you!',
      },
      title: "Let's get in touch",
    },
    feedback: {
      title: "Let's create something beautiful together",
      fields: [
        {
          error: 'Enter name',
          label: 'Name',
          name: 'name',
          placeholder: 'Your name',
          type: 'text',
        },
        {
          error: 'Phone isn’t correct',
          label: 'Phone',
          name: 'phone',
          placeholder: 'Your phone',
          type: 'number',
        },
        {
          error: 'Email isn’t correct',
          label: 'Email',
          name: 'email',
          placeholder: 'mail@example.com',
          type: 'email',
        },
        {
          error: null,
          label: 'Message',
          name: 'message',
          placeholder: 'Enter your message...',
          type: 'textarea',
        },
      ],
    },
  };

  switchPopUp = () => {
    this.setState(prev => ({ showPopUp: !prev.showPopUp }));
  };

  setEmailError = (message) => {
    const { feedback } = this.state;
    const EMAIL = 'email';
    const newFields = feedback.fields.map((field) => {
      if (field.name === EMAIL) {
        return {
          ...field,
          error: message,
        };
      }
      return { ...field };
    });
    this.setState({ feedback: { ...feedback, fields: newFields } });
  }

  render () {
    const { children } = this.props;
    const { links, contacts, showPopUp, popup, feedback } = this.state;
    const mainClass = classname({ blur: showPopUp });
    return (
      <Fragment>
        <Helmet meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]} title="AIS Novations | We are aimed to create fast, beautiful and reliable web applications" />
        <PopUp
          showPopUp={showPopUp}
          onClose={this.switchPopUp}
          popup={popup}
          fields={feedback.fields}
          setEmailError={this.setEmailError}
        />
        <Header links={links} onClick={this.switchPopUp} />
        <main className={mainClass}>{children()}</main>
        <Feedback
          title={feedback.title}
          fields={feedback.fields}
          setEmailError={this.setEmailError}
        />
        <Footer contacts={contacts} links={links} />
        <style jsx>
          {`
              .blur {
                filter: blur(10px);
              }
            `}
        </style>
      </Fragment>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
