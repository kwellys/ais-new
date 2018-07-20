import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'

import TopHomePage from 'blocks/HomePage/Top';
import TopCards from 'blocks/HomePage/TopCards';
import ServicesBlock from 'blocks/HomePage/ServicesBlock';
import OurClients from 'blocks/HomePage/OurClients';
import OurExperience from 'blocks/HomePage/OurExperience';

export class IndexPageTemplate extends Component {
  state = {
    servicesData: this.props.servicesData
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

  render () {
    const { title, promo, cards, clientsData, expirienceData } = this.props;
    return (
      <Fragment>
        <TopHomePage title={promo.title} description={promo.description}/>
        <TopCards cards={cards}/>
        <ServicesBlock servicesData={this.state.servicesData} onClick={this.handleMobileService} />
        <OurClients clientsData={clientsData} />
        <OurExperience expirience={expirienceData} />

      </Fragment>
    )
  }
}

IndexPageTemplate.propTypes = {
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);
  return (
    <IndexPageTemplate
      title={frontmatter.title}
      promo={frontmatter.promo}
      cards={frontmatter.cards}
      servicesData={frontmatter.servicesData}
      clientsData={frontmatter.clientsData}
      expirienceData={frontmatter.expirienceData}
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
      }
    }
  }
`
