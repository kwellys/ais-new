import React from 'react';
import PropTypes from 'prop-types';

import style from './style';

const CustomLink = ({ title, href }) => (
  <a className="link" href={href}>
    {title }
    <style jsx>
      {style}
    </style>
  </a>
);

CustomLink.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
};
CustomLink.defaultProps = {
  title: PropTypes.string,
  href: PropTypes.string,
};
export default CustomLink;
