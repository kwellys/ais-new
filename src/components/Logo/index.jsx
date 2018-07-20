import defaultLogo from 'assets/img/ais_novation_white.svg';
import invertedLogo from 'assets/img/ais_novation_inverted.svg';
import classname from 'classname';
import PropTypes from 'prop-types';
import React from 'react';
import style from './style';

const Logo = ({
  link, image,
  // small,
  inverted,
}) => {
  const imageClasses = classname('image__logo');
  return (
    <a href={link}>
      <img className={imageClasses} src={inverted ? invertedLogo : image} alt="Logo" />
      <style jsx>
        {style}
      </style>
    </a>
  );
};
Logo.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  // small: PropTypes.bool,
  inverted: PropTypes.bool,
};

Logo.defaultProps = {
  link: '/',
  image: defaultLogo,
  inverted: false,
};

export default Logo;
