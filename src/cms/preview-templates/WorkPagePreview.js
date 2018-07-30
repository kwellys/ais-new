import React from 'react'
import PropTypes from 'prop-types'
import { WorkPageTemplate } from '../../templates/work-page'

const WorkPageTemplate = ({ entry }) => {
  const entryTopHome = entry.getIn(['data', 'topHome']);
  const topHome = entryTopHome ? entryTopHome.toJS() : [];

  const entryExpirience = entry.getIn(['data', 'expirience']);
  const expirienceData = entryExpirience ? entryExpirience.toJS() : [];

  return (
    <WorkPageTemplate
      title={entry.getIn(['data', 'title'])}
      topHome={topHome}
      expirience={expirienceData}
    />
  )
}

WorkPageTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default WorkPageTemplate