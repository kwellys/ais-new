import Title from 'components/Title';
import PropTypes from 'prop-types';
import React from 'react';

import { BlockStyle, TitleStyle } from './style';

const DefaultTitle = ({ title }) => {
  if (title == null) {
    return null;
  }

  return (
    <div className="default__title">
      <Title sectionHeader title={title} />
      <style jsx>
        {TitleStyle}
      </style>
    </div>
  );
};

DefaultTitle.propTypes = {
  title: PropTypes.string,
};

const DefaultBlock = ({ children, title }) => (
  <div className="default__container">
    <div className="default__wrapper">
      <DefaultTitle title={title} />
      <div className="default__content">
        {children}
      </div>
    </div>
    <style jsx>
      {BlockStyle}
    </style>
  </div>
);

DefaultBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
  title: PropTypes.string,
};

export default DefaultBlock;
