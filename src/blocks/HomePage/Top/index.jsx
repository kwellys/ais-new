import classname from 'classname';
import Button from '../../../components/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { ImageStyle, PageStyle } from './style';

const TopHomeImage = ({ image }) => {
  if (image == null) {
    return null;
  }

  return (
    <div className="home-page__image">
      <img className="home-page__image_img" src={image} />
      <style jsx>
        {ImageStyle}
      </style>
    </div>
  );
};

TopHomeImage.propTypes = {
  image: PropTypes.string,
};
TopHomeImage.defaultProps = {
  image: null,
};

const TopHomePage = ({
  description,
  image,
  request,
  title,
}) => {
  const pageClass = classname('home-page', {
    'home-page_image': image != null,
  });
  const contentClass = classname('home-page__content', {
    'home-page__content_image': image != null,
    'home-page__content_indent': image == null,
  });
  const titleClass = classname('home-page__title', {
    'home-page__title_left': image != null,
  });
  const descriptionClass = classname('home-page__description', {
    'home-page__description_left': image != null,
  });

  return (
    <div>
      <div className={pageClass}>
        <TopHomeImage image={image} />
        <div className={contentClass}>
          <div className={titleClass}>
            <h1>
              {title}
            </h1>
          </div>
          <div className={descriptionClass}>
            <h1>
              {description}
            </h1>
          </div>
          <div className="m-button">
            <Button title={request} />
          </div>
        </div>
      </div>
      <style jsx>
        {PageStyle}
      </style>
    </div>
  );
};

TopHomePage.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  request: PropTypes.string,
  title: PropTypes.string,
};
TopHomePage.defaultProps = {
  description: '',
  image: null,
  request: '',
  title: '',
};

export default TopHomePage;
