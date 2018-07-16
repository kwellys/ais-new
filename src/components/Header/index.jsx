import React from 'react';
import PropTypes from 'prop-types';

import style from './style';
import Logo from '../Logo';
import CustomLink from '../CustomLink';
import Button from '../Button';

const Header = ({ links }) => {
  const renderLinks = () => {
    const rendered = links.map(link => (
      <CustomLink key={link.title} title={link.title} href={link.href} />
    ));
    return rendered;
  };

  return (
    <div className="b-header">
      <div className="b-header__content">
        <Logo />
        <div className="b-header__links">
          {renderLinks()}
        </div>
        <Button title="request a quote" />
      </div>
      <style jsx>
        {style}
      </style>
    </div>
  );
};

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};
Header.defaultProps = {
  links: [],
};
export default Header;
