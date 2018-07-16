import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Title from '../Title';
import style from './style';
import imageBackend from '../../assets/img/extraservice1.png';

const Services = ({
  title, description, technologies, image,
}) => {
  const renderTechnologies = () => {
    const rendered = technologies.map(technologie => (
      <div className="renderedTWrapper" key={technologie}>
        <div className="chevron" />
        <div>
          <Text>
            {technologie}
          </Text>
        </div>
        <style jsx>
          {style}
        </style>
      </div>
    ));
    return rendered;
  };
  return (
    <div className="ser-wrapper">
      <div className="ser-wrapper__imageWrapper">
        <img src={image} alt="title" />
      </div>
      <div className="ser-wrapper__textmedium">
        <Title title={title} />
      </div>
      <div className="ser-wrapper__descr">
        <Text>
          {description}
        </Text>
      </div>
      <div className="overWrapper">
        {renderTechnologies()}
      </div>
      <style jsx>
        {style}
      </style>
    </div>
  );
};

export default Services;

Services.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
};

Services.defaultProps = {
  title: 'Back-end Development',
  description: 'Rocket fast backend with lastest technologies',
  technologies: ['NodeJS', 'MongoDB', 'Docker'],
  image: imageBackend,
};
