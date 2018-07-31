import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'
import classname from "classname";

import TopHomePage from '../blocks/HomePage/Top';
import OurExperience from '../blocks/HomePage/OurExperience';

//Questionable
import Header from '../components/Header';
import Footer from '../components/Footer';
import PopUp from '../components/PopUp';
import { Block as Feedback } from '../components/Feedback';

export class ServicesPageTemplate extends Component {
  state = {
    showPopUp: false,
    links: [
      { title: 'services', href: '/services' },
      { title: 'expertise', href: '/' },
      { title: 'technologies', href: '/' },
      { title: 'work', href: "/work" },
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
    }
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
  };

  render () {

    const { topHome, expirience } = this.props;
    const { feedback, contacts, links, showPopUp, popup } = this.state;
    const mainClass = classname({ blur: showPopUp });
    return (
      <Fragment>
        <PopUp
          showPopUp={showPopUp}
          onClose={this.switchPopUp}
          popup={popup}
          fields={feedback.fields}
          setEmailError={this.setEmailError}
        />
        <div className={mainClass}>
          <Header links={links} onClick={this.switchPopUp} />
          <TopHomePage {...topHome}/>
          <OurExperience request='Сделать запрос' title={null} expirience={expirience} />
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
        </div>
      </Fragment>
    )
  }
}

ServicesPageTemplate.propTypes = {
};

const ServicesPage = ({ data }) => {
  console.log(data);
  const { frontmatter } = data.markdownRemark;
  return (
    <ServicesPageTemplate
      title={frontmatter.title}
      topHome={frontmatter.topHome}
      expirience={frontmatter.expirience}
    />
  )
};

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        topHome {
          description
          image
          title
        }
        expirience {
          expirienceArray {
            image
            href
            inverted
            more
            reversed
            descr
            title
          }
        }
      }
    }
  }
`;
