import PropTypes from 'prop-types';
import React from 'react';
import classname from 'classname';
import Link from 'gatsby-link'

import style from './style';

const CustomLink = ({
  href, title, uppercase, inverted,
}) => {
  console.log(href)
  const styleName = classname('link', { 'link-uppercase': uppercase, 'link-inverted ': inverted });
  return (
    <div className={styleName}>
    <Link exact to={href} activeClassName="active" style={{textDecoration: 'none'}}>
    <span>{title}</span>

    </Link>
    <style jsx>
        {style}
      </style>
    </div>
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
