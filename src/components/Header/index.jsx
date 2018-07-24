import classname from 'classname';
import Button from '../Button';
import CustomLink from '../CustomLink';
import Logo from '../Logo';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import style from './style';
import HamburgerMenu from '../HamburgerMenu';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFixed: false,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.scrolled);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.scrolled);
  };

  scrolled = () => {
    if (window.scrollY > 50) {
      this.setState({ isFixed: true });
    } else {
      this.setState({ isFixed: false });
    }
  };

  render() {
    const { isFixed } = this.state;
    const { links, onClick } = this.props;
    const renderLinks = () => {
      const rendered = links.map(link => (
        <CustomLink key={link.title} title={link.title} href={link.href} uppercase />
      ));
      return rendered;
    };
    const headerClasses = classname('b-header', { scrolled: isFixed });
    const linkClasses = classname('b-header__links', { links__scrolled: isFixed });
    return (
      <div className={headerClasses}>
        <div className="b-header__content">
          <Logo small={isFixed} />
          <div className={linkClasses}>
            {renderLinks()}
          </div>
          <div className="b-header__button">
            <Button title="request a quote" onClick={onClick} scrollStatus={isFixed} />
          </div>
          <div className="b-header__m-menu">
            <HamburgerMenu links={links} />
          </div>

        </div>
        <style jsx>
          {style}
        </style>
      </div>
    );
  }
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
};
Header.defaultProps = {
  links: [],
};
export default Header;