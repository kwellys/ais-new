import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'

import TopHomePage from '../blocks/HomePage/Top';
import TopCards from '../blocks/HomePage/TopCards';
import ServicesBlock from '../blocks/HomePage/ServicesBlock';
import OurClients from '../blocks/HomePage/OurClients';
import OurExperience from '../blocks/HomePage/OurExperience';
import GetInTouch from '../blocks/HomePage/GetInTouch';
import TechnologiesWeUse from '../blocks/HomePage/TechnologiesWeUse';
import References from '../blocks/HomePage/References';
import OurAdvantages from '../blocks/HomePage/OurAdvantages';
import WorldWide from '../blocks/HomePage/WorldWide';

import {tecnologyImage1,
  tecnologyImage10,
  tecnologyImage11,
  tecnologyImage2,
  tecnologyImage3,
  tecnologyImage4,
  tecnologyImage5,
  tecnologyImage6,
  tecnologyImage7,
  tecnologyImage8,
  tecnologyImage9} from 'utils/images';

export class IndexPageTemplate extends Component {
  state = {
    showPopUp: false,
    servicesData: this.props.servicesData,
    technologiesWeUseData: {
      title: 'TECHNOLOGIES WE USE',
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
      logoVue: tecnologyImage9,
    },
  };

  handleMobileService = (index) => {
    const { servicesData } = this.state;
    const servData = servicesData.servicesArr.map((serv, indexS) => {
      if (index === indexS) {
        return {
          ...serv,
          isMobileOpen: !serv.isMobileOpen,
        };
      }
      return serv;
    });
    this.setState({ servicesData: { title: servicesData.title, servicesArr: [...servData] } });
  };

  switchPopUp = () => {
    this.setState(prev => ({ showPopUp: !prev.showPopUp }));
  };

  render () {
    const { title, promo, cards, clientsData, expirienceData, getInTouchData, referencesData, ourAdvantachesData, worldWide } = this.props;
    return (
      <Fragment>
        <TopHomePage {...promo}/>
        <TopCards cards={cards}/>
        <ServicesBlock servicesData={this.state.servicesData} onClick={this.handleMobileService} />
        <OurClients clientsData={clientsData} />
        <OurExperience expirience={expirienceData} />
        <GetInTouch getInTouchData={getInTouchData} onClick={this.switchPopUp} />
        <TechnologiesWeUse technologiesWeUseData={this.state.technologiesWeUseData} />
        <References referencesData={referencesData} />
        <OurAdvantages ourAdvantachesData={ourAdvantachesData}/>
        <WorldWide worldWide={worldWide} />

      </Fragment>
    )
  }
}

IndexPageTemplate.propTypes = {
};

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
    />
  )
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

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
            link
            linkName
            companyLogo
            cursor
            y
            x
          }
        }
      }
    }
  }
`;
