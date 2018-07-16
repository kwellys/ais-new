import React from 'react';
import PropTypes from 'prop-types';

import style from './style';

import Title from '../Title';
import Text from '../Text';

import defaultImage from '../../assets/img/service1.png';

const Card = ({ image, title, text }) => (
  <div>
    <div className="b-card">
      <div className="b-card__body">
        <div className="b-card__image">
          <img src={image} alt="card-logo" />
        </div>
        <div className="b-card__title">
          <Title title={title} />
        </div>
        <div className="b-card__text">
          <Text>
            {text}
          </Text>
        </div>
      </div>
    </div>
    <style jsx>
      {style}
    </style>
  </div>
);

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
Card.defaultProps = {
  image: defaultImage,
  title: 'title',
  text: 'text',
};

export default Card;
