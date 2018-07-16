import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';
import style from './style';

import defaultImageColor from '../../assets/img/Group-1-color.png';
import defaultImageBlack from '../../assets/img/Group-1-black.png';

import Title from '../Title';

const Cube = ({
  imageColor,
  imageBlack,
  isOneImage,
  big,
  title,
  inverted,
  noRotate,
  invisible,
}) => {
  const cubeWrapperClass = classname('b-cube__wrapper', {
    'b-cube__wrapper_big': big,
    'b-cube__wrapper_no-rotate': noRotate,
    'b-cube__wrapper_invisible': invisible,
  });
  const cubeClass = classname('b-cube', {
    'b-cube_one-img': isOneImage,
    'b-cube_big': big,
    'b-cube_inverted': inverted,
    'b-cube_no-rotate': noRotate,
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
          className="b-cube__img b-cube__img_color"
          src={imageColor}
          alt="cube-logo"
        />
        {isOneImage ? null : (
          <img
            className="b-cube__img b-cube__img_black"
            src={imageBlack}
            alt="cube-logo"
          />
        )}
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
  imageColor: PropTypes.string,
  imageBlack: PropTypes.string,
  isOneImage: PropTypes.bool,
  big: PropTypes.bool,
  title: PropTypes.string,
  inverted: PropTypes.bool,
  noRotate: PropTypes.bool,
  invisible: PropTypes.bool,
};
Cube.defaultProps = {
  imageColor: defaultImageColor,
  imageBlack: defaultImageBlack,
  isOneImage: false,
  big: false,
  title: '',
  inverted: false,
  noRotate: false,
  invisible: false,
};

export default Cube;
