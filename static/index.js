import GetInTouch from 'blocks/HomePage/GetInTouch';
import Latest from 'blocks/HomePage/Latest';
import MemberCard from 'blocks/HomePage/MemberCard';
import OurAdvantages from 'blocks/HomePage/OurAdvantages';
import OurClients from 'blocks/HomePage/OurClients';
import OurExperience from 'blocks/HomePage/OurExperience';
import References from 'blocks/HomePage/References';
import ServicesBlock from 'blocks/HomePage/ServicesBlock';
import TechnologiesWeUse from 'blocks/HomePage/TechnologiesWeUse';

import TopHomePage from 'blocks/HomePage/Top';
import TopCards from 'blocks/HomePage/TopCards';
import WorldWide from 'blocks/HomePage/WorldWide';
import classname from 'classname';
import { Block as Feedback } from 'components/Feedback';

import Footer from 'components/Footer';
import Header from 'components/Header';
import PopUp from 'components/PopUp';

import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Fragment>
        <TopHomePage />
      </Fragment>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
