import React from 'react'
import PropTypes from 'prop-types'
import { ServicesPageTemplate } from '../../templates/services-page'

const ServicesPagePreview = ({ entry }) => {
  const entryTopHome = entry.getIn(['data', 'topHome']);
  const topHome = entryTopHome ? entryTopHome.toJS() : [];

  const entryExpirience = entry.getIn(['data', 'expirience']);
  const expirienceData = entryExpirience ? entryExpirience.toJS() : [];

  return (
    <ServicesPageTemplate
      title={entry.getIn(['data', 'title'])}
      topHome={topHome}
      expirience={expirienceData}
    />
  )
}

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default ServicesPagePreview