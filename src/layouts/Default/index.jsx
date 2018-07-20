import Title from 'components/Title';
import PropTypes from 'prop-types';
import React from 'react';

import style from './style';

const Default = ({ children, title }) => (
  <div className="default__container">
    <div className="default__wrapper">
      <div className="default__title">
        <Title sectionHeader title={title} />
      </div>
      <div className="default__content">
        {children}
      </div>
    </div>
    <style jsx>
      {style}
    </style>
  </div>
);

Default.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
  title: PropTypes.string,
};
Default.defaultProps = {
  title: 'Enter the title',
};

export default Default;
