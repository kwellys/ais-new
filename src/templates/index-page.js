import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import classname from "classname";

import TopHomePage from "../blocks/HomePage/Top";
import TopCards from "../blocks/HomePage/TopCards";
import ServicesBlock from "../blocks/HomePage/ServicesBlock";
import OurClients from "../blocks/HomePage/OurClients";
import OurExperience from "../blocks/HomePage/OurExperience";
import GetInTouch from "../blocks/HomePage/GetInTouch";
import TechnologiesWeUse from "../blocks/HomePage/TechnologiesWeUse";
import References from "../blocks/HomePage/References";
import OurAdvantages from "../blocks/HomePage/OurAdvantages";
import WorldWide from "../blocks/HomePage/WorldWide";
import MemberCard from "../blocks/HomePage/MemberCard";
import Latest from "../blocks/HomePage/Latest";

//Questionable
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopUp from "../components/PopUp";
import { Block as Feedback } from "../components/Feedback";

import {
  tecnologyImage1,
  tecnologyImage10,
  tecnologyImage11,
  tecnologyImage2,
  tecnologyImage3,
  tecnologyImage4,
  tecnologyImage5,
  tecnologyImage6,
  tecnologyImage7,
  tecnologyImage8,
  tecnologyImage9,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
} from "utils/images";

export class IndexPageTemplate extends Component {
  state = {
    showPopUp: true,
    links: [
      { title: "services", href: "/services" },
      { title: "expertise", href: "/" },
      { title: "technologies", href: "/" },
      { title: "work", href: "/work" },
      { title: "company", href: "/" }
    ],
    contacts: {
      address: ["220004, Minsk city", "Amuratorskaya st. 4b, office 24"],
      email: "info@aisnovations.com",
      phone: "+375 29 379 90 08"
    },
    popup: {
      sent: {
        text: "You will be returned back in [numberSec] seconds",
        title: "Thank you!"
      },
      title: "Let's get in touch"
    },
    feedback: {
      title: "Let's create something beautiful together",
      fields: [
        {
          error: "Enter name",
          label: "Name",
          name: "name",
          placeholder: "Your name",
          type: "text"
        },
        {
          error: "Phone isn’t correct",
          label: "Phone",
          name: "phone",
          placeholder: "Your phone",
          type: "number"
        },
        {
          error: "Email isn’t correct",
          label: "Email",
          name: "email",
          placeholder: "mail@example.com",
          type: "email"
        },
        {
          error: null,
          label: "Message",
          name: "message",
          placeholder: "Enter your message...",
          type: "textarea"
        }
      ]
    },
    servicesData: this.props.servicesData,
    technologiesWeUseData: {
      title: "TECHNOLOGIES WE USE",
      logoAspNet: tecnologyImage1,
      logoNodeJS: tecnologyImage6,
      logoMongo: tecnologyImage4,
      logoMySql: tecnologyImage5,
      logoPHP: tecnologyImage7,
      logoReact: tecnologyImage8,
      logoAngular: tecnologyImage11,
      logoGit: tecnologyImage2,
      logoSass: tecnologyImage10,
      logoHTML: tecnologyImage3,
      logoVue: tecnologyImage9
    },
    latest: {
      title: 'Latest Projects',
      title2: 'Media Project',
      link2: '/',
      link2Title: 'show',
      image1: Image8,
      image2: Image9,
      image3: Image10,
      image4: Image11,
    },
  };

  componentWillMount () {
    this.setState(prev => ({ showPopUp: !prev.showPopUp }));
  }

  switchPopUp = () => {
    this.setState(prev => ({ showPopUp: !prev.showPopUp }));
  };

  setEmailError = message => {
    const { feedback } = this.state;
    const EMAIL = "email";
    const newFields = feedback.fields.map(field => {
      if (field.name === EMAIL) {
        return {
          ...field,
          error: message
        };
      }
      return { ...field };
    });
    this.setState({ feedback: { ...feedback, fields: newFields } });
  };

  handleMobileService = index => {
    const { servicesData } = this.state;
    const servData = servicesData.servicesArr.map((serv, indexS) => {
      if (index === indexS) {
        return {
          ...serv,
          isMobileOpen: !serv.isMobileOpen
        };
      }
      return serv;
    });
    this.setState({
      servicesData: { title: servicesData.title, servicesArr: [...servData] }
    });
  };

  render() {
    const {
      promo,
      cards,
      clientsData,
      expirienceData,
      getInTouchData,
      referencesData,
      ourAdvantachesData,
      worldWide,
      personalCards
    } = this.props;
    const { feedback, contacts, links, showPopUp, popup, latest } = this.state;
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
          <TopHomePage {...promo} />
          <TopCards cards={cards} />
          <ServicesBlock
            servicesData={this.state.servicesData}
            onClick={this.handleMobileService}
          />
          <OurClients clientsData={clientsData} />
          <OurExperience expirience={expirienceData} />
          <Latest latest={latest} />
          <GetInTouch
            getInTouchData={getInTouchData}
            onClick={this.switchPopUp}
          />
          <TechnologiesWeUse
            technologiesWeUseData={this.state.technologiesWeUseData}
          />
          <References referencesData={referencesData} />
          <OurAdvantages ourAdvantachesData={ourAdvantachesData} />
          <WorldWide worldWide={worldWide} />
          <MemberCard personalCards={personalCards} />
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
    );
  }
}

IndexPageTemplate.propTypes = {};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <IndexPageTemplate
      title={frontmatter.title}
      promo={frontmatter.promo}
      cards={frontmatter.cards}
      servicesData={frontmatter.servicesData}
      clientsData={frontmatter.clientsData}
      expirienceData={frontmatter.expirienceData}
      getInTouchData={frontmatter.getInTouchData}
      referencesData={frontmatter.referencesData}
      ourAdvantachesData={frontmatter.ourAdvantachesData}
      worldWide={frontmatter.worldWide}
      personalCards={frontmatter.personalCards}
    />
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        promo {
          title
          description
        }
        cards {
          title
          text
          image
        }
        servicesData {
          title
          servicesArr {
            title
            description
            technologies
            image
          }
        }
        clientsData {
          title
          client {
            image
          }
        }
        expirienceData {
          title
          expirienceArray {
            title
            image
            href
            inverted
            pointList
          }
        }
        getInTouchData {
          title
          description
          image
        }
        referencesData {
          title
          slides {
            title
            image
            description
            text
          }
        }
        ourAdvantachesData {
          title
          ourAdvantacheArray {
            title
            image
            text
          }
        }
        worldWide {
          title
          worldWideData {
            name
            location
            linkName
            companyLogo
            coords {
              x
              y
            }
          }
        }
        personalCards {
          title
          personalDetails {
            title
            role
            image
          }
        }
      }
    }
  }
`;
