import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

import TopHomePage from 'blocks/HomePage/Top';
import TopCards from 'blocks/HomePage/TopCards';

export const IndexPageTemplate = ({
                                    title,
                                    promo,
                                    cards
                                  }) => (
  <Fragment>
    <TopHomePage title={promo.title} description={promo.description}/>
    <TopCards cards={cards}/>
  </Fragment>
);

IndexPageTemplate.propTypes = {
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      title={frontmatter.title}
      promo={frontmatter.promo}
      cards={frontmatter.cards}
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
        clientsData {
          title
          client {
            image
          }
        }
      }
    }
  }
`
