import defaultImage from 'assets/img/service1.png';
import Text from 'components/Text';
import Title from 'components/Title';
import PropTypes from 'prop-types';
import React from 'react';

import style from './style';

const Card = ({ image, title, text }) => (
  <div className="b-card">
    <div className="b-card__body">
      <div className="b-card__image">
        <img src={image} alt="card-logo" style={{ maxWidth: '100%' }} />
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
