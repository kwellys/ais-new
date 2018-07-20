import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry }) => {
  const entryPromo = entry.getIn(['data', 'promo']);
  const promo = entryPromo ? entryPromo.toJS() : [];
  const entryCards = entry.getIn(['data', 'cards']);
  const cards = entryCards ? entryCards.toJS() : [];

  return (
    <IndexPageTemplate
      title={entry.getIn(['data', 'title'])}
      promo={promo}
      cards={cards}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default IndexPagePreview