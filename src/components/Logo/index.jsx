import React from 'react';
import PropTypes from 'prop-types';

import style from './style';
import defaultLogo from '../../assets/img/logo.png';

const Logo = ({ link, image }) => (
  <a href={link}>
    <img className="image__logo" src={image} alt="Logo" />
    <style jsx>
      {style}
    </style>
  </a>
);

Logo.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
};

Logo.defaultProps = {
  link: '/',
  image: defaultLogo,
};

export default Logo;
