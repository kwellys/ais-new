import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';

import style from './style';

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
    document.getElementsByTagName('body')[0].style = 'overflow: hidden;padding-right: 20px;';
  }

  handleClose = () => {
    this.setState({ isOpen: false });
    document.getElementsByTagName('body')[0].style = '';
  }

  render() {
    const { isOpen } = this.state;
    const { links, onClick } = this.props;
    const renderMenu = () => (
      <div className="b-hamburger__menu-box">
        <button className="b-hamburger__close" type="button" onClick={this.handleClose} />
        <div className="b-hamburger__cube" />
        <div className="b-hamburger__menu-container">
          {links.map(link => (
            <a className="b-hamburger__menu-item" href={link.href} key={link.title}>
              {link.title}
            </a>
          ))}
          <Button inverted title="Request a quote" onClick={onClick} />

        </div>
        <style jsx>
          {style}
        </style>
      </div>
    );
    return (
      <div>
        <div className="b-hamburger">
          <button className="b-hamburger__icon" type="button" onClick={this.handleOpen}>
            <div className="b-hamburger__line" />
            <div className="b-hamburger__line" />
            <div className="b-hamburger__line" />
          </button>
          {isOpen ? renderMenu() : null}
        </div>
        <style jsx>
          {style}
        </style>
      </div>
    );
  }
}

HamburgerMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};
HamburgerMenu.defaultProps = {
  links: [{}],
};

export default HamburgerMenu;
