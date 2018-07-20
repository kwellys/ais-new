import defaultImage from 'assets/img/Group-1.png';
import classname from 'classname';

import Title from 'components/Title';
import PropTypes from 'prop-types';
import React from 'react';
import style from './style';

const Cube = ({
  big,
  highlight,
  darkened,
  image,
  inverted,
  invisible,
  isOneImage,
  noRotate,
  title,
}) => {
  const cubeWrapperClass = classname('b-cube__wrapper', {
    'b-cube__wrapper_big': big,
    'b-cube__wrapper_invisible': invisible,
    'b-cube__wrapper_no-rotate': noRotate,
  });
  const cubeClass = classname('b-cube', {
    'b-cube_big': big,
    'b-cube_darkened': darkened,
    'b-cube_highlight': highlight,
    'b-cube_inverted': inverted,
    'b-cube_no-rotate': noRotate,
    'b-cube_one-img': isOneImage,
  });

  const renderContent = () => {
    if (title !== '') {
      return (
        <div className="b-cube__content">
          <Title title={title} big />
          <style jsx>
            {style}
          </style>
        </div>
      );
    }
    return (
      <div className="b-cube__content">
        <img
          className="b-cube__img"
          src={image}
          alt="cube-logo"
        />
        <style jsx>
          {style}
        </style>
      </div>
    );
  };

  return (
    <div className={cubeWrapperClass}>
      <div className={cubeClass}>
        {renderContent()}
      </div>
      <style jsx>
        {style}
      </style>
    </div>
  );
};

Cube.propTypes = {
  big: PropTypes.bool,
  darkened: PropTypes.bool,
  highlight: PropTypes.bool,
  image: PropTypes.string,
  inverted: PropTypes.bool,
  invisible: PropTypes.bool,
  isOneImage: PropTypes.bool,
  noRotate: PropTypes.bool,
  title: PropTypes.string,
};
Cube.defaultProps = {
  big: false,
  darkened: false,
  highlight: false,
  image: defaultImage,
  inverted: false,
  invisible: false,
  isOneImage: false,
  noRotate: false,
  title: '',
};

export default Cube;
