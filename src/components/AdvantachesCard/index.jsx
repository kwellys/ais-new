import React from 'react';
// import classname from 'classname';
import PropTypes from 'prop-types';

import style from './style';

import Cube from '../Cube';
import Title from '../Title';
import Text from '../Text';

const AdvantachesCard = ({ image, title, text }) => (
  <div className="b-adv__wrapper">
    <div className="b-adv__card">
      <Cube isOneImage imageColor={image} />
    </div>
    <div className="b-adv__title">
      <Title title={title} />
    </div>
    <div className="b-adv__text">
      <Text>
        {text}
      </Text>
    </div>
    <style jsx>
      {style}
    </style>
  </div>
);
AdvantachesCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
};
AdvantachesCard.defaultProps = {
  title: 'Title',
  text: 'Text',
};

export default AdvantachesCard;
