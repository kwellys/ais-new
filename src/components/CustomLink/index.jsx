import PropTypes from 'prop-types';
import React from 'react';
import classname from 'classname';

import style from './style';

const CustomLink = ({
  href, title, uppercase, inverted,
}) => {
  const styleName = classname('link', { 'link-uppercase': uppercase, 'link-inverted ': inverted });
  return (
    <a className={styleName} href={href}>
      {title}
      <style jsx>
        {style}
      </style>
    </a>
  );
};

CustomLink.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  uppercase: PropTypes.bool,
  inverted: PropTypes.bool,
};
CustomLink.defaultProps = {
  href: '',
  title: '',
  uppercase: false,
  inverted: false,
};

export default CustomLink;
