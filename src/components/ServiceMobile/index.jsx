import imageBackend from 'assets/img/extraservice1.png';
import Text from 'components/Text';
import Title from 'components/Title';
import PropTypes from 'prop-types';
import React from 'react';

import style from './style';

const ServicesMobile = ({
  title, description, technologies, image, isMobileOpen, onClick,
}) => (
  <div className="serv-mobile" onClick={onClick}>
    <div className="serv-mobile__header">
      <div className="serv-mobile__image-wrapper">
        <img src={image} alt="title" style={{ width: '100%' }} />
      </div>
      <div className="serv-mobile__title">
        <Title title={title} />
      </div>
    </div>
    <div className="serv-mobile__body">
      <div className="serv-mobile__text">
        <Text noAlign>
          {description}
        </Text>
      </div>
      <div className="serv-mobile__list">
        {technologies.map(technologie => (
          <div className="rendered-twrapper" key={technologie}>
            <div className="chevron" />
            <div>
              <Text noAlign>
                {technologie}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
    <style jsx>
      {style}
    </style>
    <style jsx>
      {
      `
      .serv-mobile__body {
        max-height: ${isMobileOpen ? '600px' : '0'};
      }
      .serv-mobile {
        padding-bottom: ${isMobileOpen ? '18px' : '0'};
      }
      `
    }

    </style>
  </div>
);

ServicesMobile.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  isMobileOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ServicesMobile.defaultProps = {
  title: 'Back-end Development',
  description: 'Rocket fast backend with lastest technologies',
  technologies: ['NodeJS', 'MongoDB', 'Docker'],
  image: imageBackend,
  isMobileOpen: false,
};

export default ServicesMobile;
