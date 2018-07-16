import React from 'react'
import PropTypes from 'prop-types'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <section className="section section--gradient">
    This is just index page. Leave it be. Sosi hui pidor
  </section>
)

IndexPageTemplate.propTypes = {
};

const IndexPage = ({ data }) => {
  //const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      // image={frontmatter.image}
      // title={frontmatter.title}
      // heading={frontmatter.heading}
      // description={frontmatter.description}
      // intro={frontmatter.intro}
      // main={frontmatter.main}
      // testimonials={frontmatter.testimonials}
      // fullImage={frontmatter.full_image}
      // pricing={frontmatter.pricing}
    />
  )
}

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
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
