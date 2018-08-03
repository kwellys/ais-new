import CustomLink from 'components/CustomLink';
import Logo from 'components/Logo';
import PropTypes from 'prop-types';
import React from 'react';

import style from './style';

const Footer = ({ contacts, links }) => (
  <div className="b-footer">
    <div className="b-footer__content">
      <Logo inverted />
      <div className="b-footer__contacts">
        <div className="b-footer__contact">
          <span>
            <CustomLink title={contacts.email} href={`mailto:${contacts.email}`} inverted />
          </span>
          <span>
            {contacts.phone}
          </span>
        </div>
        <div className="b-footer__contact">
          {contacts.address.map(address => (
            <span key={address}>
              {address}
            </span>
          ))}
        </div>
      </div>
      {/* <div className="b-footer__links">
        {links.map(link => (
          <CustomLink key={link.title} title={link.title} href={link.href} uppercase inverted />
        ))}
      </div> */}
    </div>
    <style jsx>
      {style}
    </style>
  </div>
);

Footer.propTypes = {
  contacts: PropTypes.shape({
    address: PropTypes.arrayOf(PropTypes.string),
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
  links: PropTypes.arrayOf(PropTypes.object),
};
Footer.defaultProps = {
  contacts: {
    address: [
      'Country, City',
      'Address 1/2',
    ],
    email: 'user@example.com',
    phone: '+79123456789',
  },
  links: [],
};

export default Footer;
