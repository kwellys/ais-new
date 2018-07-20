import Cube from 'components/Cube';
import Text from 'components/Text';
import Title from 'components/Title';
import PropTypes from 'prop-types';
import React from 'react';
import windowSize from 'react-window-size';

import style from './style';

const AdvantachesCard = ({
  image, title, text, windowWidth,
}) => (
  <div className="b-adv__wrapper">
    <div className="b-adv__card">
      <Cube isOneImage image={image} />
    </div>
    <div className="b-adv__card-textcontainer">
      <div className="b-adv__title">
        <Title title={title} noAlign={windowWidth < 611} />
      </div>
      <div className="b-adv__text">
        <Text noAlign={windowWidth < 611}>
          {text}
        </Text>
      </div>
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
  windowWidth: PropTypes.number.isRequired,
};
AdvantachesCard.defaultProps = {
  title: 'Title',
  text: 'Text',
};

export default windowSize(AdvantachesCard);
