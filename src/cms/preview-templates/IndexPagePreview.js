import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry }) => {
  const entryPromo = entry.getIn(['data', 'promo']);
  const promo = entryPromo ? entryPromo.toJS() : [];

  const entryCards = entry.getIn(['data', 'cards']);
  const cards = entryCards ? entryCards.toJS() : [];

  const entryServices = entry.getIn(['data', 'servicesData']);
  const servicesData = entryServices ? entryServices.toJS() : [];

  const entryClients = entry.getIn(['data', 'clientsData']);
  const clientsData = entryClients ? entryClients.toJS() : [];

  const entryExpirience = entry.getIn(['data', 'expirienceData']);
  const expirienceData = entryExpirience ? entryExpirience.toJS() : [];

  const entryGetInTouch = entry.getIn(['data', 'getInTouchData']);
  const getInTouchData = entryGetInTouch ? entryGetInTouch.toJS() : [];

  const entryReferences = entry.getIn(['data', 'referencesData']);
  const referencesData = entryReferences ? entryReferences.toJS() : [];

  const entryAdvantages = entry.getIn(['data', 'ourAdvantachesData']);
  const ourAdvantachesData = entryAdvantages ? entryAdvantages.toJS() : [];

  return (
    <IndexPageTemplate
      title={entry.getIn(['data', 'title'])}
      promo={promo}
      cards={cards}
      servicesData={servicesData}
      clientsData={clientsData}
      expirienceData={expirienceData}
      getInTouchData={getInTouchData}
      referencesData={referencesData}
      ourAdvantachesData={ourAdvantachesData}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default IndexPagePreview