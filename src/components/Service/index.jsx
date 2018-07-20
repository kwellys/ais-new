import imageBackend from 'assets/img/extraservice1.png';
import Text from 'components/Text';
import Title from 'components/Title';
import PropTypes from 'prop-types';
import React from 'react';
import style from './style';

class Services extends React.Component {
  render() {
    const {
      title, description, technologies, image,
    } = this.props;
    const renderTechnologies = () => {
      const rendered = technologies.map(technologie => (
        <div className="rendered-twrapper" key={technologie}>
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
        <div className="ser-wrapper__image-wrapper">
          <img src={image} alt="title" style={{ width: '100%' }} />
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
  }
}

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
