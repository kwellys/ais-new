import React from 'react';
import PropTypes from 'prop-types';

import style from './style';

import Title from '../../components/Title';

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
